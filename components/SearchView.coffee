Slide = require 're-slide'
{AlertDot,Input,MenuTab,Menu,Bar,SquareLoader,StyleContext} = require 're-lui'
css = require './ModelGrid.less'
cn = require 'classnames'
JsonView = require './JsonView.coffee'
{List} = require 'react-virtualized/dist/commonjs/List'
{CellMeasurer,CellMeasurerCache} = require 'react-virtualized/dist/commonjs/CellMeasurer'


MAX_CHAR = 32

SEARCH_BAR_WIDTH = 400





class QueryTabs extends Component
	constructor: (props)->
		super(props)

	renderTab: (qi)=>

		part_spans = []
		if @props.search_label
			search_parts = @props.search_label.split(' ')
			qi.label.split(' ').map (label_part)->
				for search_part in search_parts
					f_i = label_part.indexOf(search_part)
					if f_i >= 0
						found_part = search_part
						break

				if f_i >= 0
					part_spans.push label_part.substring(0,f_i)
					part_spans.push h 'span',
						key: part_str
						style:
							color: @context.primary.true
						found_part
					part_spans.push label_part.substring(f_i+found_part.length,label_part.length)
				
		else
			part_spans = [qi.label]

		if @props.query_item._id == qi._id
			btn_type = 'true'
		else
			btn_type = !qi.is_public && 'primary' || 'default'

		h Input,
			type: 'button'
			key: qi._id
			btn_type: btn_type
			onClick: @props.selectQuery.bind(null,qi)
			label: part_spans



	filterAndCombineQueries: ->
		arr = [].concat(@props.private_queries,@props.public_queries)
		if @props.search_label
			search_label_parts = @props.search_label.split(' ').map (part)->
				"\b"+part
			match_regex = new RegExp("#{search_label_parts.join('|')}","ig")
			return arr.filter (qi)->
				match_regex.test(qi.label)
			.map @renderTab
		else
			arr.map @renderTab



	render: ->
		query_tabs = @filterAndCombineQueries()

		if !query_tabs.length
			query_tabs = h 'div',
				className: 'flex-right opaque'
				'no bookmarks, create with'
				h Input,
					i: 'menu_open'
					type: 'label'
					btn_type: 'flat'

		h 'div',
			className: cn 'flex-right slim-scrollbar full-w mpad'
			style:
				overflowY: 'hidden'
				height: DIM+3.75*2+6
				overflowX: 'scroll'
				flexShrink: 0
			h Input,
				type: 'label'
				style:
					paddingRight: 0
				label: '#'
				btn_type: 'flat'
			query_tabs
















