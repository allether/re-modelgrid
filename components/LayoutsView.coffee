Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
css = require './ModelGrid.less'
MAX_CHAR = 32
{ DragDropContext, Droppable, Draggable } = require "react-beautiful-dnd"



class LayoutsView extends Component
	constructor: (props)->
		super(props)
		@state = 
			unused_keys: []
		@_scroll_top = 0
	# onSelectKey: (key_name)=>
	# 	key_arr = [].concat @props.query_item.layout_keys

	# 	k_i = key_arr.indexOf key_name
	# 	if k_i >= 0 
	# 		key_arr.splice(k_i,1)
	# 	else
	# 		key_arr.push key_name

	

	# 	if @props.query_item.called_at
	# 		@props.cloneQueryItemAndSet
	# 			layout_keys: key_arr
	# 		,@props.query_item
		
	# 	else
	# 		@props.updateQueryItemAndSet
	# 			layout_keys: key_arr
	# 		,@props.query_item



	addKey: (key_name)=>
		@setKeyIndex(key_name,0)

	removeKey: (key_name)=>
		@setKeyIndex(key_name,-1)

	setKeyIndex: (key_name,index,splice)=>
		key_arr = [].concat @props.query_item.layout_keys

		k_i = key_arr.indexOf key_name

		
		if index >= 0
			splice && key_arr.splice(k_i,1)
			key_arr.splice(index,0,key_name)
		else
			key_arr.splice(k_i,1)
		

		if @props.query_item.called_at
			@props.cloneQueryItemAndSet
				layout_keys: key_arr
			,@props.query_item
		
		else
			@props.updateQueryItemAndSet
				layout_keys: key_arr
			,@props.query_item

	



	updateUnusedKeys: (props,state)->
		state.unused_keys = state.unused_keys.filter (key)->
			props.query_item.layout_keys.indexOf(key) < 0


	resetUnusedKeys: (props,state)->
		state.unused_keys = props.keys_array.filter (key)->
			props.query_item.layout_keys.indexOf(key) < 0

	
	componentWillMount: ->
		@resetUnusedKeys(@props,@state)
		
		
	componentWillUpdate: (props,state)->
		if props.keys_array != @props.keys_array
			@resetUnusedKeys(props,state)
		if props.query_item.layout_keys != @props.query_item.layout_keys
			@updateUnusedKeys(props,state)
			

			


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
			# onClick: @togglePinMenu.bind(@,'layout')
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

	
	
	onDragEnd: (e)=>
		if !e.destination
			return

		if e.destination.droppableId == 'drop-out' && e.source.droppableId == 'drop-out'
			@state.unused_keys.splice e.source.index,1
			@state.unused_keys.splice(e.destination.index,0,e.draggableId)

		else if e.destination.droppableId == 'drop-in' && e.source.droppableId == 'drop-out'
			@state.unused_keys.splice e.source.index,1
			@setKeyIndex(e.draggableId,e.destination.index,false)

		else if e.destination.droppableId == 'drop-in' && e.source.droppableId == 'drop-in'
			@setKeyIndex(e.draggableId,e.destination.index,true)

		else if e.source.droppableId == 'drop-in' && e.destination.droppableId == 'drop-out'
			@state.unused_keys.splice e.destination.index,0,e.draggableId
			@setKeyIndex(e.draggableId,-1)




	getActiveListStyle: (dragging)->
		background: dragging && @context.secondary.color[1] || @context.secondary.color[0]
	getListStyle: (dragging)->
		background: dragging && @context.primary.inv[1] || @context.primary.inv[0]

	getItemStyle: (box,index,snapshot,style)=>

		# log style
		
			
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
			left: style.left - @_rect?.left || 0
			top: style.top - @_rect?.top || 0
			background: bg
			color: c

	# onScroll: (e)=>
	# 	@_scroll_top = e.target.scrollTop
		# log @_scroll_top
	containerRef: (el)=>
		@_rect = el?.getBoundingClientRect()
		# log @_rect

	renderForm: ->
		
		h 'div',
			className: css['methods-list-container-scroll-wrap']
			ref: @containerRef
			h 'div',
				className: css['methods-list-container-scroll']
				# onScroll: @onScroll
				h 'div',
					className: css['methods-list-container']
					style:
						background: @context.primary.inv[0]
					h DragDropContext,
						onDragEnd: @onDragEnd
						h Droppable,
							droppableId: 'drop-in'
							(provided, snapshot)=>
								
								props = Object.assign {},provided.droppableProps,
									ref: provided.innerRef
									className: css['methods-list-container-box']
									style: @getActiveListStyle(snapshot.isDraggingOver)
								h 'div',props,
									@props.query_item.layout_keys.map (key_name,i)=>
										h Draggable,
											key: key_name
											draggableId: key_name
											index: i
											(provided,snapshot)=>
												item_props = Object.assign {ref: provided.innerRef},provided.draggableProps,provided.dragHandleProps,
													className: css['methods-list-container-item']
													style: @getItemStyle('drop-in',i,snapshot,provided.draggableProps.style)
													
												h 'div',item_props,@props.keys[key_name].label 
									provided.placeholder

						h Droppable,
							droppableId: 'drop-out'
							isDropDisabled: @props.query_item.layout_keys.length <= 1
							(provided, snapshot)=>
								# log provided,snapshot
								props = Object.assign {},provided.droppableProps,
									ref: provided.innerRef
									className: css['methods-list-container-box']
									style: @getListStyle(snapshot.isDraggingOver)
								h 'div',props,
									@state.unused_keys.map (key_name,i)=>
										h Draggable,
											key: key_name
											draggableId: key_name
											index: i
											(provided,snapshot)=>
												item_props = Object.assign {ref: provided.innerRef},provided.draggableProps,provided.dragHandleProps,
													className: css['methods-list-container-item']
													style: @getItemStyle('drop-out',i,snapshot,provided.draggableProps.style)
												h 'div',item_props,@props.keys[key_name].label 

									provided.placeholder
					


	


	render: ->

		tab_options = 
			vert: yes
			big: no
			force_split_x: -1
			force_bar_dir_x: -1
			force_split_y: 1
			force_bar_dir_y: 1
			onClickBackdrop: @props.onHide
			reveal: @props.reveal
			show_backdrop: @props.reveal
			content: h Input,
				onClick: @props.onClick
				type: 'button'
				btn_type: 'flat'
				i: 'view_week'
				label: [
					h 'span',{key:1,className: css['model-grid-slash']},'/'
					String(@props.query_item.layout_keys.length).padStart(2)
				]

		if @props.reveal
			form_tab = @renderForm()

		h MenuTab,
			tab_options
			form_tab
			
			
			
				
			
LayoutsView.contextType = StyleContext
			


module.exports = LayoutsView