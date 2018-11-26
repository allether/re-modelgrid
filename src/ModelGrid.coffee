Color = require 'color'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
Style = require './Style.coffee'
Input = require './Input.coffee'
AlertDot = require './AlertDot.coffee'
require 'normalize.css'
css = require './ModelGrid.less'
Bar = require './Bar.coffee'
MenuTab = require './MenuTab.coffee'
Menu = require './Menu.coffee'
{MultiGrid} = require 'react-virtualized/dist/commonjs/MultiGrid'

{List} = require 'react-virtualized/dist/commonjs/List'
###
index,       // Index of row
isScrolling, // The List is currently being scrolled
isVisible,   // This row is visible within the List (eg it is not an overscanned row)
key,         // Unique key within array of rendered rows
parent,      // Reference to the parent List (instance)
style 
###

{CellMeasurer,CellMeasurerCache} = require 'react-virtualized/dist/commonjs/CellMeasurer'
# {AutoSizer} = require 'react-virtualized/dist/commonjs/AutoSizer'
CHAR_W = 7.8
CELL_PAD = 10

class SearchQueryHelper extends Component
	constructor: (props)->
		super(props)
		@state = 
			selected_item_index: -1
			lists: 
				bookmark: []
				history: []
	
	selectTab: (tab_name)=>
		@setState
			tab_name: tab_name
	
	buildCache: ->
		@_cell_cache = {}
		@_cell_cache['bookmark'] = new CellMeasurerCache
			defaultHeight: 30
			fixedWidth: yes
			fixedHeight: no
		@_cell_cache['history'] = new CellMeasurerCache
			defaultHeight: 30
			fixedWidth: yes
			fixedHeight: no

	calculateLists: (props)->
		@state.lists.history = [].concat(props.query_list)
			

		@state.lists.bookmark = @state.lists.history.filter (query)->
			query.bookmark_label

		# if @state.lists._bookmark_l != @state.lists.bookmark.length
		@_cell_cache['bookmark'].clearAll()
		@_cell_cache['history'].clearAll()


		@state.lists.history._parsed = @state.lists.history.map (query)->
			JSON.stringify(JSON.parse(query.value),4,4)


		@state.lists.bookmark._parsed = @state.lists.bookmark.map (query)->
			JSON.stringify(JSON.parse(query.value),4,4)
		
		# log 'parsed'

	
	componentWillMount: (props)->
		@buildCache()
		@calculateLists(@props)


	componentWillUpdate: (props)->
		if props.tab_name != @props.tab_name
			@state.selected_item_index = -1
			@state.show_item_menu = false
		if @state.lists.history.length != props.query_list.length
			@calculateLists(props)


	listRef: (el)=>
		@_list = el


	selectItem: (r_opts)=>
		@setState
			selected_item_index: r_opts.index
			new_bookmark_label_value: null
		# @_list.recomputeGridSize()
		@props.onSelectItem(@state.lists[@props.tab_name][r_opts.index])


	bookmarkItem: =>
		selected_item = @state.lists[@props.tab_name][ @state.selected_item_index ]
		if selected_item.bookmark_label
			@props.onBookmarkItem(undefined,selected_item)
		else
			@props.onBookmarkItem(@state.new_bookmark_label_value,selected_item)
		@state.new_bookmark_label_value = undefined
		setTimeout ()=>
			@calculateLists(@props)
		,0

		# @_list.recomputeGridSize()
		
	
	onItemBookmarkClick: (query_item,e)=>
		if query_item.bookmark_label
			@props.onItemBookmarkClick



	rowRenderer: (tab_name,r_opts)=>
		# log tab_name,r_opts
		query_item = @state.lists[tab_name][r_opts.index]
		
		if !query_item
			return false
		
		r_opts.style.height = 'auto'
		is_selected = @state.selected_item_index == r_opts.index 
		
		if is_selected
			cell_bg = @context.__theme.secondary.color[0]
			cell_color = @context.__theme.secondary.inv[0]
			
		else
			cell_bg = (r_opts.index % 2) && @context.__theme.primary.inv[1] || null
			cell_color = @context.__theme.primary.color[0]
		
		h CellMeasurer,
			cache: @_cell_cache[tab_name]
			rowIndex: r_opts.index
			key: r_opts.key
			parent: r_opts.parent
			h 'div',
				style: r_opts.style
				className: css['model-grid-search-query-l-item']
				onClick: @selectItem.bind(@,r_opts)
				h 'div',
					className: css['json']
					style:
						color: cell_color
						background: cell_bg
					@state.lists[tab_name]._parsed[r_opts.index]
					query_item.bookmark_label && h 'span',
						className: css['search-query-item-label']
						query_item.bookmark_label + ' ★'

	onNewBookmarkLabelValue: (e)=>
		@setState new_bookmark_label_value: e.target.value


	renderQueryList: (tab_name)->
		# log @_cell_cache
		h List,
			height: 240
			width: 300
			ref: @listRef
			rowHeight: @_cell_cache[tab_name].rowHeight
			rowCount: @state.lists[tab_name].length
			deferredMeasurementCache: @_cell_cache[tab_name]
			rowRenderer: @rowRenderer.bind(@,tab_name)

	render: (props)->
		if @state.selected_item_index >= 0
			selected_item = @state.lists[props.tab_name][ @state.selected_item_index ]
		else
			selected_item = null
		b_d = !selected_item || (!@state.new_bookmark_label_value && !selected_item.bookmark_label)
		h Slide,
			className: css['model-grid-search-query-helper']
			style:
				background: @context.__theme.primary.inv[0]
			width: 300
			height: 300
			vert: yes
			h Bar,
				big: no
				vert: no
				h Input,
					i: !selected_item && 'label' || (selected_item?.bookmark_label && 'highlight_off' || 'save')
					type: 'button'
					onClick: @bookmarkItem
					btn_type: 'flat'
					disabled: b_d
				h Input,
					disabled: !selected_item || selected_item.bookmark_label
					type: 'text'
					btn_type: 'flat'
					value: selected_item?.bookmark_label || @state.new_bookmark_label_value
					onInput: @onNewBookmarkLabelValue
					placeholder: selected_item && '[bookmark label]' || 'select query'
			h Bar,
				big: no
				h Input,
					i: 'bookmark'
					btn_type: @props.tab_name == 'bookmark' && 'primary' || 'flat'
					onClick: props.onSelectTab.bind(null,'bookmark')
					type: 'button'
				h Input,
					i: 'history'
					btn_type: @props.tab_name == 'history' && 'primary' || 'flat'
					onClick: props.onSelectTab.bind(null,'history')
					type: 'button'
			@renderQueryList(props.tab_name)


