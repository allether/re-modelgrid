
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'

cn = require 'classnames'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar,Overlay} = require 'lerp-ui'

css = require './ModelGrid.less'
MethodsView = require './MethodsView.coffee'
 

CHAR_W = 7.8
CELL_PAD = 10
MAX_CHAR = 32

class InputCell extends Component
	constructor: (props)->
		super(props)
		@state =
			value: props.value
			focus: no
	onInput: (e)=>
		@setState
			value: e.target.value
	onFocus: ()=>
		@setState
			focus: yes
	onBlur: ()=>
		if @props.value != @state.value
			@props.onSave(@state.value)
		@setState
			focus: no
	onHoverOn: =>
		@setState
			hover: yes
	onHoverOff: =>
		@setState
			hover: no

	inputRef: (el)=>
		@_ref = el
	
	onEnter: (e)=>
		if e.keyCode == 13
			@_ref.blur()
	
	componentWillUpdate: (props)->
		if @props.value != props.value
			@state.value = props.value
	render: (props)->
		# if typeof @state.value == 'number'
			# type = 'number'
		h 'input',		
			value: @state.value
			type: typeof @state.value
			placeholder: props.value
			onFocus: @onFocus
			ref: @inputRef
			onMouseEnter: @onHoverOn
			onMouseLeave: @onHoverOff
			onKeyDown: @onEnter
			onInput: @onInput
			onBlur: @onBlur
			# onInput: @props.updateKeyValue.bind(null,key_name)
			style:
				border: @state.focus && '1px dashed' || 'none'
				padding: @state.focus && '0px 9px' || '0px 10px'
				paddingBottom: '1px'
				# caretColor: @context.__theme.secondary.true
				color: (@state.focus || @state.hover) && @context.__theme.secondary.inv[0] || @context.__theme.secondary.inv[1]
				borderColor: @context.__theme.secondary.inv[0]
				background: (@state.focus || @state.hover) && @context.__theme.secondary.color[0] || @context.__theme.secondary.color[1]
			btn_type: 'primary'



class DocumentMethodMenu extends Component
	
	runDataItemMethod: (method)=>
		@props.runDataItemMethod(@props.data_item,method)
	

	mapMenuMethodsButtons: (method,i)=>
		if method.render
			method_content = h MenuTab,
				content: method.render(@props.data_item)

		h MenuTab,
			key: i
			vert: yes
			content: h Input,
				onClick: @props.runDataItemMethod.bind(method)
				type: 'button'
				i: method.render && 'subject' || 'play_arrow'
				label: [
					method.label
					h 'span',{className: css['model-grid-opaque']},String(method.name).padStart(MAX_CHAR)
				]
			method_content
	
	showMenu: =>
		@setState show_menu: yes
	
	hideMenu: =>
		@setState show_menu: no

	confirmDelete: =>
		@setState
			confirm_delete: yes

	hideConfirmDelete: =>
		@setState
			confirm_delete: no

	render: (props)->
		h Menu,
			vert: no
			force_split_x: 1
			force_split_y: 1
			big: no
			hover_reveal_enabled: no
			backdrop_color: @context.__theme.primary.inv[3]
			enable_backdrop: yes
			className: css['data-item-method-menu']
			h MenuTab,
				vert: yes
				show_backdrop: yes
				reveal: yes
				onClickBackdrop: props.onHide
				tab_style:
					width: '300px'
				content: h Input,
					type: 'label'
					label: [
						props.schema.name
						h 'span',{className: css['model-grid-slash']},'/'
						h 'span',{style:{fontWeight:600,color:@context.__theme.secondary.inv[0]}},props.data_item._label || props.data_item._id
					]
				
				h MenuTab,
					content: h Input,
						type: 'button'
						i: 'code'
						onClick: @props.showJSONView
						label: 'edit JSON'
				
				h MenuTab,
					key: 'del'
					vert: yes
					reveal: @state.confirm_delete
					show_backdrop: @state.confirm_delete
					onClick: @confirmDelete
					onClickBackdrop: @hideConfirmDelete
					content: h Input,
						type: 'button'
						i: 'delete'
						label: 'delete'
					
					h MenuTab,
						content: h Input,
							i: 'delete'
							type: 'button'
							style:
								background: @context.__theme.primary.warn
								color: 'white'
							label: 'confirm'
							onClick: props.deleteDataItem
				
				h MethodsView,
					methods: props.methods || props.schema.methods || []
					runDataItemMethod: props.runDataItemMethod
					data_item: props.data_item




