{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar,SquareLoader} = require 'lerp-ui'
css = require './ModelGrid.less'
cn = require 'classnames'
JsonView = require './JsonView.coffee'
{List} = require 'react-virtualized/dist/commonjs/List'
{CellMeasurer,CellMeasurerCache} = require 'react-virtualized/dist/commonjs/CellMeasurer'

MAX_CHAR = 32




class SearchView extends Component
	constructor: (props)->
		super(props)
		window.sq = @
		@state = 
			query_item: props.query_item
			show_info_options: no
			query_item_label: null
	
	onFocus: =>

		if @props.query_item.called_at && @props.reveal
			@props.cloneQueryItemAndSet(label: false,@props.query_item)
			
		@props.onClick()
	
	onSearchEnter: =>
		if !@props.query_item.called_at && @props.query_item.type == 'bookmark'
			if @props.query_item.match_label
				@setSearchValue(target:value:'#'+@props.query_item.match_label)
		# @state.force_update_grid = true
		# @state.force_render_grid = true
		@_cell_cache.clearAll()
		@props.runQuery()

	buildCache: ->
		
		@_cell_cache = new CellMeasurerCache
			defaultHeight: 30
			fixedWidth: yes
			fixedHeight: no
		
		
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



	componentWillMount: (props)->
		@buildCache()


	componentWillUpdate: (props,state)->
		if props.query_item._id != @props.query_item._id || props.reveal != @props.reveal || props.queries_updated_at != @props.queries_updated_at || props.bookmarks_updated_at != @props.bookmarks_updated_at
			if props.queries_updated_at != @props.queries_updated_at
				@_cell_cache?.clearAll()
			# log props.queries.indexOf(props.query_item)
			state.scroll_queries_index = props.queries.indexOf(props.query_item)
			# state.force_update_grid = true
			# state.force_render_grid = true
			



	componentDidUpdate: (props,state)->
		if @state.force_render_grid
			@_list?.forceUpdateGrid()


	listRef: (el)=>
		@_list = el


	selectItem: (query_item)=>
		@props.setQueryItem(query_item,true)



	renderQueryListItem: (r_opts)=>
		query_item = @props.queries[r_opts.index]
		
		if !query_item
			return false
		
		r_opts.style.height = 'auto'
		
		is_selected = @props.query_item._id == query_item._id

		# log is_selected,query_item.label || query_item._id


		# log is_selected
		if is_selected
			cell_bg = @context.__theme.secondary.color[0]
			cell_color = @context.__theme.secondary.inv[1]
			
		else
			cell_bg = (r_opts.index % 2) && @context.__theme.primary.inv[1] || null
			cell_color = @context.__theme.primary.color[3]
		


		query_item_is_loading = query_item.called_at && !query_item.completed_at


		h CellMeasurer,
			cache: @_cell_cache
			rowIndex: r_opts.index
			key: r_opts.key
			parent: r_opts.parent
			h 'div',
				style: r_opts.style
				className: cn(css['model-grid-search-query-l-item'],is_selected && css['model-grid-search-query-l-item-sel'])
				onClick: @selectItem.bind(@,query_item)
				
				h 'div',
					style:
						color: cell_color
						background: cell_bg
					className: css['json']
					h JsonView,
						json: query_item.value
						colors:
							key: !is_selected && @context.__theme.primary.color[0] || @context.__theme.secondary.inv[0]
							number: 'orange'
							string: @context.__theme.primary.true
							boolean: @context.__theme.primary.false

					h 'div',
						className: css['search-query-item-label']
						query_item.label && '#'+query_item.label || null
						query_item.label && h 'i',
							className: 'material-icons'
							'bookmark'
						query_item.call_count
					

					h 'div',
						className: css['search-query-item-label2']
						query_item_is_loading && ( h SquareLoader,
							background: @context.__theme.secondary.color[1]
							is_loading: yes
						) || null
						# JSON.stringify(query_item.sort_keys)


					

	# onNewBookmarkLabelValue: (e)=>
	# 	@setState new_bookmark_label_value: e.target.value

	# selectTab: =>
	# 	if @props.tab_name == 'bookmark'
	# 		@props.selectSearchQueryViewTab('history')
	# 	else
	# 		@props.selectSearchQueryViewTab('bookmark')
	renderBookmarkItem: (r_opts)=>
		log 'render bookmark'
		query_item = @props.bookmarks[r_opts.index]
		is_selected = @props.query_item._id == query_item._id
		r_opts.style.background = (r_opts.index % 2) && @context.__theme.primary.inv[1] || null
		h 'div',
			style: r_opts.style
			onClick: @selectItem.bind(@,query_item)
			className: cn(css['model-grid-search-bookmark-item'])
			h 'span',{className:css['model-grid-opaque']},'#'
			h 'span',{},query_item.label
			h 'span',{className:css['search-query-item-label']},query_item.call_count
			



	renderBookmarksList: ()->
		h List,
			height: 260
			width: 300
			key: 'bookmarks'
			rowHeight: 30
			rowCount: @props.bookmarks.length
			rowRenderer: @renderBookmarkItem
	
	renderQueryList: ->
		
		
		scroll_queries_index = @state.scroll_queries_index
		@state.scroll_queries_index = undefined

		h List,
			height: 260
			width: 300
			ref: @listRef
			key: 'queries-'+@props.queries_updated_at
			scrollToAlignment: 'start'
			scrollToIndex: scroll_queries_index
			rowHeight: @_cell_cache.rowHeight
			rowCount: @props.queries.length
			deferredMeasurementCache: @_cell_cache
			rowRenderer: @renderQueryListItem