SearchQueryHelper.defaultProps = 
	query_list: []
	tab_name: 'history'


class ModelGridMenu extends Component
	constructor: (props)->
		super(props)
		@state =
			menu_backdrop: false
			selected_layout_index: 0
			selected_filter_index: 0
	
	componentWillUpdate: (props)=>
		# log props.cfg.layouts[props.cfg.layout_index]
		if !props.cfg.layouts[props.cfg.layout_index]
			@state.menu_backdrop = yes
			@state.pin_menu_name = 'layouts'
	
	mapMenuStaticsButtons: (static_method,i)=>
		h MenuTab,
			key: i
			# className: css['model-grid-menu-tab-option']
			content: h Input,
				onClick: static_method.fn?.bind(undefined,static_method)
				type: 'button'
				# btn_type: 'flat'
				label: static_method.method_label
	

	mapMenuFilterButtons: (filter,i)=>
		h MenuTab,
			key: i
			content: h Input,
				# onClick: @togglePinMenu.bind(@,'layout')
				onClick: @props.onSelectFilter.bind(null,filter)
				type: 'button'
				label: filter.label

	mapMenuLayoutButtons: (layout,i)=>
		h MenuTab,
			key: i
			# onClick: @togglePinMenu.bind(@,'layout')
			content: h Input,
				invalid:yes
				onClick: @props.onSelectLayout.bind(null,layout)
				focus: if layout == @props.cfg.layouts[@props.cfg.layout_index] then false else undefined
				btn_type: layout == @props.cfg.layouts[@props.cfg.layout_index] && 'primary'
				type: 'button'
				label: [
					layout.label.padEnd(20)
					h 'span',{className: css['model-grid-opaque']},String(layout.keys.length)
				]

	mapMenuSearchKeys: (key_name,i)=>
		key = @props.opts.keys[key_name]
		if !key.indexed
			return null
		h MenuTab,
			key: i
			content: h Input,
				# invalid:yes

				onClick: @props.onSelectSearchKey.bind(null,key_name)

				focus: if key_name == @props.cfg.search_key then false else undefined
				# focus: if layout == @props.opts.layouts[@props.selected_layout_index] then false else undefined
				btn_type: key_name == @props.cfg.search_key && 'primary' || 'flat'
				type: 'button'
				label: [
					key.label.padEnd(10)
					h 'span',{className: (css['model-grid-label-float-right']+' '+css['model-grid-opaque'])},String(key_name)
				]

	
	togglePinMenu: (pin_menu_name,toggle)=>
		@setState
			show_search_query_helper: no
			show_new_layout_form: false
			pin_menu_name: pin_menu_name
			menu_backdrop: toggle

	# onAddDocumentButton: ()=>
	# 	@setState
	# 		show_create_document_modal: yes
	onNewDocFormInput: (key_name,e)=>
		@props.cfg.new_doc[key_name] = e.target.value
		@setState()
	renderNewDocForm: (props)->
		lc = props.opts.keys_array.reduce (pre,key_name)->
			if key_name.length > pre
				return key_name.length
			return pre
		,0

		# log props.cfg.new_doc

		h 'form',
			className: css['model-grid-add-doc-form']
			style:
				background: @context.__theme.primary.inv[0]
			# style:
			# 	maxHeight: @_grid_slide._outer.clientHeight ||'300px'
			h Bar,
				vert: true
				big: false
				props.opts.keys_array.map (key_name,i)=>
					if !props.opts.keys[key_name].form_render
						return null
					# log key_name
					key = props.opts.keys[key_name]
					key_val = props.cfg.new_doc[key_name] || key.form_autofill
					h Input,
						key: i
						label: key.label.padStart(lc+4," ")
						bar: yes
						disabled: key.form_autofill && yes
						required: key.form_required && yes
						is_valid: key.form_validate?(key_val) || undefined
						value: key_val
						onInput: @onNewDocFormInput.bind(null,key_name)
						placeholder: key.form_placeholder || key_name
				h Input,
					big: yes
					type: 'submit'
					btn_type: 'primary'


	validateJSONQueryString: (json)->
		JSON.parse(json)

	showSearchQueryHelper: =>
		@setState show_search_query_helper: yes

	hideSearchQueryHelper: =>
		@setState show_search_query_helper: no

	setSearchQueryJSONValue: (e)=>
		@setState
			search_query_value: e.target.value

	onSelectQueryItem: (q_item)=>
		@setState
			search_query_value: q_item.value

	setSearchKeyValue: (e)=>
		@setState search_key_value: e.target.value
	
	setNewLayoutNameValue: (e)=>
		@setState new_layout_name_value: e.target.value
	setNewLayoutKeysValue: (e)=>
		@setState new_layout_keys_value: e.target.value
	showNewLayoutForm: =>
		@setState show_new_layout_form:yes
	addKeytoNewLayoutKeysValue: (key_name)=>
		
		try
			keys_arr = JSON.parse(@state.new_layout_keys_value)
		catch
			keys_arr = []
		k_i = keys_arr.indexOf(key_name)
		if k_i >= 0
			keys_arr.splice(k_i,1)
		else
			keys_arr.push key_name
		@setState
			new_layout_keys_value: JSON.stringify(keys_arr,4)


	submitNewLayoutForm: ()=>
		@props.createNewLayout(@state.new_layout_name_value,@state.new_layout_keys_value)


	searchQueryJSONSubmit: =>
		try 
			@validateJSONQueryString(@state.search_query_value)
			@props.searchByJSONQuery(@state.search_query_value)
		catch error
			@setState
				search_query_json_value_error: error.messsage
			console.warn 'search_query_json_value_error '+error.message

	
	submitSearchKeyValue: ->
		@props.searchByKeyValue(@state.search_query_value)
	

	getPinMenuBoolean: (pin_menu_name,bool)->
		if @state.pin_menu_name == pin_menu_name then true else (if bool then false else undefined)


	render: (props,state)->
		window._menu = @
		opts = props.opts
		data = props.data
		cfg = props.cfg
		if opts.parent_category
			list_label = [
				h 'span',{},opts.parent_category
				h 'span',{className: css['model-grid-slash']},'/'
				h 'span',{style:{fontWeight:600,color:@context.__theme.primary.color[0]}},opts.label
			]
		else
			list_label = opts.label

		selected_layout = cfg.layouts[@props.cfg.layout_index]
		selected_filter = cfg.filters[@props.cfg.filter_index]
		bb = document.body.getBoundingClientRect()

		try
			parsed_new_layout_keys = JSON.parse(@state.new_layout_keys_value)
		catch
			parsed_new_layout_keys = []


		h Slide,
			dim: 40
			vert : no
			className: css['menu-slide']

			h Menu,
				vert: no
				bounding_box: bb
				key: 'left-menu'
				# hover_reveal_enabled: no
				backdrop_color: @context.__theme.primary.inv[3]
				onClickBackdrop: @togglePinMenu.bind(@,null,false)
				hover_reveal_enabled: no
				big: true
				h MenuTab,
					vert: yes
					show_backdrop: @getPinMenuBoolean('statics',true)
					onClick: @togglePinMenu.bind(@,'statics',true)
					reveal: @getPinMenuBoolean('statics',true)
					content: h Input,
						type: 'button'
						btn_type: 'flat'
						i: 'more_vert'
					opts.statics.map @mapMenuStaticsButtons
				h MenuTab,
					vert: yes
					show_backdrop: @getPinMenuBoolean('models',true)
					reveal: @getPinMenuBoolean('models',true)
					content: h Input,
						type: 'label'
						name: 'document'
						btn_type: 'flat'
						label: list_label
				
				h MenuTab,
					vert: yes
					show_backdrop: @getPinMenuBoolean('add-doc',true)
					reveal: @getPinMenuBoolean('add-doc',true)
					onClick: @togglePinMenu.bind(@,'add-doc',true)
					content: h Input,
						type: 'button'
						btn_type: 'flat'
						i: 'add'
					@getPinMenuBoolean('add-doc') && @renderNewDocForm(props)
				h MenuTab,
					vert: yes
					# hover_reveal_enabled: no
					big: no
					bar_style:
						width: '100%'
					reveal: @getPinMenuBoolean('search-keys',true)
					show_backdrop: @getPinMenuBoolean('search-keys',true)
					content: h Input,
						onFocus: @togglePinMenu.bind(@,'search-keys',true)
						type: 'input'
						btn_type: 'flat'
						value: @state.search_key_value
						onInput: @setSearchKeyValue
						onEnter: @submitSearchKeyValue
						i: 'search'
						label:cfg.search_key.padStart(5)
						bar: yes
						placeholder: 'search by ['+cfg.search_key+']'
					h MenuTab,
						vert: no
						reveal: @state.show_search_query_helper
						onClickBackdrop: @hideSearchQueryHelper
						show_backdrop: @state.show_search_query_helper
						content: h Input,
							type: 'input'
							btn_type: 'flat'
							onFocus: @showSearchQueryHelper
							onInput: @setSearchQueryJSONValue
							onEnter: @searchQueryJSONSubmit
							onClick: @searchQueryJSONSubmit
							value: @state.search_query_value
							i: 'settings_ethernet'
							bar: yes
							placeholder: '{ type custom query }'
						@state.show_search_query_helper && h MenuTab,
							content: h SearchQueryHelper,
								query_list: cfg.query_list
								tab_name: cfg.query_helper_tab_name
								onSelectTab: @props.selectQueryHelperTab
								onBookmarkItem: @props.bookmarkSeachQueryItem
								onSelectItem: @onSelectQueryItem
					opts.keys_array.map @mapMenuSearchKeys				
				
			h Menu,
				vert: no
				bounding_box: bb
				key: 'right-menu'
				className: css['model-grid-list-menu-right']
				big: true
				backdrop_color: @context.__theme.primary.inv[3]
				onClickBackdrop: @togglePinMenu.bind(@,null,false)
				hover_reveal_enabled: no
				h MenuTab,
					vert: yes
					big: no
					onClick: @togglePinMenu.bind(@,'layouts',true)
					reveal: @getPinMenuBoolean('layouts',true)
					show_backdrop: @getPinMenuBoolean('layouts',true)
					# bar_style:
					# 	width: '100%'
					content: h Input,
						type: 'button'
						btn_type: 'flat'
						i: 'view_week'
						# label: bb.width > 750 && [
						# 	h 'span',{className: css['model-grid-slash-right']},'/'
						# 	String(selected_layout?.label || '-').padEnd(20)
						# ]
					cfg.layouts.map @mapMenuLayoutButtons
					h MenuTab,
						onClick: @showNewLayoutForm
						reveal: @state.show_new_layout_form
						content: h Input,
							type: 'button'
							i: 'add'
							label: 'add layout'
						vert: yes
						h MenuTab,
							content: h Input,
								type: 'input'
								onInput: @setNewLayoutNameValue
								value: @state.new_layout_name_value
								placeholder: 'layout label'
								label: 'label'
						h MenuTab,
							content: h Input,
								type: 'input'
								onInput: @setNewLayoutKeysValue
								value: @state.new_layout_keys_value
								placeholder: '[keys]'
								label: '[keys]'
						h MenuTab,
							className: css['layout-form-keys-container']
							content: opts.keys_array.map (key_name)=>
								key_index = parsed_new_layout_keys.indexOf(key_name)
								h Input,
									type: 'button'
									onClick: @addKeytoNewLayoutKeysValue.bind(@,key_name)
									btn_type: key_index >= 0 && 'primary' || 'flat'
									label: [
										key_name.padEnd(15)
										h 'span',{className: css['model-grid-opaque']},String(opts.keys[key_name].label).padStart(20)
										String(if key_index >= 0 then key_index else '').padStart(3)
									]
						h MenuTab,
							content: h Input,
								type: 'button'
								onClick: @submitNewLayoutForm
								label: 'create'
								center: yes
								disabled: !parsed_new_layout_keys.length || !@state.new_layout_keys_value
								btn_type: 'primary'


				h MenuTab,
					vert: yes
					big: no
					onClick: @togglePinMenu.bind(@,'filters',true)
					reveal: @getPinMenuBoolean('filters',true)
					show_backdrop: @getPinMenuBoolean('filters',true)
					bar_style:
						width: '100%'
					content: h Input,
						type: 'button'
						btn_type: 'flat'
						i: 'bookmark'
						# label: selected_filter && bb.width > 750 && [
						# 	h 'span',{className: css['model-grid-slash-right']},'/'
						# 	String(selected_filter?.label || '-').padEnd(15)
						# ] || undefined
					cfg.filters.map @mapMenuFilterButtons