class GridView extends Component
	contructor: (props)->
		super(props)
		@state=
			force_update_grid: props.force_update_grid

	
	saveCellInput: (key_name,value)->
		update = {}
		update[key_name] = value
		# log 'saveCellInput -> updateDataItem',update
		@props.updateDataItem(update)

	
	
	gridRef: (el)=>
		@_grid = el		
	
	slideRef: (el)=>
		@_grid_slide = el


	toggleSortKey: (key)=>
		keys = Object.assign {},@props.query_item.sort_keys
		if !keys[key]
			keys[key] = -1
		else if keys[key] == -1
			keys[key] = 1
		else 
			keys[key] = undefined
		# log keys
		if @props.query_item.called_at
			@props.cloneQueryItemAndSet
				sort_keys: keys
			,@props.query_item,true
		else
			@props.updateQueryItem
				sort_keys: keys
			,@props.query_item
		@setState
			force_update_grid: yes


	onSelectDocumentById: (doc_id)=>
		@props.onSelectDocumentById(doc_id)

	showMethodMenu: (g_opts)=>
		@setState
			show_method_menu: yes
			data_item_g_opts: g_opts
		@props.selectDataItem(@props.data[g_opts.rowIndex-1])
	hideMethodMenu: =>
		@setState
			show_method_menu: no
			data_item_g_opts: null

	columnWidth: (g_opts)=>
		if g_opts.index == 0
			return 30
		
		key_name = @props.query_item.layout_keys[g_opts.index-1]
		if !key_name
			console.warn g_opts.index-1,@props.query_item.layout_keys
			return null
		key = @props.schema.keys[key_name]
		if !key
			throw new Error 'schema key not found ,'+key_name

		return key.col_width



	# {index, isScrolling, key, parent, style}
	renderCell: (g_opts)=>
		schema = @props.schema
		data = @props.data
		is_key = g_opts.rowIndex == 0
		
		
		if !is_key && @props.data_item
			is_selected = @props.data_item._id == data[g_opts.rowIndex-1]._id
		
		if g_opts.rowIndex % 2 == 0
			alt_cell = true
		
		if g_opts.rowIndex != 0 && is_selected
			g_opts.style.color = @context.__theme.secondary.inv[0]
		
		if alt_cell
			g_opts.style.background = @context.__theme.primary.inv[1]

		if g_opts.rowIndex != 0 && is_selected
			g_opts.style.background = @context.__theme.secondary.color[1]
			

		if g_opts.columnIndex == 0
			if is_key
				return null
			
			
			
			
			g_opts.style.width = '100%'
			return h 'div',
				style: g_opts.style
				key: g_opts.key
				onClick: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1])
				h 'div',
					className: cn css['model-grid-cell'],css['model-grid-cell-method-button'],'material-icons'
					onClick: @showMethodMenu.bind(@,g_opts)
					'more_horiz'
		else
			key_name = @props.query_item.layout_keys[g_opts.columnIndex-1]
			key = schema.keys[key_name]
			edit_key = !is_key && @state.edit_key == key_name && is_selected
			if !key
				throw new Error 'invalid key '+key_name
		
		
		if !is_key
			value = data[g_opts.rowIndex-1][key_name]
		
		# log 'render cell'
		if is_selected && key.can_edit
			value = h InputCell,
				value: value
				onSave: @saveCellInput.bind(@,key_name)
		else if !is_key && typeof value == 'string'
			v_w = value.length * CHAR_W + CELL_PAD*2
			max_l = Math.floor( (key.col_width- CELL_PAD*2) / CHAR_W)
			if v_w > key.col_width
				value = value.substring(0,max_l-2)+'..'


		# log is_key
		if is_key
			# log 'is key'
			if !@props.query_item.sort_keys[key_name]
				arrow_color = @context.__theme.primary.color[2]
				rotate_arrow = 'keyboard_arrow_left'
			else if @props.query_item.sort_keys[key_name] == 1
				rotate_arrow = 'keyboard_arrow_up'
				arrow_color = @context.__theme.secondary.false

			else if @props.query_item.sort_keys[key_name] == -1
				rotate_arrow = 'keyboard_arrow_down'
				arrow_color = @context.__theme.secondary.true
			g_opts.style.color = arrow_color
			return h 'div',
				className: (css['model-grid-cell']+' '+css['model-grid-key'])
				style: g_opts.style
				key: g_opts.key
				onClick: key.indexed && @toggleSortKey.bind(null,key_name)
				h 'div',className:css['model-grid-label'],key.label
				key.indexed && h 'i',
					className: 'material-icons '+css['model-grid-key-toggle']
					rotate_arrow

		return h 'div',
			style: g_opts.style
			key: g_opts.key
			h 'div',
				onMouseDown: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1])
				className: css['model-grid-cell']
				key.render && key.render(schema,data[g_opts.rowIndex-1]) || value

		# return h 'div',
		# 	className: css['model-grid-cell']
		# 	onClick: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1])
		# 	style: g_opts.style
		# 	key: g_opts.key
		# 	value
	

	columnCount: ->
		return 5


	getGridKey: (props)->
		model_name = props.schema.name
		model_name+'-'+props.query_item._id+'-'+props.query_item.completed_at+'-'+props.query_item.layout_keys


	componentWillUpdate: (props,state)->
		if !props.data_item
			@state.show_method_menu = false
		if props.data_item && props.data_item != @state.data_item
			state.force_update_grid = true
			state.data_item = props.data_item
			state.edit_key = null
		g_k = @getGridKey(props)
		# log g_k
		if g_k != state.grid_key
			state.grid_key = g_k
			state.force_update_grid = true


	componentDidUpdate: ->
		# log 'did update'
		if (@state.force_update_grid) && @_grid
			@state.force_update_grid = false
			# log 'recomputing GridView _grid'
			@_grid?.recomputeGridSize()


	componentDidMount: ->
		@state.grid_key = @getGridKey(@props)
		@forceUpdate()

	onShowMenu: =>
		@setState
			scroll_to_data_item: true
	
	rowHeight: (r_opts)=>
		return 30
	
	render: (props,state)->
		schema = props.schema
		data = props.data
		query_item = props.query_item


	


		if @state.show_method_menu
			method_menu = h DocumentMethodMenu,
				g_opts: state.data_item_g_opts
				methods: props.methods
				onHide: @hideMethodMenu
				showJSONView: props.showJSONView
				deleteDataItem: props.deleteDataItem
				runDataItemMethod: props.runDataItemMethod
				data_item: props.data_item
				schema: props.schema
	
			
		if @_grid_slide
			grid = h MultiGrid,
				styleTopRightGrid:
					background:  @context.__theme.primary.inv[1]
				className: css['model-grid-list']
				# hideTopRightGridScrollbar: yes
				ref: @gridRef
				# key: props.schema.name
				# onScroll: @onGridScroll
				cellRenderer: @renderCell
				columnWidth: @columnWidth
				# scrollToRow: scroll_to_index
				columnCount: query_item.layout_keys.length + 1 || 0
				fixedColumnCount:0
				fixedRowCount:1
				height:@_grid_slide._outer.clientHeight
				rowHeight:@rowHeight
				rowCount:data.length+1
				width:@_grid_slide._outer.clientWidth
		
		h Slide,
			beta: 100
			ref: @slideRef
			grid || null
			method_menu || null
			


module.exports = GridView
