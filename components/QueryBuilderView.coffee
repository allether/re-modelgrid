Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
MAX_CHAR = 32
{ DragDropContext, Droppable, Draggable } = require "react-beautiful-dnd"

css = require './ModelGrid.less'
cn = require 'classnames'
JsonView = require './JsonView.coffee'
CodeEditor = require('react-simple-code-editor').default
{ highlight, languages } = require 'prismjs/components/prism-core'
Color = require 'color'




class KeyChip extends Component
	sortKey: (key_name,sort_dir)=>
		k_i = @props.query_item.layout_keys.indexOf key_name
		await @props.setKeyIndex(key_name,k_i,sort_dir)
		

	removeKey: (key_name)=>
		@props.setKeyIndex(key_name,-1)


	render: ->
		{key_obj,index,sort_key,sort_key_i,key_name} = @props
		

		
		

		if sort_key
			if sort_key.dir < 0
				key_sort_down = true
			else if sort_key.dir > 0
				key_sort_up = true
			sort_index_btn = h Input,
				type: 'label'
				btn_type: 'primary'
				label: String(sort_key_i+1)
			sort_dir_btn = h Input,
				type: 'button'
				onClick: @sortKey.bind(@,key_name,((sort_key.dir>0) && -1 || 1))
				btn_type: key_sort_down && 'false' || 'true'
				i: key_sort_down && 'keyboard_arrow_down' || 'keyboard_arrow_up'
			bg =  @context.secondary.inv[0]
			color = @context.secondary.color[0]
		else
			bg = @context.primary.inv[1]
			color = @context.primary.color[0]


		h Draggable,
			draggableId: key_name
			index: index
			(provided,snapshot)=>
				item_style = Object.assign {},provided.draggableProps.style
				
				if item_style.left && @props.offset_left
					item_style.left -= @props.offset_left
				if item_style.top && @props.offset_top
					item_style.top -= @props.offset_top

				item_props = Object.assign {ref: provided.innerRef},provided.draggableProps,provided.dragHandleProps,
					className: css['chip-layout-editor-chip-wrap']
					style: item_style
					key: key_obj.label
				
				h 'div',item_props,
					h 'div',
						className: cn css['chip-layout-editor-chip'],'flex-right full-w'
						style:
							background: bg
							color: color
						h 'i',
							cn: 'material-icons opaque'
							style:
								fontSize: 14
							'drag_indicator'
						h 'span',
							cn: 'reg-mono pad-left no-shrink'
							key_obj.label
						h 'div',
							cn: 'full-w flex-left'
							h Input,
								type: 'button'
								i: 'close'
								btn_type: sort_key && 'primary' || 'default'
								disabled: @props.query_item.layout_keys.length <= 1
								onClick: @removeKey.bind(@,key_name)
							sort_dir_btn
							sort_index_btn


KeyChip.contextType = StyleContext



				