class ModelGridList extends Component

	componentWillMount: ->
		# @buildCellCache()

	
	buildCellCache : =>
		@_cell_cache = new CellMeasurerCache
			minWidth: 55
			fixedHeight: true
			defaultWidth: 255
	
	gridRef: (el)=>
		# log el
		@_grid = el
		window.grid = el
		# log @_grid
	
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
		layout = props.cfg.layouts[props.cfg.layout_index || 0] || props.cfg.layouts[0]
		filter = props.cfg.filters[props.cfg.filter_index]?.label || null
		sort_str = JSON.stringify(props.cfg.sort)
		(filter || 'all') + '-' + (layout?.label)+'-'+props.cfg.selected_doc_id+'-'+sort_str


	componentDidUpdate: ->
		# log @_grid
		if @getGridKey(@props) != @state.grid_key
			@state.grid_key = @getGridKey(@props)
			@_grid.recomputeGridSize()


	render: (props)->
		layout = props.cfg.layouts[props.cfg.layout_index]
		filter = props.cfg.filters[props.cfg.filter_index]?.label || null
		# if !layout
		# 	@state.pin_menu_name = 'layout'
		# 	@state.menu_backdrop =
		# log props.selected_layout_index
		opts = props.opts
		data = props.data
		grid_key = @getGridKey(props)
		# log grid_key
		if @_grid_slide
			grid = h MultiGrid,
				className: css['model-grid-list']
				ref: @gridRef
				# key: grid_key
				onScroll: @onGridScroll
				cellRenderer: @renderCell
				columnWidth: @columnWidth
				columnCount: layout && layout.keys.length+1 || 0
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



