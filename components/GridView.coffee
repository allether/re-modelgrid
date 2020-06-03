
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'
cn = require 'classnames'
Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,Overlay,StyleContext} = require 're-lui'

css = require './ModelGrid.less'
# MethodsView = require './MethodsView.coffee'

hotkeys = require('hotkeys-js').default


_ = require 'lodash'

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
	
	UNSAFE_componentWillUpdate: (props)->
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
		width = @state.start_move_width + (e.clientX - @state.start_move_x)
		
		min = @props.move_key.min_width || 100

		width = Math.max(Math.min(width,MAX_COL_WIDTH),min)

		@setState
			left: left
			width: width
			min_width: width <= Math.max(min,@props.move_key.col_width) || width == MAX_COL_WIDTH

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
					background: @state.min_width && "rgba(255,255,0,0.5)" || "rgba(255,255,255,0.5)"
					width: @state.width


MoveGuide.contextType = StyleContext






class GridView extends Component
	constructor: (props)->
		super(props)
		@state =
			force_update_grid: props.force_update_grid
			grid_w: 0
			grid_h: 0
			scroll_left: 0
	

	
	saveCellInput: (key_name,value)->
		update = {}
		update[key_name] = value
		@props.updateDataItem(update)

	
	
	gridRef: (el)=>
		@_grid = el		
	


	baseRef: (el)=>
		@base = el?._outer


	toggleSortKey: (key,dir)=>

		found_key = _.find @props.query_item.sort_keys,key:key
		
		if found_key
			found_key.dir = dir
		else
			console.warn('cant toggle sort key, key not found.')
			return false
			
		if @props.query_item.called_at
			@props.editQuery
				sort_keys: @props.query_item.sort_keys
			@props.saveQuery()
		else
			@props.editQuery
				sort_keys: @props.query_item.sort_keys
			@props.saveQuery()

		setTimeout @props.runQuery,0
		


	onSelectDocumentById: (doc_id)=>
		@props.onSelectDocumentById(doc_id)

	showMethodMenu: (g_opts)=>
		@setState
			show_method_menu: yes
			data_item_g_opts: g_opts
		@props.selectDataItem(@props.data[g_opts.rowIndex-1],@state.scroll_top)
	
	onOverlayClick: =>
		if @props.show_layouts_view || @props.show_bookmarks_view
			return @props.hideRightView()
		
		@setState
			show_method_menu: no
			data_item_g_opts: null

	columnWidth: (g_opts)=>

		if g_opts.index == @props.query_item.layout_keys.length
			return 500 


		
		
		key_name = @props.query_item.layout_keys[g_opts.index]
		if !key_name
			console.warn g_opts.index,@props.query_item.layout_keys
			return 100
		


		key = @props.schema.keys[key_name]

		if !key
			console.error  'schema key not found: '+key_name
			return 100
			# throw new Error 'schema key not found: '+key_name

		key._name = key_name
		key.col_width = Math.max(key.min_width||100,key.label.length* CHAR_W + CELL_PAD*2 + 70)

		
		if @props.schema_state.key_col_widths[key._name]
			c_w = Math.max(key.min_width||100,@props.schema_state.key_col_widths[key._name])
		else
			c_w = key.col_width || 100

		key._c_w = c_w

		if c_w <= key.col_width
			key._min_width = true
		else
			key._min_width = false
		
		return c_w

	onScroll: (e)=>
		@state.scroll_left = e.scrollLeft
		if @state.scroll_top > 0
			trigger = true
		@state.scroll_top = e.scrollTop
		if !@props.query_item.end_reached && @props.query_item.completed_at && e.scrollTop > 0 && e.scrollTop > (e.scrollHeight - (e.clientHeight * @props.scroll_query_beta_offset))
			@props.runQuery(true)

		if @state.scroll_top || trigger
			@props.onScrollTop(@state.scroll_top)
			
	
	setMoveKey: (key,e)=>
		# log 'SET MOVE KEY',@props.query_item.layout_keys.indexOf(key)
		@setState
			# scroll_to_col: @props.query_item.layout_keys.indexOf(key)
			move_key: key
		
	
	onMoveDone: (key,new_width)=>
		# log 'DONE',key,new_width
		@props.schema_state.key_col_widths[key._name] = new_width
		@setState
			move_key: null
		@_grid.recomputeGridSize()
		@props.saveSchemaState()
	
	onMove: (key,new_width)=>
		@props.schema_state.key_col_widths[key._name] = new_width
		@_grid.recomputeGridSize()


	selectDataItem: (data_item)=>
		@props.selectDataItem(data_item,@state.scroll_top)

	# {index, isScrolling, key, parent, style}
	renderCell: (g_opts)=>
		
		if g_opts.columnIndex == @props.query_item.layout_keys.length
			return h 'div',
				key: g_opts.key
				style: g_opts.style

		schema = @props.schema
		data = @props.data
		doc = data[g_opts.rowIndex-1]

		is_key = g_opts.rowIndex == 0
		g_style = {}

		# if g_opts.rowIndex == 0 && g_opts.columnIndex == 0
		# 	return h 'div',
		# 		key: g_opts.key
		# 		style: g_opts.style
		# 		h 'div',
		# 			className: cn css['model-grid-cell'],css['model-grid-cell-method-button'],'material-icons'
		# 			onClick: @props.onClearQuerySortKeys
		# 			'clear'

		

		
 

		if !is_key && !doc
			return h 'div',
				style: Object.assign g_style,g_opts.style
				key: g_opts.key
				# h 'div',{},'test'
		
		key_name = @props.query_item.layout_keys[g_opts.columnIndex]
		key = schema.keys[key_name]
		edit_key = !is_key && @state.edit_key == key_name && is_selected

		
		
		if !is_key && @props.data_item_id
			is_selected = @props.data_item_id == doc._id

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
	
		if !is_key
			if !data[g_opts.rowIndex-1].__filled_doc && ( key.fill || schema.fill)
				data[g_opts.rowIndex-1].__filled_doc = _.cloneDeep(data[g_opts.rowIndex-1])
				fill_fn = key.fill || schema.fill
				fill_fn(data[g_opts.rowIndex-1].__filled_doc)
				data_obj = data[g_opts.rowIndex-1].__filled_doc
			else if data[g_opts.rowIndex-1].__filled_doc
				data_obj = data[g_opts.rowIndex-1].__filled_doc
			else
				data_obj = data[g_opts.rowIndex-1]


		if schema.rowColor && doc
			r_color = schema.rowColor(schema,doc.__filled_doc,g_opts.rowIndex)
			g_style.background = r_color[0]
			g_style.color = r_color[1]



		if is_selected && schema.rowColorSelect
			r_color = schema.rowColorSelect(schema,doc.__filled_doc,g_opts.rowIndex)
			g_style.background = r_color[0]
			g_style.color = r_color[1]


		# if g_opts.columnIndex == 0
		# 	if is_key
		# 		return null
		# 	# g_opts.style.width = '100%'
		# 	return h 'div',
		# 		style: Object.assign g_style,g_opts.style
		# 		key: g_opts.key
		# 		onClick: !is_selected && @props.selectDataItem.bind(null,data[g_opts.rowIndex-1]) || undefined
		# 		h 'div',
		# 			className: cn css['model-grid-cell'],css['model-grid-cell-method-button'],'material-icons',(is_selected && css['model-grid-cell-selected'])
		# 			onClick: @showMethodMenu.bind(@,g_opts)
		# 			is_selected && 'arrow_forward' || 'more_horiz'
		# else
		
		
		if !key
			console.warn 'invalid key '+key_name
			return null
		
		if !is_key
			value = data[g_opts.rowIndex-1][key_name]
		
		# log 'render cell'
		e_style = {}
		if key == @state.focus_key && !@state.move_key
			e_style.borderRight = '2px solid rgba(0,0,0,0.6)'
			# g_opts.style.borderLeft = '2px solid rgba(0,0,0,0.3)'

		else
			e_style.borderRight = '2px solid rgba(0,0,0,0.3)'
			# g_opts.style.borderLeft = 'none'



		
		if is_key
			sort_key_index = _.findIndex @props.query_item.sort_keys,key:key_name
			if sort_key_index >= 0
				sort_key = @props.query_item.sort_keys[sort_key_index]

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

			# log sort_key
			if key.indexed && sort_key
				sort_up = (sort_key && sort_key.dir == 1)
				sort_down = (sort_key && sort_key.dir == -1)
				if sort_up
					g_style.background = 'rgb(255,255,0,0.3)'
				else if sort_down
					g_style.background = 'rgb(0,255,255,0.3)'

				if sort_up
					sort_icon = h 'i',
						style:
							color: 'yellow'
							opacity: 1
						onClick: @toggleSortKey.bind(null,key_name,-1)
						className: cn 'material-icons'
						'keyboard_arrow_up'
				else if sort_down
					sort_icon = h 'i',
						style:
							color: 'cyan'
							opacity: 1
						onClick: @toggleSortKey.bind(null,key_name,1)
						className: cn 'material-icons'
						'keyboard_arrow_down'

				sort_opts = h 'div',
					className: cn css['model-grid-key-toggle']
					sort_icon
			
			key._left = g_opts.style.left

			v_w = key.label.length * CHAR_W + CELL_PAD*2 + 70
			max_l = Math.floor( (key._c_w- CELL_PAD*2 - 30) / CHAR_W)
			if v_w > key._c_w
				if max_l <= 2
					label_string = ''
				else
					label_string = key.label.substring(0,max_l-2)+'..'
			else
				label_string = key.label
		
			key_label = h 'div',
				className: css['model-grid-label']
				onClick: ( sort_up && @toggleSortKey.bind(null,key_name,-1) ) || ( sort_down && @toggleSortKey.bind(null,key_name,1) ) || null
				label_string

			resize_bar = h 'i',
				style:
					color: @context.primary.color[2]
				onMouseDown: @setMoveKey.bind(@,key)
				className: 'material-icons '+css['model-grid-key-resize']
				'last_page'

			

			if sort_key
				sort_index_label = h 'div',
					className: css['model-grid-label']
					style:
						paddingRight: 5
						fontSize: 11
						fontWeight: 600
						lineHeight: 11
						color: @context.primary.color[0]
					"["+(sort_key_index+1)+"]"


			if sort_key && sort_key.dir == 1
				g_style.color = 'yellow'
			else if sort_key && sort_key.dir == -1
				g_style.color = 'cyan'
			else
				g_style.color = @context.primary.color[2]


			if schema.force_keys && schema.force_keys.length
				if schema.force_keys.indexOf(key_name) >= 0
					lock_icon = h 'div',
						className: css['model-grid-label']
						style:
							paddingLeft: 5
							fontSize: 11
							lineHeight: 11
							color: @context.primary.color[0]
						h 'i',
							className: 'material-icons'
							'fiber_manual_record'


			return h 'div',
				className: css['model-grid-cell']
				style: Object.assign g_style,g_opts.style,e_style
				key: g_opts.key
				# sort_index_label
				key_label
				sort_opts
				resize_bar
		

		
		
		
	

		# log data_obj.__filled
			

		return h 'div',
			style: Object.assign g_style,g_opts.style,e_style
			key: g_opts.key
			h 'div',
				onMouseDown: !is_selected && @selectDataItem.bind(null,data[g_opts.rowIndex-1]) || undefined
				className: css['model-grid-cell']+' '+(is_selected && css['model-grid-cell-selected'] || '')
				key.render && key.render(schema,data_obj) || value


	




	getGridKey: (props)->
		model_name = props.schema.name
		model_name+'-'+props.query_item._id+'-'+props.query_item.completed_at+'-'+props.query_item.layout_keys


	UNSAFE_componentWillUpdate: (props,state)->
		if !props.data_item
			@state.show_method_menu = false
		if props.data_item && props.data_item != @state.data_item
			state.force_update_grid = true
			state.data_item = props.data_item
			state.edit_key = null
		g_k = @getGridKey(props)


		if g_k != state.grid_key
			state.grid_key = g_k
			state.force_update_grid = true

		

		if props.scroll_top != @props.scroll_top
			state.trigger_scroll_top = props.scroll_top

		if props.data_item_id != @props.data_item_id
			# log props.data_item_id,props.data,_.findIndex(props.data,_id:props.data_item_id)
			if props.data_item_id
				# log props.data_item_id
				# log  _.findIndex(props.data,_id:props.data_item._id)
				state.scroll_to_row = _.findIndex(props.data,_id:props.data_item_id)
			else
				state.scroll_to_row = undefined


		if @base
			if state.grid_w != @base.clientWidth || state.grid_h != @base.clientHeight
				# log 'resize grid'
				state.grid_w = @base.clientWidth
				state.grid_h = @base.clientHeight



	componentDidUpdate: (props)->
		if @base
			@_rect = @base?.getBoundingClientRect()
			# log @_rect.width
			if @state.grid_w != @base.clientWidth || @state.grid_h != @base.clientHeight
				# log 'update grid size',@props.schema.name,@base.clientHeight,@base.clientWidth

				return @setState
					force_update_grid: false
					grid_w: @base.clientWidth
					grid_h: @base.clientHeight


		if (@state.force_update_grid) && @_grid 
			# log 'update grid size',@props.schema.name,@base.clientHeight,@base.clientWidth
			@_grid?.recomputeGridSize()
			@setState
				force_update_grid: false

		if @state.scroll_to_row || @state.scroll_to_col || @state.trigger_scroll_top
			setTimeout ()=>
				@setState
					trigger_scroll_top: undefined
					scroll_to_row: undefined
					scroll_to_col: undefined
					_scroll_to_col: @state.scroll_to_col
					_scroll_to_row: @state.scroll_to_row
			,0

	componentWillUnmount: ->
		# log 'DELETE SCOPE'
		hotkeys.deleteScope('modelgrid')


	componentDidMount: ->
		# log 'DID MOUNT'

		@state.grid_key = @getGridKey(@props)
		if @props.data_item
			@state.scroll_to_row = _.findIndex(@props.data,_id:@props.data_item._id)
		@setState({})

		hotkeys.setScope('modelgrid')
		hotkeys 'down','modelgrid',(event,handler)=>
			event.preventDefault()
			@props.selectNextDataItem()
			return false
		hotkeys 'up','modelgrid',(event,handler)=>
			event.preventDefault()
			@props.selectPrevDataItem()
			return false
		hotkeys 'right','modelgrid',(event,handler)=>
			event.preventDefault()
			@scrollRight()
			return false
		hotkeys 'left','modelgrid',(event,handler)=>
			event.preventDefault()
			@scrollLeft()
			return false
		hotkeys 'shift+down','modelgrid',(event,handler)=>
			event.preventDefault()
			@props.selectNextDataItem(2)
			return false
		hotkeys 'shift+up','modelgrid',(event,handler)=>
			event.preventDefault()
			@props.selectPrevDataItem(2)
			return false
		hotkeys 'shift+right','modelgrid',(event,handler)=>
			event.preventDefault()
			@scrollRight(2)
			return false
		hotkeys 'shift+left','modelgrid',(event,handler)=>
			event.preventDefault()
			@scrollLeft(2)
			return false


	scrollLeft: (skip)=>
		skip = skip || 1
		if !@props.query_item || !@props.query_item.layout_keys?.length
			return false
		col = Math.max 0,(@state._scroll_to_col - skip) || 0

		@setState
			scroll_to_col: col
			focus_key: @props.schema.keys[@props.query_item.layout_keys[col]]

	scrollRight: (skip)=>
		skip = skip || 1
		if !@props.query_item || !@props.query_item.layout_keys?.length
			return false
		col = Math.min @props.query_item.layout_keys.length-1,(@state._scroll_to_col + skip) || 1
		@setState
			focus_key: @props.schema.keys[@props.query_item.layout_keys[col]]
			scroll_to_col: col

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
		for key_name,key_index in @props.query_item.layout_keys
			key = @props.schema.keys[key_name]
			key_width = @props.schema_state.key_col_widths[key._name] || key.col_width
			key_left = @props.schema.keys[key_name]._left

			if (key_left) < (e.clientX - @_rect.left + @state.scroll_left ) < (key_left+key_width)
				if @state.focus_key != key
					# log 'set focus key'
					return @setState
						focus_key: key
						_scroll_to_col: key_index


	
	render: ->
		schema = @props.schema
		data = @props.data
		query_item = @props.query_item


		
		if !@props.scroll_top?
			if @state.scroll_to_row?
				scroll_to_row = @state.scroll_to_row+1
				scroll_to_row = Math.min(Math.max(scroll_to_row,1),data.length+1)


		if @state.scroll_to_col?
			# log query_item.layout_keys.length
			scroll_to_col = Math.min(Math.max(@state.scroll_to_col,1),query_item.layout_keys.length+2)

		# log @props.scroll_top
		# log scroll_to_col
		
		grid = h MultiGrid,
			styleTopRightGrid:
				background: @context.primary.inv[1]
				borderBottom: '2px solid rgba(0,0,0,0.6)'
			className: css['model-grid-list']
			ref: @gridRef
			onScroll: @onScroll
			cellRenderer: @renderCell
			columnWidth: @columnWidth
			columnCount: (query_item.layout_keys.length + 1) || 0
			fixedRowCount:1
			scrollToRow: if @state.scroll_to_row? then @state.scroll_to_row else undefined
			scrollToAlignment: 'auto'
			scrollTop: if @state.trigger_scroll_top? then @state.trigger_scroll_top else undefined
			scrollToColumn: if @state.scroll_to_col? then @state.scroll_to_col else undefined
			height: @state.grid_h
			width: @state.grid_w
			rowHeight: @rowHeight
			rowCount:Math.max(data.length+1,2)



		if @state.show_method_menu || @props.show_layouts_view || @props.show_bookmarks_view
			overlay_visible = true



		if @props.show_layouts_view || @props.show_bookmarks_view
			overlay_bar_cn = css['vert-right-bar']
		else if @state.show_method_menu
			overlay_bar_cn = css['vert-left-bar']



		if @state.move_key
			move_guide = h MoveGuide,
				move_key: @state.move_key
				query_item: @props.query_item
				scroll_left: @state.scroll_left
				scroll_to_col: scroll_to_col
				onMoveDone: @onMoveDone
				onMove: @onMove
				clientX: @state.clientX


		h Slide,
			ref: @baseRef
			outer_props:
				onMouseMove: @onOuterMouseMove
			outerChildren: move_guide 
			className: cn css['model-grid-wrap'],'hide-scrollbar'
			grid
			
				
		
			
			
GridView.contextType = StyleContext
GridView.defaultProps = 
	row_height: 30
	scroll_query_beta_offset: 2
module.exports = GridView