class QueryBuilderView extends Component
	constructor: (props)->
		super(props)
		@state = 
			edit_v: 0
			unused_keys: props.keys_array.filter (key)=>
				props.query_item?.layout_keys.indexOf(key) < 0
			

	compoonentDidUpdate: (props)->
		if @props.query_item != props.query_item
			@setState
				# query_saved: @props.isSavedQuery(@props.query_item)
				unused_keys: @props.keys_array.filter (key)=>
					@props.query_item?.layout_keys.indexOf(key) < 0

	renderUnusedChip: (key_name)=>
		key = @props.keys[key_name]	

		h 'div',
			className: 'flex-right'
			key: key_name				
			h Input,
				type: 'button'
				style:
					width: '100%'
				i: 'add'
				onClick: @addKey.bind(@,key_name)
				label: key.label
			

	addKey: (key_name)=>
		@setKeyIndex(key_name,@props.query_item.layout_keys.length)



	setKeyIndex: (key_name,index,sort_dir)=>
		key_arr = [].concat @props.query_item.layout_keys
		k_i = key_arr.indexOf key_name
		sort_keys = @props.query_item.sort_keys

		if index >= 0
			if k_i >= 0
				key_arr.splice(k_i,1)
			
			f_i = _.findIndex @props.query_item.sort_keys,key:key_name

			if sort_dir?
				if f_i >= 0
					sort_keys.splice(f_i,1)
			
				sort_keys = [].concat sort_keys
				insert_index = Math.min(index,@props.query_item.sort_keys.length)
				
				key_arr.splice(insert_index,0,key_name)
				
				sort_keys.splice insert_index,0,
					key: key_name
					dir: sort_dir


			else
				if f_i >= 0
					sort_keys.splice(f_i,1)

				insert_index = index+sort_keys.length
				key_arr.splice(insert_index,0,key_name)


		else
			key_arr.splice(k_i,1)
			f_i = _.findIndex @props.query_item.sort_keys,key:key_name
			if f_i >= 0
				@props.query_item.sort_keys.splice(f_i,1)
			

		await @props.editQuery
			layout_keys: key_arr
			sort_keys: sort_keys

		@setState
			sorted_provider_key: Date.now()
		


			
	setNewLayoutNameValue: (e)=>
		@setState new_layout_name_value: String(e.target.value).substring(0,MAX_CHAR)
	setNewLayoutKeysValue: (e)=>
		@setState new_layout_keys_value: e.target.value
	showNewLayoutForm: =>
		@setState show_new_layout_form:yes
	hideNewLayoutForm: =>
		@setState show_new_layout_form:no


	submitNewLayoutForm: ()=>
		if !@state.new_layout_name_value
			return
		@props.onCreateLayout(@state.new_layout_name_value,@state.new_layout_keys_value)
		@setState
			new_layout_name_value: null
			new_layout_keys_value: null
			show_new_layout_form: false


	mapMenuLayoutButtons: (layout,i)=>
		h MenuTab,
			key: i
			content: h Input,
				invalid:yes
				onClick: @props.onSelectLayout.bind(null,layout)
				focus: if layout == @props.layouts[@props.layout_index] then false else undefined
				btn_type: layout == @props.layouts[@props.layout_index] && 'primary'
				type: 'button'
				label: [
					layout.label.padEnd(MAX_CHAR)
					h 'span',{className: css['model-grid-opaque']},String(layout.keys.length).padStart(3)
				]


	onDragEnd: (e,n,a)=>
		if !e.destination
			return

		if e.destination.droppableId == 'drop-in'
			if @props.schema.force_keys && e.destination.index < @props.schema.force_keys.length
				return false

		if e.destination.droppableId == 'drop-out' && e.source.droppableId == 'drop-out'
			return 


		if e.destination.droppableId == 'drop-in-sorted'
			if !@props.schema.keys[e.draggableId].indexed
				return false
			# if _.find(@props.query_item.sort_keys,key:e.draggableId)
			if e.source.droppableId == 'drop-in-sorted'
				@setKeyIndex(e.draggableId,e.destination.index,_.find(@props.query_item.sort_keys,key:e.draggableId).dir)
			else
				@setKeyIndex(e.draggableId,e.destination.index,-1)

		else if e.destination.droppableId == 'drop-in'
			@setKeyIndex(e.draggableId,e.destination.index)


	getActiveListStyle: (dragging)->
		background: dragging && @context.primary.color[1] || @context.primary.color[0]
		width: '100%'
	
	getListStyle: (dragging)->
		background: dragging && @context.primary.inv[1] || @context.primary.inv[0]
		width: '100%'

	getItemStyle: (box,index,snapshot,style)=>

		# log box
		
			
		if box == 'drop-in'
			left = '0%'
			bg = @context.secondary.color[1]
			c = @context.secondary.inv[0]
			
		else
			left = '50%'
			bg = @context.primary.inv[1]
			c = @context.primary.color[0]
		
		if snapshot.isDragging
			if snapshot.draggingOver == 'drop-in'
				bg = @context.secondary.color[2]
				c = @context.secondary.inv[0]
			else
				bg = @context.primary.inv[2]
				c = @context.primary.color[0]


		Object.assign {},style,
			height: DIM
			left: (style.left + DIM2*3) || 0
			top: (style.top - DIM2 - 64) || 0
			background: bg
			color: c



	dropInSortedProvider: (provided,snapshot)=>
		props = Object.assign {},provided.droppableProps,
			ref: provided.innerRef
			className: css['chip-layout-editor-dropbox-part']
			style:
				background: @context.secondary.inv[1]
				minHeight: DIM2
		
		

		h 'div',props,
			@props.query_item.sort_keys.map (key,i)=>
				key_name = key.key
				sort_key_i = _.findIndex @props.query_item.sort_keys,key:key_name
				h KeyChip,
					key: key_name+'-sorted-'+String(+@props.query_item.sort_keys[sort_key_i].dir)
					index:i
					offset_top: @props.offset_top
					offset_left: @props.offset_left
					setKeyIndex: @setKeyIndex
					key_obj: @props.keys[key_name]
					query_item: @props.query_item
					sort_key_i: sort_key_i
					sort_key: @props.query_item.sort_keys[sort_key_i]
					key_name: key_name
			provided.placeholder


	dropInProvider: (provided,snapshot)=>
		props = Object.assign {},provided.droppableProps,
			ref: provided.innerRef
			className: css['chip-layout-editor-dropbox-part']

		layout_keys = @props.query_item.layout_keys.filter (key_name)=>
			if !@props.keys[key_name]
				return false

			if _.find(@props.query_item.sort_keys,key:key_name)
				return false
			return true

		h 'div',props,
			layout_keys.map (key_name,i)=>	
				sort_key_i = _.findIndex @props.query_item.sort_keys,key:key_name		
				h KeyChip,
					key: key_name
					index:i
					offset_top: @props.offset_top
					offset_left: @props.offset_left
					setKeyIndex: @setKeyIndex
					key_obj: @props.keys[key_name]
					query_item: @props.query_item
					sort_key_i: sort_key_i
					sort_key: @props.query_item.sort_keys[sort_key_i]
					key_name: key_name
			provided.placeholder



	onEditorValueChange: (val)=>
		@props.editQuery
			json_input: val
		

	onSetQueryType: (type)=>
		@props.editQuery
			type: type
	

	onBookmarkDecriptionInput: (e)=>
		v = e.target.value
		@setState
			edit_v: @state.edit_v+1
			bookmark_description:v
			


	onBookmarkLabelInput: (e)=>
		v = e.target.value
		bookmark_exists = @props.matchQueryByLabelPart(v)?
		@setState
			bookmark_label:v
			edit_v: @state.edit_v+1
			bookmark_label_invalid: if (bookmark_exists || v.length) < 4 then yes else if (!bookmark_exists && v.length >= 4) then no else undefined


	toggleSavePublic: =>
		@setState
			edit_v: @state.edit_v+1
			save_bookmark_public: !@state.save_bookmark_public


	onSaveQuery: =>
		if !@state.bookmark_label || !@state.bookmark_description
			return false
		
		@props.editQuery
			label: @state.bookmark_label
			description: @state.bookmark_description
			is_public: @state.save_bookmark_public
		@props.saveQuery()
		# @props.runQuery()


	onSelectQueryKey: (e)=>
		@props.editQuery
			search_key: e.target.value
		,@props.query_item


	render: ->
		qi = @props.query_item



		if @_pc != @context.primary.color[0]
			@_pc = @context.primary.color[0]
			@_pc_is_dark = !Color(@_pc).isDark()
			@_pc_opaque = Color(@_pc).alpha(0.8).rgb().string()


		@state.unused_keys = @props.keys_array.filter (key)=>
			@props.query_item.layout_keys.indexOf(key) < 0

		if qi.type == 'keyword'
			select_query_key_btn = h Input,
				type: 'select'
				value: qi.search_key
				btn_type: 'primary'
				onInput: @onSelectQueryKey
				i: 'title'
				options: @props.schema.keys_array.map (key_name)=>
					key = @props.schema.keys[key_name]
					h 'option',
						key: key_name
						value: key_name
						key.label

		if qi.type == 'json'
			query_editor = h 'div',
				className: cn css['react-json-container'],css['light'],'hide-scrollbar'
				h CodeEditor,
					value: @props.query_item.json_input || ''
					onValueChange: @onEditorValueChange
					highlight: (code)->
						return highlight(code,languages.javascript)
					padding: 13
					style:
						fontFamily: 'monor, monospace'
						height: 'fit-content'
						fontSize: 13
		else
			# log qi.search_key,@props.schema.keys[qi.search_key]
			query_editor = h 'div',
				className: 'full center flex-right'
				h Input,
					type: 'input'
					i: 'search'
					big: yes
					btn_type: 'flat'
					onInput: (e)=>
						@props.editQuery
							keyword_input: e.target.value
					value: qi.keyword_input
					style: 
						padding: '10px 20px'
					placeholder: 'Search by '+@props.schema.keys[qi.search_key].label

		


					

		if qi.called_at
			clone_query_btn = h Input,
				type: 'button'
				i: 'file_copy'
				onClick: ()=>
					@props.cloneQueryAndSet()
				margin_left: no
				margin_right: yes
				# btn_type: 'true'
				label: 'clone'
				big: yes
		else
			clone_query_btn = h Input,
				type: 'button'
				i: 'sync'
				label: 'reset'
				onClick: @props.clearQuery
				margin_left: no
				margin_right: yes
				# btn_type: 'true'
				big: yes



		if @state.edit_v && @state.bookmark_description && @state.bookmark_label
			save_query_btn = h Input,
				i: 'save'
				label: 'save'
				big: yes
				margin_left: yes
				margin_right: no
				type: 'button'
				btn_type: 'true'
				onClick: @onSaveQuery



		query_title_label = h Input,
			type: 'label'
			label: qi._id
			margin_right: yes
			btn_type: 'flat'
			big: yes
			i: qi.type == 'json' && 'code' || 'search'
		
		
		h 'div',
			className: 'flex-down full'
			h 'div',
				className: 'flex-right pad-bottom'
				h 'div',
					className: 'flex-right'
					style:
						width: '100%'
					clone_query_btn
				h 'div',
					className: 'flex-left'
					style:
						width: '100%'
					save_query_btn
			h 'div',
				className: cn 'card full-w box-shadow'
				style:
					transform: 'none'
					background: @context.primary.inv[0]
				
				h 'div',
					className: 'flex-right full'
					style:
						height: 350-DIM*2
						background: @context.primary.inv[1]
					h 'div',
						className: cn 'flex-down full',css['chip-layout-editor-dropbox'],'slim-scrollbar'
						style:
							background: @context.primary.inv[0]
						h DragDropContext,
							onDragEnd: @onDragEnd
							h Droppable,
								droppableId: 'drop-in-sorted'
								droppableKey: @state.sorted_provider_key
								@dropInSortedProvider
							h Droppable,
								droppableId: 'drop-in'
								droppableKey: @state.sorted_provider_key
								@dropInProvider
					h 'div',
						className: cn css['chip-layout-editor-dropbox'],'mpad'
						style:
							background: @context.primary.inv[1]
							width: '65%'
						@state.unused_keys.map (key_name,i)=>
							if !@props.keys[key_name]
								return null
							@renderUnusedChip(key_name,@props.keys[key_name])
				
				h 'div',
					className: 'flex-down'
					style:
						height: DIM*6
						transform: 'translate(0)'
						borderTop: '2px solid '+@context.primary.inv[2]
						background: @context.primary.inv[0]
					query_editor
					h 'div',
						cn: 'top-right mpad flex-left'
						h Input,
							type: 'button'
							i: 'code'
							onClick: @onSetQueryType.bind(@,'json')
							btn_type: @props.query_item.type == 'json' && 'primary' || 'flat'
						h Input,
							type: 'button'
							i: 'search'
							onClick: @onSetQueryType.bind(@,'keyword')
							btn_type: @props.query_item.type == 'keyword' && 'primary' || 'flat'
					h 'div',
						cn: 'top-left mpad'
						select_query_key_btn
					h 'div',
						cn: 'bot-right mpad flex-right'
						h 'span',
							cn: 'mpad small-mono-fat'
							style:
								color: @context.primary.color[2]
							qi._id
						h Input,
							type: 'button'
							i: 'refresh'
							btn_type: !qi.json_input && !qi.keyword_input && 'flat' || 'primary'
							disabled: !qi.json_input && !qi.keyword_input
							onClick: @props.clearQueryInput
							
					h 'div',
						cn: 'bot-left pad'
						h 'span',
							cn: 'small-mono'
							style:
								color: @context.primary.inv[3]
							'using '+@props.query_item.type
						@props.query_item.type == 'json' && h 'span',
							cn: 'small-mono-fat pad-left'
							style:
								color: @props.query_item.error && @context.primary.false || @context.primary.true
							@props.query_item.error || 'ok'





QueryBuilderView.contextType = StyleContext
			


module.exports = QueryBuilderView