class ModelGrid extends Component
	constructor: (props)->
		super(props)
		@state =
			layout_index: 0
			filter_index: 0
			filters: []
			layouts: []
			query_bookmark_index_map: []
			selected_doc_id: 1
			search_key: props.opts.keys_array[0]
			query_list: []
			new_doc: {}
			sort: {}
	selectQueryHelperTab: (tab_name)=>
		@setState
			query_helper_tab_name: tab_name
	searchByJSONQuery: (value)=>
		for qf_item in @state.query_list
			if qf_item.value == value
				qf_item.call_count++
				qf_item.created_at = Date.now()
				return @setState
					search_query_json_value: value
					query_list: @state.query_list

		@state.query_list.push
			value: value
			call_count: 0
			is_bookmarked: no
			created_at: Date.now()
		
		@setState
			search_query_json_value: value
			query_list: @state.query_list

	searchByKeyValue: (value)->
		@setState
			search_key_value: value

	onSelectDocumentById: (doc_id)=>
		@setState
			selected_doc_id: doc_id
	onSelectSearchKey: (key_name)=>
		@setState
			search_key: key_name
	onSelectLayout: (layout)=>
		@setState
			layout_index: @props.cfg.layouts.indexOf(layout) || 0

	createNewLayout: (layout_label,layout_keys)=>
		fl = @state.layouts.find (l)->
			if l.label == layout_label
				return true
		if fl
			@state.layouts.splice(@state.layouts.indexOf(fl),1)

		@state.layouts.unshift
			keys: JSON.parse(layout_keys)
			label: layout_label

		@setState()


	bookmarkSeachQueryItem: (bookmark_label,q_item)=>
		query_bookmark_index_map = []
		filters = []
		for qf_item,i in @state.query_list
			if qf_item.value == q_item.value
				qf_item.bookmark_label = bookmark_label

			if qf_item.bookmark_label
				filters.push
					label: qf_item.bookmark_label
					bookmark_index: i
				
		
		@setState
			query_list: @state.query_list
			filters: filters

	onSelectFilter: (filter)=>
		@setState
			filter_index: @props.opts.filters.indexOf(filter) || 0

	onToggleKeySort: (key_name)=>
		if !@state.sort[key_name]
			@state.sort[key_name] = -1
		else if @state.sort[key_name] == -1
			@state.sort[key_name] = 1
		else
			@state.sort[key_name] = undefined
		@setState()

	componentWillMount: ->
		@props.loadCfg?(@state)

	componentDidUpdate: ->
		@props.saveCfg?(@state)

	render: (props,state)->
		opts = props.opts
		data = props.data
		

		props.cfg = @state
		props.onSelectLayout = @onSelectLayout
		props.onSelectFilter = @onSelectFilter
		props.onSelectDocumentById = @onSelectDocumentById
		props.onSelectSearchKey = @onSelectSearchKey
		props.onToggleKeySort = @onToggleKeySort
		props.selectQueryHelperTab = @selectQueryHelperTab
		props.searchByKeyValue = @searchByKeyValue
		props.bookmarkSeachQueryItem = @bookmarkSeachQueryItem
		props.searchByJSONQuery = @searchByJSONQuery
		props.createNewLayout = @createNewLayout
		props.onAddDocumentButton = @onAddDocumentButton

	
		h Slide,
			vert: yes
			className: css['model-grid']
			h ModelGridMenu,props
			h ModelGridList,props




module.exports = ModelGrid