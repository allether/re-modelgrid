
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'

cn = require 'classnames'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'

css = require './ModelGrid.less'

CHAR_W = 7.8
CELL_PAD = 10

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
				paddingTop: '1px'
				# caretColor: @context.__theme.secondary.true
				color: (@state.focus || @state.hover) && @context.__theme.secondary.inv[0] || @context.__theme.secondary.inv[2]
				borderColor: @context.__theme.secondary.inv[0]
				background: (@state.focus || @state.hover) && @context.__theme.secondary.color[1] || @context.__theme.secondary.color[0]
			btn_type: 'primary'


class GridView extends Component
	contructor: (props)->
		super(props)
		@state=
			force_update_grid: props.force_update_grid

	
	saveCellInput: (key_name,value)->
		update = {}
		update[key_name] = value
		log 'saveCellInput -> updateDataItem',update
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
		log keys
		if @props.query_item.called_at
			@props.cloneQueryItemAndSet
				sort_keys: keys
			,@props.query_item
		else
			@props.updateQueryItem
				sort_keys: keys
			,@props.query_item
		@setState
			force_update_grid: yes


	onSelectDocumentById: (doc_id)=>
		@props.onSelectDocumentById(doc_id)

	mapMenuMethodsButtons: (doc_method,i)=>
		h MenuTab,
			key: i
			vert: yes
			# className: css['model-grid-menu-tab-option']
			content: h Input,
				onClick: doc_method.fn?.bind(undefined,doc_method)
				type: 'button'
				btn_type: 'primary'
				label: doc_method.method_label

	columnWidth: (g_schema)=>
		if g_schema.index == 0
			return 30
		
		key_name = @props.query_item.layout_keys[g_schema.index-1]
		key = @props.schema.keys[key_name]

		return key.col_width


	renderDocumentMethodMenu: (g_schema)->
		schema = @props.schema
		data = @props.data


		h Menu,
			vert: no
			bounding_box: @base.getBoundingClientRect()
			big: no
			enable_backdrop: yes
			h MenuTab,
				vert: yes
				reveal: yes
				content: h Input,
					type: 'button'
					btn_type: 'primary'
					i: 'menu'
				h MenuTab,
					content: h Input,
						type: 'button'
						btn_type: 'primary'
						i: 'delete'
				h MenuTab,
					content: h Input,
						type: 'button'
						btn_type: 'primary'
						onClick: @props.showJSONView
						i: 'code'


	# {index, isScrolling, key, parent, style}
	renderCell: (g_schema)=>
		schema = @props.schema
		data = @props.data
		is_key = g_schema.rowIndex == 0
		if !is_key && @props.data_item
			is_selected = @props.data_item._id == data[g_schema.rowIndex-1]._id
		g_schema.style.whiteSpace = 'nowrap'
		if g_schema.rowIndex % 2 == 0
			alt_cell = true
		if alt_cell
			g_schema.style.background = @context.__theme.primary.inv[1]

		if g_schema.rowIndex != 0 && is_selected
			g_schema.style.background = @context.__theme.secondary.color[0]
			g_schema.style.color = @context.__theme.secondary.inv[0]
			render_method_menu = true
		# render document method menu
		if g_schema.columnIndex == 0
			return h 'div',
				# className: css['']
				style: g_schema.style
				key: g_schema.key
				render_method_menu && @renderDocumentMethodMenu(g_schema) || null



		key_name = @props.query_item.layout_keys[g_schema.columnIndex-1]
		key = schema.keys[key_name]
		# log key_name
		edit_key = !is_key && @state.edit_key == key_name && is_selected
		
		g_schema.style.width = key.col_width
		g_schema.style.overflow = 'hidden'
		if key.center
			g_schema.style.textAlign = 'center'


		if !is_key
			value = data[g_schema.rowIndex-1][key_name]
		# log 'render cell'
		if is_selected && key.can_edit
			g_schema.style.padding = 0
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
			if !@props.query_item.sort_keys[key_name]
				arrow_color = @context.__theme.primary.color[2]
				rotate_arrow = 'keyboard_arrow_left'
			else if @props.query_item.sort_keys[key_name] == 1
				rotate_arrow = 'keyboard_arrow_up'
				arrow_color = @context.__theme.secondary.false

			else if @props.query_item.sort_keys[key_name] == -1
				rotate_arrow = 'keyboard_arrow_down'
				arrow_color = @context.__theme.secondary.true
			g_schema.style.color = arrow_color
			return h 'div',
				className: (css['model-grid-cell']+' '+css['model-grid-key'])
				style: g_schema.style
				key: g_schema.key
				onClick: key.indexed && @toggleSortKey.bind(null,key_name)
				h 'div',className:css['model-grid-label'],key.label
				key.indexed && h 'i',
					className: 'material-icons '+css['model-grid-key-toggle']
					rotate_arrow
	
		return h 'div',
			className: cn(css['model-grid-cell'],css['lui-bar'])
			onClick: !is_selected && @props.selectDataItem.bind(null,data[g_schema.rowIndex-1])
			style: g_schema.style
			key: g_schema.key
			value
	

	columnCount: ->
		return 5


	getGridKey: (props)->
		model_name = props.schema.name
		model_name+'-'+props.query_item._id+'-'+props.query_item.completed_at


	componentWillUpdate: (props,state)->
		if props.data_item && props.data_item != @state.data_item
			state.force_update_grid = true
			state.data_item = props.data_item
			state.edit_key = null
		g_k = @getGridKey(props)
		if g_k != state.grid_key
			state.grid_key = g_k
			state.force_update_grid = true


	componentDidUpdate: ->
		# log 'did update'
		if (@state.force_update_grid) && @_grid
			@state.force_update_grid = false
			log 'recompute'
			@_grid?.recomputeGridSize()


	componentDidMount: ->
		@state.grid_key = @getGridKey(@props)
		@forceUpdate()


	render: (props)->
		schema = props.schema
		data = props.data

		query_item = props.query_item
		


		if @_grid_slide
			grid = h MultiGrid,
				styleTopRightGrid:
					background:  @context.__theme.primary.inv[1]
				className: css['model-grid-list']
				hideTopRightGridScrollbar: yes
				ref: @gridRef
				key: props.schema.name
				onScroll: @onGridScroll
				cellRenderer: @renderCell
				columnWidth: @columnWidth
				columnCount: query_item.layout_keys.length + 1 || 0
				fixedColumnCount:0
				fixedRowCount:1
				height:@_grid_slide._outer.clientHeight
				rowHeight:30
				rowCount:data.length+1
				width:@_grid_slide._outer.clientWidth
		
		h Slide,
			beta: 100
			ref: @slideRef
			grid || null


module.exports = GridView
