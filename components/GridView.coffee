
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'


{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'

css = require './ModelGrid.less'

CHAR_W = 7.8
CELL_PAD = 10

class GridView extends Component

	componentWillMount: ->
		# @buildCellCache()

	
	buildCellCache : =>
		@_cell_cache = new CellMeasurerCache
			minWidth: 55
			fixedHeight: true
			defaultWidth: 255
	
	gridRef: (el)=>
		
		@_grid = el
		# window.grid = el
		
	
	slideRef: (el)=>
		@_grid_slide = el


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

	columnWidth: (g_opts)=>
		if g_opts.index == 0
			return 30
		opts = @props.opts
		key_name = @props.cfg.layouts[@props.cfg.layout_index || 0]?.keys[g_opts.index-1] || @props.cfg.layouts[0].keys[g_opts.index-1]
		key = opts.keys[key_name]

		return key.col_width


	renderDocumentMethodMenu: (g_opts)->
		opts = @props.opts
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
						i: 'code'


	# {index, isScrolling, key, parent, style}
	renderCell: (g_opts)=>
		opts = @props.opts
		cfg = @props.cfg
		data = @props.data
		is_key = g_opts.rowIndex == 0
		g_opts.style.whiteSpace = 'nowrap'
		if g_opts.rowIndex % 2 == 0
			alt_cell = true
		if alt_cell
			g_opts.style.background = @context.__theme.primary.inv[1]

		if g_opts.rowIndex != 0 && @props.cfg.selected_doc_id == data[g_opts.rowIndex-1]._id
			g_opts.style.background = @context.__theme.secondary.color[0]
			g_opts.style.color = @context.__theme.secondary.inv[0]
			render_method_menu = true
		# render document method menu
		if g_opts.columnIndex == 0
			return h 'div',
				# className: css['']
				style: g_opts.style
				key: g_opts.key
				render_method_menu && @renderDocumentMethodMenu(g_opts) || null



		key_name = cfg.layouts[@props.cfg.layout_index || 0]?.keys[g_opts.columnIndex-1] || cfg.layouts[0].keys[g_opts.columnIndex-1]
		key = opts.keys[key_name]
		# log key_name
		
		
		g_opts.style.width = key.col_width
		g_opts.style.overflow = 'hidden'
		if key.center
			g_opts.style.textAlign = 'center'


		if !is_key
			value = data[g_opts.rowIndex-1][key_name]

	
		if !is_key && typeof value == 'string'
			v_w = value.length * CHAR_W + CELL_PAD*2
			max_l = Math.floor( (key.col_width- CELL_PAD*2) / CHAR_W)
			if v_w > key.col_width
				value = value.substring(0,max_l-2)+'..'


		# log is_key
		if is_key
			if !cfg.sort[key_name]
				arrow_color = @context.__theme.primary.color[2]
				rotate_arrow = 0
			else if cfg.sort[key_name] == 1
				rotate_arrow = 90
				arrow_color = @context.__theme.secondary.false

			else if cfg.sort[key_name] == -1
				rotate_arrow = -90
				arrow_color = @context.__theme.secondary.true
			g_opts.style.color = arrow_color
			return h 'div',
				className: (css['model-grid-cell']+' '+css['model-grid-key'])
				style: g_opts.style
				key: g_opts.key
				onClick: key.indexed && @props.onToggleKeySort.bind(null,key_name)
				h 'div',className:css['model-grid-label'],key.label
				key.indexed && h 'i',
					className: 'material-icons '+css['model-grid-key-toggle']
					style:
						transform: 'rotate('+rotate_arrow+'deg)'
					'arrow_left'
	
		return h 'div',
			className: css['model-grid-cell']
			onClick: @onSelectDocumentById.bind(null,data[g_opts.rowIndex-1]._id)
			style: g_opts.style
			key: g_opts.key
			value
	

	columnCount: ->
		return 5


	getGridKey: (props)->
		model_name = props.opts.name
		sort_str = JSON.stringify(props.cfg.sort)
		model_name+'-'+(props.selected_bookmark?.label || 'null') + '-' + (props.selected_layout?.label || 'null')+'-'+props.cfg.selected_doc_id+'-'+sort_str


	componentDidUpdate: ->
		if @getGridKey(@props) != @state.grid_key
			@state.grid_key = @getGridKey(@props)
			@_grid?.recomputeGridSize()


	componentDidMount: ->
		@state.grid_key = @getGridKey(@props)
		@forceUpdate()


	render: (props)->
		

		opts = props.opts
		data = props.data
		
		if @_grid_slide
			grid = h MultiGrid,
				className: css['model-grid-list']
				ref: @gridRef
				key: props.opts.name
				onScroll: @onGridScroll
				cellRenderer: @renderCell
				columnWidth: @columnWidth
				columnCount: props.selected_layout && props.selected_layout.keys.length+1 || 0
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
