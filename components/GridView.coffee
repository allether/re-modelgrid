
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'
cn = require 'classnames'
Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,Overlay,StyleContext} = require 're-lui'

css = require './ModelGrid.less'
MethodsView = require './MethodsView.coffee'

LayoutsView = require './LayoutsView.coffee'
BookmarksView = require './BookmarksView.coffee'

CHAR_W = 7.8
CELL_PAD = 10
MAX_CHAR = 32
MAX_COL_WIDTH = 1000

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







# class ScrollValue extends Component
# 	render: ->

# 		@props.value.substring(0,max_l-2)+'..'




class MoveGuide extends Component
	constructor: (props)->
		super(props)
		@state=
			left: 0
			width: 0
			min_width: 0
			start_move_x: props.clientX
			start_move_width: props.move_key._c_w
			width: props.move_key._c_w
			left: props.move_key._left - props.scroll_left


	wrapperRef: (el)=>
		if !el
			return
		@_wrapper = el
		@_rect = @_wrapper.getBoundingClientRect()
		

	onMouseDown: (e)=>
		@state.start_move_x = e.clientX
		@state.start_move_width = @props.move_key.col_width
		


	
	onMouseMove: (e)=>
		left = @props.move_key._left - @props.scroll_left
		# width = start_move_x + (start_move_x-e.clientX) - @_rect.left - left + 30/2
		
		width = @state.start_move_width + (e.clientX - @state.start_move_x)
		
		min = 100
		width = clamp(width,min,MAX_COL_WIDTH)

		@setState
			left: left
			width: width
			min_width: width < @props.move_key.col_width || width == MAX_COL_WIDTH

		@props.onMove(@props.move_key,width)


	
	onMouseUp: (e)=>
		return @props.onMoveDone(@props.move_key,@state.width)
	

	render: ->

		
		
		label = @props.move_key.label

		key_name = @props.move_key._name

		v_w = label.length * CHAR_W + CELL_PAD*2 + 70
		max_l = Math.floor( ( @state.width- CELL_PAD*2 - 70) / CHAR_W)


		if v_w >  @state.width
			if max_l <= 2
				label_string = ''
			else
				label_string = label.substring(0,max_l-2)+'..'
		else
			label_string = label

		# if @props.move_key.indexed
		# 	sort_opts = h 'div',
		# 		className: css['model-grid-key-toggle']
		# 		h 'i',
		# 			style:
		# 				color: @props.query_item.sort_keys[key_name] == 1 && @context.secondary.false || @context.primary.color[2]
		# 			# onClick: @toggleSortKey.bind(null,key_name,1)
		# 			className: 'material-icons'
		# 			'keyboard_arrow_up'
		# 		h 'i',
		# 			style:
		# 				color: @props.query_item.sort_keys[key_name] == -1 && @context.secondary.true || @context.primary.color[2]
		# 			# onClick: @toggleSortKey.bind(null,key_name,-1)
		# 			className: 'material-icons'
		# 			'keyboard_arrow_down'

		h 'div',
			className: css['move-guide-wrapper']
			ref: @wrapperRef
			onMouseDown: @onMouseDown
			onMouseMove: @onMouseMove
			onMouseUp: @onMouseUp
			h 'div',
				className: css['move-guide']
				style:
					borderRight: '2px solid '+@context.primary.inv[2]
					transform: 'translate('+@state.left+'px,'+0+'px)'
					background: @state.min_width && 'rgba(255,255,0,0.5)' || 'rgba(255,255,255,0.5)'
					width: @state.width
				# h 'div',
				# 	className: css['move-guide-key']+' '+css['model-grid-cell']+' '+css['model-grid-key']
				# 	style:
				# 		height: 30
				# 		background: @context.primary.inv[2]
				# 		color: @context.primary.color[0]
				# 	label_string
				# 	sort_opts
				# 	h 'i',
				# 		style:
				# 			color: @context.primary.color[2]
				# 		className: 'material-icons '+css['model-grid-key-resize']
				# 		'last_page'

MoveGuide.contextType = StyleContext