class SearchView extends Component
	constructor: (props)->
		super(props)
		# window.sq = @
		@state = 
			query_item: props.query_item
			show_info_options: no
			query_item_label: null
			clicked_run_query_at: 0

		@_cell_cache = new CellMeasurerCache
			defaultHeight: 30
			fixedWidth: yes
			fixedHeight: no
	
	onFocus: =>
		setTimeout ()=>
			@_search.focus()
		,0
		if @state.run_query_interval
			@toggleQueryInterval()
		if @props.query_item.called_at && @props.reveal
			@props.cloneQueryItemAndSet(label: false,@props.query_item)
			
		@props.onClick?()
	
	onSearchEnter: =>
		if !@props.query_item.called_at && @props.query_item.type == 'bookmark'
			if @props.query_item.match_label
				@createOrUpdateQueryItem
					input_value: '#'+@props.query_item.match_label
		@_cell_cache.clearAll()
		setTimeout @props.onHide,0


	setQueryItemLabel: (e)=>
		@setState query_item_label: e.target.value


	unsaveQueryItem: =>
		@props.updateQueryItem
			label: false
		,@props.query_item
		
		@setState
			show_info_options: no
			query_item_label: null
			force_render_grid: yes
	
		
		
	
	saveQueryItem: =>
		@props.updateQueryItemAndSet
			label: @state.query_item_label
		,@props.query_item
		
		@setState
			show_info_options: no
			query_item_label: null
			force_render_grid: yes
		
	
	onClickIcon: (e)=>
		if @props.query_item.type != 'bookmark'
			@createOrUpdateQueryItem
				input_value: '#'
			,@props.query_item
		else if @props.query_item.label
			@props.cloneQueryItemAndSet
				input_value: '#'
			,@props.query_item
		if !@props.reveal
			@props.onClick()

	mouseEnterMenuIcon: =>
		@setState hover_menu_icon:yes
	mouseLeaveMenuIcon: =>
		@setState hover_menu_icon:no


	setSearchValue: (e)=>
		@createOrUpdateQueryItem
			input_value: e.target.value

	setSearchKey: (key)=>
		@createOrUpdateQueryItem
			key: key
		
	

	createOrUpdateQueryItem: (q_opts)=>
		if @props.query_item.called_at
			@props.cloneQueryItemAndSet q_opts,@props.query_item
		else
			@props.updateQueryItem q_opts,@props.query_item
			@forceUpdate()



	UNSAFE_componentWillUpdate: (props,state)->
		if props.query_item._id != @props.query_item._id || props.reveal != @props.reveal || props.queries_updated_at != @props.queries_updated_at || props.bookmarks_updated_at != @props.bookmarks_updated_at
			if props.queries_updated_at != @props.queries_updated_at
				@_cell_cache?.clearAll()
			# log props.queries.indexOf(props.query_item)
			state.scroll_queries_index = props.queries.indexOf(props.query_item)
			# state.force_update_grid = true
			state.force_render_grid = true
			



	componentDidUpdate: (props,state)->
		if @state.force_render_grid
			@_list?.forceUpdateGrid()


	listRef: (el)=>
		@_list = el


	selectItem: (query_item)=>
		@props.setQueryItem(query_item,true)
		@props.onHide(true)





	# renderQueryListItem: (r_opts)=>
	# 	query_item = @props.queries[r_opts.index]
	# 	if !query_item
	# 		return false


	# 	is_selected = @props.query_item._id == query_item._id


	# 	if is_selected
	# 		cell_bg = @context.secondary.color[0]
	# 		cell_color = @context.secondary.inv[1]
	# 	else
	# 		cell_bg = (r_opts.index % 2) && @context.primary.inv[1] || null
	# 		cell_color = @context.primary.color[3]


	# 	bot_right = null
	# 	if query_item.error
	# 		bot_right = h 'div',
	# 			className: css['search-query-error'],
	# 			query_item.error
	# 	else if query_item.called_at && !query_item.completed_at
	# 		bot_right = h SquareLoader,
	# 			background: @context.secondary.color[1]
	# 			is_loading: yes



	# 	h CellMeasurer,
	# 		cache: @_cell_cache
	# 		rowIndex: r_opts.index
	# 		key: r_opts.key
	# 		parent: r_opts.parent
	# 		h 'div',
	# 			style: r_opts.style
	# 			className: cn(css['model-grid-search-query-l-item'],is_selected && css['model-grid-search-query-l-item-sel'])
	# 			onClick: @selectItem.bind(@,query_item)
				
	# 			h 'div',
	# 				style:
	# 					color: cell_color
	# 					background: cell_bg
	# 				className: css['json']
	# 				h JsonView,
	# 					json: query_item.value
	# 					trim: yes
	# 					colors:
	# 						key: !is_selected && @context.primary.color[1] || @context.secondary.inv[1]
	# 						number: 'orange'
	# 						string: @context.primary.true
	# 						boolean: @context.primary.false

	# 				query_item.filter_value && (h JsonView,
	# 					json: query_item.filter_value
	# 					trim: yes
	# 					style: 
	# 						opacity: 0.3
	# 					colors:
	# 						key: !is_selected && @context.primary.color[2] || @context.secondary.inv[2]
	# 						number: 'orange'
	# 						string: @context.primary.true
	# 						boolean: @context.primary.false
	# 				) || null

	# 				h 'div',
	# 					className: css['search-query-item-label']
	# 					query_item.label && '#'+query_item.label || null
	# 					query_item.label && h 'i',
	# 						className: 'material-icons'
	# 						'bookmark'
	# 					query_item.call_count

	# 				bot_right && (h 'div',
	# 					className: css['search-query-item-label2']
	# 					bot_right
	# 				) || null


	# renderBookmarkItem: (r_opts)=>
	# 	query_item = @props.bookmarks[r_opts.index]
	# 	is_selected = @props.query_item._id == query_item._id
	# 	r_opts.style.background = (r_opts.index % 2) && @context.primary.inv[1] || null
	# 	h 'div',
	# 		key: query_item.label
	# 		style: r_opts.style
	# 		onClick: @selectItem.bind(@,query_item)
	# 		className: cn(css['model-grid-search-bookmark-item'])
	# 		h 'span',{className:css['model-grid-opaque']},'#'
	# 		h 'span',{},query_item.label
	# 		h 'span',{className:css['search-query-item-label']},query_item.call_count



	# renderBookmarksList: (height)->
	# 	h List,
	# 		height: height
	# 		width: SEARCH_BAR_WIDTH
	# 		key: 'bookmarks'
	# 		rowHeight: 30
	# 		rowCount: @props.bookmarks.length
	# 		rowRenderer: @renderBookmarkItem



	# renderQueryList: (height)->
	# 	scroll_queries_index = @state.scroll_queries_index
	# 	@state.scroll_queries_index = undefined

	# 	h List,
	# 		height: height
	# 		width: SEARCH_BAR_WIDTH
	# 		ref: @listRef
	# 		key: 'queries-'+@props.queries_updated_at
	# 		scrollToAlignment: 'start'
	# 		scrollToIndex: scroll_queries_index
	# 		rowHeight: @_cell_cache.rowHeight
	# 		rowCount: @props.queries.length
	# 		deferredMeasurementCache: @_cell_cache
	# 		rowRenderer: @renderQueryListItem


	# renderBookmarkOptions: ->
	# 	[
	# 		h MenuTab,
	# 			key: 1
	# 			content: h Input,
	# 				type: 'button'
	# 				i: 'remove_circle'
	# 				onClick: @unsaveQueryItem
	# 				style:
	# 					background: @context.primary.warn
	# 					color: 'white'
	# 				label: 'forget'
	# 	]


	# renderSaveForm: ->
	# 	[
	# 		h MenuTab,
	# 			key: 'save'
	# 			content: h Input,
	# 				type: 'input'
	# 				onInput: @setQueryItemLabel
	# 				onEntr: @saveQueryItem
	# 				value: @state.query_item_label || ''
	# 				placeholder: 'max '+MAX_CHAR+' char'
	# 				label: 'label'
	# 	]



	# mapMenuSearchKeys: (key_name,i)=>
	# 	key = @props.keys[key_name]
	# 	if !key
	# 		throw new Error 'key does not exist,'+key_name
	# 	if @props.filter?.query_value[key_name]
	# 		return null

	# 	if !key.indexed
	# 		return null

	# 	h MenuTab,
	# 		key: i
	# 		content: h Input,
	# 			onClick: @setSearchKey.bind(null,key_name)
	# 			focus: if key_name == @props.query_item.key then false else undefined
	# 			btn_type: key_name == @props.query_item.key && 'primary' || 'default'
	# 			type: 'button'
	# 			label: h 'div',
	# 				style:
	# 					width: '100%'
	# 				h 'span',{},key.label.padEnd(10)
	# 				h 'span',{className: (css['model-grid-label-float-right']+' '+css['model-grid-opaque'])},String(key_name)
				

	# renderKeysView: ->
	# 	h Bar,
	# 		vert: yes
	# 		style: 
	# 			background: @context.primary.inv[1]
	# 		className: css['search-keys-container']
	# 		@props.keys_array.map @mapMenuSearchKeys


	# showView: =>
	# 	@setState show_search_view: true
	
	# hideView: =>
	# 	@setState hide_search_view: true
	
	# showInfoOptions: =>
	# 	@setState show_info_options:yes
	
	# hideInfoOptions: =>
	# 	@setState show_info_options:no

	onKeyDown: (e)=>
		if e.keyCode == 27
			@_search.blur()
			@props.onHide(e)
	searchRef: (el)=>
		if !el
			return
		@_search = el._input

	toggleQueryInterval: =>	
		if @state.run_query_interval
			clearInterval @state.run_query_interval
			@setState
				run_query_interval: undefined
		else
			q_i = setInterval @props.runQuery,3000
			@setState
				run_query_interval: q_i
	onRunQuery: =>
		@props.runQuery()

	onShowLayoutHoverBox: (e)=>
		@props.showQueryBuilderHoverBox(@_week_btn)


	onSelectBookmarkItem: =>


	navPrevQuery: =>
		@props.navPrevQuery()

	navNextQuery: =>
		@props.navNextQuery()


	render: ->
		props = @props
		state = @state
		qi = props.query_item
		pad_label = 15


		query_item_is_loading = qi.called_at && !qi.completed_at
		
		if qi.match_label
			l_q_i = qi.match_label.indexOf(qi.match_label_q)
			l_q_l = qi.match_label_q.length
			suggest = [
				qi.match_label.substring(0,l_q_i)
				h 'span',{key:2,style:color:@context.primary.true},qi.match_label_q
				qi.match_label.substring(l_q_i+l_q_l)
			]



		info_btn_type = 'default' 
		if qi.type == 'json'
			search_i = 'code'
			search_placeholder = '{query}'
			info_label = qi.error || 'ok'
			info_i = qi.error && 'error' || 'error_outline'
			info_type = 'label'



		else if qi.type == 'key'
			search_placeholder =  'search by ' + ( props.schema.keys[qi.key]?.label )
			info_label = [
				'search by'
				h 'span',{key:2,style:color:@context.primary.true},qi.key
			]
			info_i = 'menu'
			info_type = 'button'



		else if qi.type == 'bookmark'
			search_i = 'bookmark'
			search_placeholder = '#[bookmark name]'
			info_label = suggest || 'search bookmarks'
			if suggest
				info_i = 'help'
				info_type = 'button'
				info_fn = @setSearchValue.bind(@,target:value:'#'+qi.match_label)
			else 
				info_i = 'more_horiz'
				info_type = 'label'



		if qi.called_at
			if qi.label
				info_i = 'settings'
				info_label = 'bookmark options'
				info_type = 'button'
				info_fn = @showInfoOptions #@unsaveQueryItem
			else
				info_i = 'bookmark'
				info_label = h 'div',{},
					'save '
					h 'span',{style:opacity:.5},props.query_item._id
				info_type = 'button'
				if @state.query_item_label
					info_fn = @saveQueryItem
				else
					info_fn = @showInfoOptions


		if props.query_item.called_at
			info_btn_type = 'primary'
		else
			info_btn_type = 'default'



		# log qi
		if qi.error
			bar_style = 
				background: @context.secondary.false
		if query_item_is_loading
			bar_style = 
				background: qi.error && @context.secondary.false || @context.secondary.color[2]


		search_placeholder = 'keyword | #saved | {json}'

		search_input = h 'div',
			cn: 'flex-right'
			h Bar,
				btn: yes
				big: yes
				h Input,
					type: 'button'
					i: 'keyboard_arrow_left'
					disabled: @props.query_index == 0
					onClick: @navPrevQuery
				h Input,
					type: 'button'
					disabled: @props.query_index == @props.queries.length-1
					i: 'keyboard_arrow_right'
					onClick: @navNextQuery
			h Bar,
				big: yes
				btn: yes
				h Input,
					onFocus: @onFocus
					ref: @searchRef
					type: 'input'
					input_props:
						autoComplete: 'false'
						spellCheck: 'false'
						autoCorrect: 'false'
						autoCapitalize: 'false'
					i: 'search'
					style: 
						width: SEARCH_BAR_WIDTH - 40 - 40
					value: qi.input_value
					bar_style: bar_style
					onInput: @setSearchValue
					onEnter: @onSearchEnter
					bar: yes
					placeholder: search_placeholder
				h Input,
						type: 'button'
						i: 'menu_open'
						big: yes
						ref: (el)=>
							if el
								@_week_btn = el._outer
						onClick: @onShowLayoutHoverBox

		# search_i = h Slide,
		# 	vert: yes
		# 	width: 40
		# 	height: 40
		# 	slide: yes
		# 	pos: if query_item_is_loading then 0 else 1
		# 	className: css['search-query-menu-icon']
		# 	style:
		# 		background: @context.primary.inv[1]
		# 	onClick: @onRunQuery
		# 	h Slide,
		# 		beta: 100
		# 		center: yes
		# 		h SquareLoader,
		# 			background: !qi.error && @context.primary.color[0] || @context.primary.false
		# 			is_loading: query_item_is_loading && !qi.error
		# 	h Slide,
		# 		vert: no
		# 		slide: yes
		# 		beta: 100
		# 		onMouseEnter: @mouseEnterMenuIcon
		# 		onMouseLeave: @mouseLeaveMenuIcon
		# 		# onClick: @onClickIcon
		# 		hide: yes
		# 		pos: @state.hover_menu_icon && 2 || (qi.type == 'bookmark' && 2 || qi.type == 'key' && 1 || qi.type == 'json' && 0)
		# 		h Slide,
		# 			beta: 100
		# 			center: yes
		# 			h 'i',
		# 				className: 'material-icons'
		# 				'code'
		# 		h Slide,
		# 			beta: 100
		# 			center: yes
		# 			h 'i',
		# 				className: 'material-icons'
		# 				'search'
		# 		h Slide,
		# 			beta: 100
		# 			center: yes
		# 			h 'i',
		# 				className: 'material-icons'
		# 				'bookmark'


		# if qi.called_at && !qi.label
		# 	info_options = @renderSaveForm()
		# else if qi.label
		# 	info_options = @renderBookmarkOptions()

		# else if qi.type == 'key'
		# 	info_options = @renderKeysView()
		# 	info_fn = @showInfoOptions

		# log info_fn
		# info_bar = h Input,
		# 	i: info_i
		# 	style:
		# 		width: SEARCH_BAR_WIDTH
		# 		overflow: 'hidden'
		# 	onClick: info_fn

		# 	type: info_type
		# 	btn_type: info_btn_type
		# 	# select: info
		# 	label: info_label
		
		# query_tab_height = 260
		# if @context.gridHeight? && (@context.gridHeight - 30) < 260
		# 	query_tab_height = @context.gridHeight - 30
		

		# log qi
		# if props.reveal
		# 	if qi.type == 'bookmark' && !qi.called_at
		# 		query_list = @renderBookmarksList(query_tab_height)
		# 	else
		# 		query_list = @renderQueryList(query_tab_height)
		# if @props.data_item_id
		edit_doc_json_button = h Input,
			type: 'button'
			i: 'edit'
			btn_type: !@props.data_item_id && 'flat'
			big: yes
			disabled: !@props.data_item_id
				# btn_type: 'primary'


		# private_bookmarks = @props.bookmarks[@props.schema.name].map (query_item)=>
		# 	h Input,
		# 		type: 'button'
		# 		label: '#'+query_item.bookmark_label
		# 		btn_type: 'primary'
		# 		onClick: @onSelectBookmarkItem

		# public_bookmarks = @props.bookmarks[@props.schema.name].map (query_item)=>
		# 	h Input,
		# 		type: 'button'
		# 		label: '#'+query_item.bookmark_label
		# 		btn_type: 'primary'
		# 		onClick: @onSelectBookmarkItem
		

		h Slide,
			vert: yes
			dim: DIM2*2+6+12
			
			
			
			h QueryTabs,
				private_queries: @props.private_queries
				public_queries: @props.public_queries
				query_item: @props.query_item
				selectQuery: @props.selectQuery
			
			h 'div',
				className: 'flex-right mpad'
				search_input
				# h Bar,
				# 	vert: no
				# 	big: yes
				# 	btn: yes
				# 	# search_i
					
					
				# h 'div',
				# 	className: 'flex-right margin-left margin-right full-w'
				# 	# style:
				# 		# background: @context.secondary.inv[2]
				edit_doc_json_button
				# h Input,
				# 	type: 'label'
				# 	i: 'bookmarks'
				# 	label: ':'
				# 	btn_type: 'flat'
				# 	style:
				# 		paddingRight: 0
				# private_bookmarks
				# h Input,
				# 	type: 'button'
				# 	label: '#123'
				# 	btn_type: 'primary'
				# h Input,
				# 	type: 'button'
				# 	label: '#122'
				# 	btn_type: 'primary'
				# h Input,
				# 	type: 'button'
				# 	label: '#222'
				# 	btn_type: 'primary'
				# h Slide,
				# 	beta: 100
				# 	inverse:yes
					
				# 	h Input,
				# 		type: 'button'
				# 		i: 'save'
				# 		# btn_type: 'primary'
				# 		onClick: @onShowSaveHoverBox
			
			
						# btn_type: 'primary'
				# className: 'margin-left'
				

				# 'public bookmark chips & search autofill hints go here'

			# h 'div',
			# 	className: 'flex-down'
			# 	h 'div',
			# 		className: 'flex-right'
					
					
					
		# h Input,


		# 	vert: yes
		# 	big: no
		# 	tab_style:
		# 		width: SEARCH_BAR_WIDTH
		# 	bar_style:
		# 		width: SEARCH_BAR_WIDTH
		# 	reveal: props.reveal
		# 	show_backdrop: props.reveal
		# 	onClickBackdrop: props.onHide
		# 	onKeyDown: @onKeyDown
		# 	content: h Bar,
		# 		big: yes
		# 		style:
		# 			transition: 'background 0.3s ease'
		# 			background: props.reveal && @context.primary.inv[1] || @context.primary.inv[0]
		# 		# refresh_query_button
				
		# 	force_split_y: 1
		# 	force_bar_dir_y: 1
		# 	split_y: 1
			
		# 	h MenuTab,
		# 		click_reveal_enabled: no
		# 		content: info_bar
		# 		show_backdrop: info_options && @state.show_info_options
		# 		reveal: info_options && @state.show_info_options || false
		# 		onClickBackdrop: info_options && @hideInfoOptions
		# 		info_options
		# 	h MenuTab,
		# 		tab_style:
		# 			height: query_tab_height
		# 			background: @context.primary.inv[0]
		# 		content: query_list

SearchView.contextType = StyleContext
module.exports = SearchView