# style:
	# background: @context.__theme.primary.inv[0]
	# renderHistoryView: ->
	# 	h MenuTab,
	# 		className: css['model-grid-search-query-view']
	# 		tab_style:
	# 			background: @context.__theme.primary.inv[0]
	# 		vert: yes

	# 		content: [
	# 			h Input,
	# 				i: !@state.selected_item && 'label' || (@state.selected_item?.bookmark_label && 'highlight_off' || 'save')
	# 				type: @state.selected_item?.bookmark_label && 'button' || 'text'
	# 				btn_type: @state.selected_item?.bookmark_label && 'default' || 'flat'
	# 				value: @state.new_bookmark_label_value
	# 				label: @state.selected_item?.bookmark_label
	# 				onClick: @bookmarkItem
	# 				onEnter: @bookmarkItem
	# 				onInput: @onNewBookmarkLabelValue
	# 				placeholder: @state.selected_item && '[bookmark label]' || 'select query'
					
				
	# 			h Bar,
	# 				big: no
	# 				h Input,
	# 					i: 'bookmark'
	# 					btn_type: @props.tab_name == 'bookmark' && 'primary' || 'flat'
	# 					onClick: @props.tab_name != 'bookmark' && @selectTab 
	# 					type: 'button'
	# 				h Input,
	# 					i: 'history'
	# 					btn_type: @props.tab_name == 'history' && 'primary' || 'flat'
	# 					onClick: @props.tab_name != 'history' && @selectTab
	# 					type: 'button'
	# 		]
	renderBookmarkOptions: ->
		[
			h MenuTab,
				content: h Input,
					type: 'button'
					i: 'remove_circle'
					onClick: @unsaveQueryItem
					# onEntr: @saveQueryItem
					# value: @state.query_item_label
					# placeholder: 'max '+MAX_CHAR+' char'
					style:
						background: @context.__theme.primary.warn
						color: 'white'
					label: 'forget'
		]


	renderSaveForm: ->
		[
			h MenuTab,
				content: h Input,
					type: 'input'
					onInput: @setQueryItemLabel
					onEntr: @saveQueryItem
					value: @state.query_item_label
					placeholder: 'max '+MAX_CHAR+' char'
					label: 'label'
			
			# h MenuTab,
			# 	content: h Input,
			# 		type: 'input'
			# 		bar: yes
			# 		btn_type: 'flat'

			# 		label: 'query'.padStart(8)
			# 		value: @state.query_item_value
			# 		placeholder: @props.query_item.value

			# 		onInput: @setQueryItemValue

			# h MenuTab,
			# 	content: h Bar,
			# 		big: no
			# 		h Input,
			# 			label: 'save layout'.padStart(8)
			# 			type: 'checkbox'
			# 			select: @state.query_item_layout_keys_enabled
			# 			checked: @state.query_item_layout_keys_enabled
			# 			onClick: @setQueryItemLayoutKeysEnabled
			# 			btn_type: 'flat'
			# 		h Input,
			# 			type: 'input'
			# 			btn_type: 'flat'
			# 			disabled: !@state.query_item_layout_keys_enabled
			# 			placeholder: JSON.stringify(@props.query_item.layout_keys)
			# 			value: @state.query_item_layout_keys
			# 			onInput: @setQueryItemLayoutKeys
					
					
			# h MenuTab,
			# 	content: h Input,
			# 		type: 'input'
			# 		btn_type: 'flat'
			# 		btn_type: 'flat'
					
			# 		label: 'sort'.padStart(8)
			# 		placeholder: JSON.stringify(@props.query_item.sort_keys)
			# 		value: @state.query_item_sort_keys
					
			# 		onInput: @setQueryItemSortKeys
		]



	mapMenuSearchKeys: (key_name,i)=>
		key = @props.keys[key_name]
		
		if @props.schema.filter.query_value[key_name]
			return null

		if !key.indexed
			return null
		h MenuTab,
			key: i
			content: h Input,
				onClick: @setSearchKey.bind(null,key_name)
				focus: if key_name == @props.query_item.key then false else undefined
				btn_type: key_name == @props.query_item.key && 'primary' || 'default'
				type: 'button'
				label: [
					key.label.padEnd(10)
					h 'span',{className: (css['model-grid-label-float-right']+' '+css['model-grid-opaque'])},String(key_name)
				]

	renderKeysView: ->
		h 'div',
			style: 
				background: @context.__theme.primary.inv[1]
			className: css['search-keys-container']
			@props.keys_array.map @mapMenuSearchKeys	


	showView: =>
		@setState show_search_view: true
	
	hideView: =>
		@setState hide_search_view: true
	
	showInfoOptions: =>
		@setState show_info_options:yes
	
	hideInfoOptions: =>
		@setState show_info_options:no

	onKeyDown: (e)=>
		if e.code == 'Escape'
			@_search.blur()
			@props.onHide(e)
	searchRef: (el)=>
		@_search = el._input
	render: (props,state)->
		qi = props.query_item
		pad_label = 15


		query_item_is_loading = qi.called_at && !qi.completed_at
		
		if qi.match_label
			l_q_i = qi.match_label.indexOf(qi.match_label_q)
			l_q_l = qi.match_label_q.length
			# log l_q_i+l_q_l
			suggest = [
				qi.match_label.substring(0,l_q_i)
				h 'span',style:color:@context.__theme.primary.true,qi.match_label_q
				qi.match_label.substring(l_q_i+l_q_l)
			]
			



		info_btn_type = 'default' 
		if qi.type == 'json'
			search_i = 'code'
			search_placeholder = '{query}'
			info_label = qi.error || 'json: ok'
			info_i = 'notifications'
			info_type = 'label'
		else if qi.type == 'key'
			search_placeholder =  'search by '+props.keys[qi.key].label
			info_label = ['search by ',h 'span',style:color:@context.__theme.primary.true,qi.key]
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
				info_label = ['save ',h 'span',style:opacity:.5,props.query_item._id]
				# 
				info_type = 'button'
				

				if @state.query_item_label
					info_fn = @saveQueryItem
					# info_btn_type = 'primary'
				else
					info_fn = @showInfoOptions
					# info_btn_type = 'default' 

		if props.query_item.called_at
			info_btn_type = 'primary'
		else
			info_btn_type = 'default'

	
		if props.query_item.label && !props.reveal
			search_input_label = true 
			search_input_label_value = h 'span',
				className: css['search-query-menu-search-label']
				qi.input_value

		if query_item_is_loading
			bar_style = 
				background: @context.__theme.secondary.color[2]

		search_input = h Input,
			onFocus: @onFocus
			ref: @searchRef
			type: search_input_label && 'button' || 'input'
			btn_type: 'flat'
			style: 
				paddingLeft: 0
				background: 'none'
				color: qi.type == 'json' && @context.__theme.secondary.color[2] || @context.__theme.primary.color[0]
				width: 260
			value: qi.input_value
			bar_style: bar_style
			onInput: @setSearchValue
			onEnter: @onSearchEnter
			bar: yes
			onClick: search_input_label && props.onClick
			placeholder: search_placeholder
			search_input_label_value




		search_i = h Slide,
			vert: yes
			width: 40
			height: 40
			slide: yes
			pos: if query_item_is_loading then 0 else 1
			className: css['search-query-menu-icon']
			h Slide,
				beta: 100
				center: yes
				h SquareLoader,
					background: @context.__theme.primary.color[0]
					is_loading: query_item_is_loading
			h Slide,
				vert: no
				slide: yes
				beta: 100
				onMouseEnter: @mouseEnterMenuIcon
				onMouseLeave: @mouseLeaveMenuIcon
				onClick: @onClickIcon
				pos: @state.hover_menu_icon && 2 || (qi.type == 'bookmark' && 2 || qi.type == 'key' && 1 || qi.type == 'json' && 0)
				h Slide,
					beta: 100
					center: yes
					h 'i',
						className: 'material-icons'
						'code'
				h Slide,
					beta: 100
					center: yes
					h 'i',
						className: 'material-icons'
						'search'
				h Slide,
					beta: 100
					center: yes
					h 'i',
						className: 'material-icons'
						'bookmark'


		

		search_placeholder = '#tag | {json} | key'

		

		if qi.called_at && !qi.label
			info_options = @renderSaveForm()
		else if qi.label
			info_options = @renderBookmarkOptions()

		else if qi.type == 'key'
			info_options = @renderKeysView()
			info_fn = @showInfoOptions

		# log info_fn
		info_bar = h Input,
			i: info_i
			style:
				width: 300
				overflow: 'hidden'
			onClick: info_fn

			type: info_type
			btn_type: info_btn_type
			# select: info
			label: info_label
		
	
		# log qi
		if props.reveal
			if qi.type == 'bookmark' && !qi.called_at
				query_list = @renderBookmarksList()
			else
				query_list = @renderQueryList()


		h MenuTab,
			vert: yes
			big: no
			tab_style:
				width: 300
			bar_style:
				width: 300
			reveal: props.reveal
			show_backdrop: props.reveal
			onClickBackdrop: props.onHide
			onKeyDown: @onKeyDown
			content: h Bar,
				big: yes
				style:
					transition: 'background 0.3s ease'
					background: props.reveal && @context.__theme.primary.inv[1] || @context.__theme.primary.inv[0]
				search_i
				search_input
			force_split_y: 1
			
			h MenuTab,
				click_reveal_enabled: no
				content: info_bar
				show_backdrop: info_options && @state.show_info_options
				reveal: info_options && @state.show_info_options || false
				onClickBackdrop: info_options && @hideInfoOptions
				info_options
			h MenuTab,
				tab_style:
					height: 260 
					background: @context.__theme.primary.inv[0]
				content: query_list

		
module.exports = SearchView