class GridView extends Component
	constructor: (props)->
		super(props)
		@state =
			force_update_grid: props.force_update_grid
			grid_w: 0
			grid_h: 0
			scroll_left: 0
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


	toggleSortKey: (key,dir)=>
		keys = Object.assign {},@props.query_item.sort_keys
		
		if dir == 0
			keys[key] = undefined
		else if dir == -1
			if keys[key] == -1
				keys[key] = undefined
			else
				keys[key] = -1
		else
			if keys[key] == 1
				keys[key] = undefined
			else
				keys[key] = 1

		
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
	
	onOverlayClick: =>
		if @props.show_layouts_view || @props.show_bookmarks_view
			return @props.hideRightView()
		
		@setState
			show_method_menu: no
			data_item_g_opts: null

	columnWidth: (g_opts)=>

		if g_opts.index == @props.query_item.layout_keys.length+1
			return 500 


		if g_opts.index == 0
			return 30
		
		key_name = @props.query_item.layout_keys[g_opts.index-1]
		if !key_name
			console.warn g_opts.index-1,@props.query_item.layout_keys
			return null
		key = @props.schema.keys[key_name]
		key._name = key_name

		key.col_width = key.label.length* CHAR_W + CELL_PAD*2 + 70

		# key._min_width = key.col_width
		if !key
			throw new Error 'schema key not found ,'+key_name
		# log @props.key_col_widths[key.name]
		if @props.key_col_widths[key._name]
			c_w = @props.key_col_widths[key._name]
		else
			c_w = key.col_width || 100

		key._c_w = c_w

		if c_w < key.col_width
			key._min_width = true
		else
			key._min_width = false
		
		return c_w

	onScroll: (e)=>
		@state.scroll_left = e.scrollLeft
		if !@props.query_item.end_reached && @props.query_item.completed_at && e.scrollTop > 0 && e.scrollTop > (e.scrollHeight - (e.clientHeight * @props.scroll_query_beta_offset))
			@props.runQuery(true)
			# @setState
			# 	run: yes
	
	
	setMoveKey: (key,e)=>
		@setState
			move_key: key
		
	
	onMoveDone: (key,new_width)=>
		# log 'DONE',key,new_width
		@props.key_col_widths[key._name] = new_width
		@setState
			move_key: null
		@_grid.recomputeGridSize()
	
	onMove: (key,new_width)=>
		@props.key_col_widths[key._name] = new_width
		@_grid.recomputeGridSize()


	# {index, isScrolling, key, parent, style}
	renderCell: (g_opts)=>
		
		if g_opts.columnIndex == @props.query_item.layout_keys.length+1
			return h 'div',
				key: g_opts.key
				style: g_opts.style

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
		
				
		
		if is_key
			if is_selected && key.can_edit
				value = h InputCell,
					value: value
					onSave: @saveCellInput.bind(@,key_name)
			else if !is_key && typeof value == 'string'
				v_w = value.length * CHAR_W + CELL_PAD*2
				max_l = Math.floor( (key._c_w- CELL_PAD*2) / CHAR_W)
				if v_w > key._c_w
					value = value.substring(0,max_l-2)+'..'

			if @state.focus_key == key
				g_style.background = @context.primary.inv[2]

			if key.indexed
				sort_opts = h 'div',
					className: css['model-grid-key-toggle']
					h 'i',
						style:
							color: @props.query_item.sort_keys[key_name] == 1 && @context.secondary.false || @context.primary.color[2]
						onClick: @toggleSortKey.bind(null,key_name,1)
						className: 'material-icons'
						'keyboard_arrow_up'
					h 'i',
						style:
							color: @props.query_item.sort_keys[key_name] == -1 && @context.secondary.true || @context.primary.color[2]
						onClick: @toggleSortKey.bind(null,key_name,-1)
						className: 'material-icons'
						'keyboard_arrow_down'
					# h 'i',
					# 	style:
					# 		color: @context.primary.color[2]
					# 	className: 'material-icons'
					# 	'remove'
			
			key._left = g_opts.style.left

			v_w = key.label.length * CHAR_W + CELL_PAD*2 + 70
			max_l = Math.floor( (key._c_w- CELL_PAD*2 - 70) / CHAR_W)
			if v_w > key._c_w
				if max_l <= 2
					label_string = ''
				else
					label_string = key.label.substring(0,max_l-2)+'..'
			else
				label_string = key.label
		
			key_label = h 'div',
				className: css['model-grid-label']
				onClick: @toggleSortKey.bind(null,key_name,0)
				label_string

			resize_bar = h 'i',
				style:
					color: @context.primary.color[2]
				onMouseDown: @setMoveKey.bind(@,key)
				className: 'material-icons '+css['model-grid-key-resize']
				'last_page'

			if @props.query_item.sort_keys[key_name] == 1
				g_style.color = @context.secondary.false
			else if @props.query_item.sort_keys[key_name] == -1
				g_style.color = @context.secondary.true
			else
				g_style.color = @context.primary.color[2]

		
			return h 'div',
				className: css['model-grid-cell']+' '+css['model-grid-key']
				style: Object.assign g_style,g_opts.style
				key: g_opts.key
				key_label
				sort_opts
				resize_bar

		if key == @state.focus_key && !@state.move_key
			g_opts.style.borderRight = '2px solid rgba(0,0,0,0.3)'
			# g_opts.style.borderLeft = '2px solid rgba(0,0,0,0.3)'

		else
			g_opts.style.borderRight = 'none'
			# g_opts.style.borderLeft = 'none'
		
			

		return h 'div',
			style: Object.assign g_style,g_opts.style
			key: g_opts.key
			h 'div',
				onMouseDown: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1]) || undefined
				className: css['model-grid-cell']+' '+(is_selected && css['model-grid-cell-selected'] || '')
				key.render && key.render(schema,data[g_opts.rowIndex-1]) || value


	




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
				# log 'resize grid'
				state.grid_w = @base.clientWidth
				state.grid_h = @base.clientHeight



	componentDidUpdate: ->
		if @base
			@_rect = @base?.getBoundingClientRect()
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
	

	moveGuideRef: (el)=>
		@_move_guide = el

	onOuterMouseMove: (e)=>
		@state.clientX = e.clientX
		if @state.move_key
			return
		# log (e.clientX - @_rect.left)
		for key_name in @props.query_item.layout_keys
			key = @props.schema.keys[key_name]
			key_width = @props.key_col_widths[key._name] || key.col_width
			key_left = @props.schema.keys[key_name]._left

			if (key_left) < (e.clientX - @_rect.left + @state.scroll_left ) < (key_left+key_width)
				if @state.focus_key == key
					return
				else
					@state.focus_key = key
					return @setState({})


	
	render: ->
		schema = @props.schema
		data = @props.data
		query_item = @props.query_item


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



		grid = h MultiGrid,
			key: @props.query_item._id
			styleTopRightGrid:
				background: @context.primary.inv[1]
			className: css['model-grid-list']
			ref: @gridRef
			onScroll: @onScroll
			cellRenderer: @renderCell
			columnWidth: @columnWidth
			columnCount: (query_item.layout_keys.length + 2) || 0
			fixedColumnCount:0
			fixedRowCount:1
			scrollToRow: @props.scroll_to_index
			scrollToAlignment: 'center'
			height: @state.grid_h
			width:@state.grid_w
			rowHeight: @rowHeight
			rowCount:data.length+1



		if @state.show_method_menu || @props.show_layouts_view || @props.show_bookmarks_view
			overlay_visible = true



		if @props.show_layouts_view || @props.show_bookmarks_view
			overlay_bar_cn = css['vert-right-bar']
		else if @state.show_method_menu
			overlay_bar_cn = css['vert-left-bar']



		overlay = h Overlay,
			visible: overlay_visible
			backdrop_color: @context.primary.inv[1]
			onClick: @onOverlayClick
			h 'div',
				className: overlay_bar_cn
				style:
					background: @context.primary.color[1]
			item_label


		if @state.move_key
			move_guide = h MoveGuide,
				move_key: @state.move_key
				query_item: @props.query_item
				scroll_left: @state.scroll_left
				onMoveDone: @onMoveDone
				onMove: @onMove
				clientX: @state.clientX
				# onMouseMove: @state.move_key && @onMoveKeyMouseMove || undefined


		if @props.show_layouts_view
			right_view = h LayoutsView,
				keys_array: @props.schema.keys_array
				updateQueryItemAndSet: @props.updateQueryItemAndSet
				updateQueryItem: @props.updateQueryItem
				cloneQueryItemAndSet: @props.cloneQueryItemAndSet
				cloneQueryItem: @props.cloneQueryItem
				setQueryItem: @props.setQueryItem
				keys: @props.schema.keys
				query_item: @props.query_item
		

		else if @props.show_bookmarks_view
			right_view = h BookmarksView,
				bookmarks: @props.bookmarks
				setBookmarkQueryItem: @props.setBookmarkQueryItem
				query_item: @props.query_item



		if @state.show_method_menu
			slide_pos = 0
		else if right_view
			slide_pos = 2
		else
			slide_pos = 1

	


		h Slide,
			slide: yes
			vert: no
			pos: slide_pos
			ref: @baseRef
			outer_props:
				onMouseMove: @onOuterMouseMove
			outerChildren: move_guide 
			h Slide,
				vert: yes
				style:
					overflow: 'visible'
				dim: DIM2*8
				method_menu || null
			h Slide,
				beta: 100
				className: css['model-grid-wrap']
				
				grid || null
				overlay
				
			h Slide,
				dim: 300
				right_view
			
			
GridView.contextType = StyleContext
GridView.defaultProps = 
	row_height: 30
	scroll_query_beta_offset: 2
module.exports = GridView
