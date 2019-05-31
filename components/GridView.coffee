
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'
cn = require 'classnames'
Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,Overlay,StyleContext} = require 're-lui'

css = require './ModelGrid.less'
MethodsView = require './MethodsView.coffee'
 

CHAR_W = 7.8
CELL_PAD = 10
MAX_CHAR = 32

class InputCell extends Component
	constructor: (props)->
		super(props)
		@state =
			value: props.value || ''
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
	
	render: ->
		h 'input',		
			value: @state.value
			type: typeof @state.value
			placeholder: @props.value
			onFocus: @onFocus
			ref: @inputRef
			onMouseEnter: @onHoverOn
			onMouseLeave: @onHoverOff
			onKeyDown: @onEnter
			onChange: @onInput
			onBlur: @onBlur
			style:
				border: @state.focus && '1px dashed' || 'none'
				paddingLeft: @state.focus && '9px' || '10px'
				color: (@state.focus || @state.hover) && @context.secondary.inv[0] || @context.secondary.inv[1]
				borderColor: @context.secondary.inv[0]
				background: (@state.focus || @state.hover) && @context.secondary.color[0] || @context.secondary.color[1]
			btn_type: 'primary'

InputCell.contextType = StyleContext
















class GridView extends Component
	constructor: (props)->
		super(props)
		@state =
			force_update_grid: props.force_update_grid
			grid_w: 0
			grid_h: 0
		# log @state

	
	saveCellInput: (key_name,value)->
		update = {}
		update[key_name] = value
		# log 'saveCellInput -> updateDataItem',update
		@props.updateDataItem(update)

	
	
	gridRef: (el)=>
		@_grid = el		
	

	baseRef: (el)=>
		@base = el?._outer


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

	onScroll: (e)=>
		if !@props.query_item.end_reached && @props.query_item.completed_at && e.scrollTop > 0 && e.scrollTop > (e.scrollHeight - (e.clientHeight * @props.scroll_query_beta_offset))
			@props.runQuery(true)
			# @setState
			# 	run: yes
	# {index, isScrolling, key, parent, style}
	renderCell: (g_opts)=>
		schema = @props.schema
		data = @props.data
		doc = data[g_opts.rowIndex-1]
		is_key = g_opts.rowIndex == 0
		g_style = {}
		

		if !is_key && @props.data_item
			is_selected = @props.data_item._id == data[g_opts.rowIndex-1]._id

		if !is_key && !data[g_opts.rowIndex-1]
			return null
		
		if g_opts.rowIndex % 2 == 0
			alt_cell = true
		
		if g_opts.rowIndex != 0 && is_selected
			g_style.color = @context.secondary.inv[0]




		if !g_style.background && alt_cell
			g_style.background = @context.primary.inv[1]
		else
			g_style.background = @context.primary.inv[0]


		if g_opts.rowIndex != 0 && is_selected
			g_style.background = @context.secondary.color[1]
	

		if schema.rowColor && doc
			r_color = schema.rowColor(schema,doc,g_opts.rowIndex)
			g_style.background = r_color[0]
			g_style.color = r_color[1]

	

		if is_selected && schema.rowColorSelect
			r_color = schema.rowColorSelect(schema,doc,g_opts.rowIndex)
			g_style.background = r_color[0]
			g_style.color = r_color[1]
		

		if g_opts.columnIndex == 0
			if is_key
				return null
			
			
			
			
			# g_opts.style.width = '100%'
			return h 'div',
				style: Object.assign g_style,g_opts.style
				key: g_opts.key
				onClick: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1]) || undefined
				h 'div',
					className: cn css['model-grid-cell'],css['model-grid-cell-method-button'],'material-icons',(is_selected && css['model-grid-cell-selected'])
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
				arrow_color = @context.primary.color[2]
				rotate_arrow = 'keyboard_arrow_left'
			else if @props.query_item.sort_keys[key_name] == 1
				rotate_arrow = 'keyboard_arrow_up'
				arrow_color = @context.secondary.false

			else if @props.query_item.sort_keys[key_name] == -1
				rotate_arrow = 'keyboard_arrow_down'
				arrow_color = @context.secondary.true
			g_style.color = arrow_color
			return h 'div',
				className: (css['model-grid-cell']+' '+css['model-grid-key']+' '+(is_selected && css['model-grid-cell-selected'] || ''))
				style: Object.assign g_style,g_opts.style
				key: g_opts.key
				onClick: key.indexed && @toggleSortKey.bind(null,key_name) || undefined
				h 'div',className:css['model-grid-label'],key.label
				key.indexed && h 'i',
					className: 'material-icons '+css['model-grid-key-toggle']
					rotate_arrow

		return h 'div',
			style: Object.assign g_style,g_opts.style
			key: g_opts.key
			h 'div',
				onMouseDown: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1]) || undefined
				className: css['model-grid-cell']+' '+(is_selected && css['model-grid-cell-selected'] || '')
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
		# log @base
		if @base
			if state.grid_w != @base.clientWidth || state.grid_h != @base.clientHeight
				log 'resize grid'
				state.grid_w = @base.clientWidth
				state.grid_h = @base.clientHeight




	componentDidUpdate: ->
		# log "UPDATED",@base.clientWidth
		if @base
			if @state.grid_w != @base.clientWidth || @state.grid_h != @base.clientHeight
				# log 'update grid size',@props.schema.name,@base.clientHeight,@base.clientWidth
				return @setState
					force_update_grid: false
					grid_w: @base.clientWidth
					grid_h: @base.clientHeight


		if (@state.force_update_grid) && @_grid
			@_grid?.recomputeGridSize()
			@setState
				force_update_grid: false


	componentDidMount: ->
		@state.grid_key = @getGridKey(@props)
		@forceUpdate()


	onShowMenu: =>
		@setState
			scroll_to_data_item: true


	rowHeight: (r_opts)=>
		if r_opts.index == 0
			return 30
		else
			return @props.row_height
		
	
	render: ->
		schema = @props.schema
		data = @props.data
		query_item = @props.query_item

		# method_menu = null

		if @state.show_method_menu
			item_label = h Input,
				type: 'label'
				big: no
				btn_type: 'flat'
				className: css['grid-item-label']
				label: [
					@props.schema.name
					h 'span',{key: 1,className: css['model-grid-slash']},'/'
					h 'span',{key: 2,style:{fontWeight:600,color:@context.primary.color[0]}},@props.data_item._label || @props.data_item._id
				]

			method_menu = h MethodsView,
				data_item: @props.data_item
				render_edit_bar: yes
				showJSONView: @props.showJSONView
				methods: @props.schema.methods
				onDelete: @props.deleteDataItem
				renderDataItemMethod: @props.renderDataItemMethod
				runDataItemMethod: @props.runDataItemMethod

		# log 'SCROLL TO',@props.scroll_to_index
		
		grid = h MultiGrid,
			key: @props.query_item._id
			styleTopRightGrid:
				background: @context.primary.inv[1]
			className: css['model-grid-list']
			ref: @gridRef
			onScroll: @onScroll
			cellRenderer: @renderCell
			columnWidth: @columnWidth
			columnCount: query_item.layout_keys.length + 1 || 0
			fixedColumnCount:0
			fixedRowCount:1
			scrollToRow: @props.scroll_to_index
			scrollToAlignment: 'center'
			height: @state.grid_h
			width:@state.grid_w
			rowHeight: @rowHeight
			rowCount:data.length+1
		
		
		overlay = h Overlay,
			visible: @state.show_method_menu
			backdrop_color: @context.primary.inv[1]
			onClick: @hideMethodMenu
			h 'div',
				className: css['vert-left-bar']
				style:
					background: @context.primary.color[1]
			item_label


		h Slide,
			slide: yes
			vert: no
			pos: if @state.show_method_menu then 0 else 1
			h Slide,
				vert: yes
				style:
					overflow: 'visible'
				dim: DIM2*8
				method_menu || null
			h Slide,
				beta: 100
				className: css['model-grid-wrap']
				ref: @baseRef
				grid || null
				overlay
			
			
GridView.contextType = StyleContext
GridView.defaultProps = 
	row_height: 30
	scroll_query_beta_offset: 2
module.exports = GridView
