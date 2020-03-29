# Color = require 'color'
{createElement,Component} = require 'react'
global.h = createElement
global.Component = Component
Slide = require 're-slide'
Color = require 'color'
css = require './ModelGrid.less'
cn = require 'classnames'
{Input,MenuTab,Menu,Bar,Overlay,AlertOverlay,StyleContext,AlertDot,HoverBox,Style,generateStyle} = require 're-lui'
JsonView = require './JsonView.coffee'
_ = require 'lodash' 

global.xSeconds = (howmany)->
	return 1000 * howmany

global.xMinutes = (howmany)->
	return 1000 * 60 * howmany

global.xHours = (howmany)->
	xMinutes(howmany*60)

global.xDays = (howmany)->
	xHours(howmany*24)
	
rfc6902 = require('rfc6902')


# require 'colors'
CodeEditor = require('react-simple-code-editor').default
{ highlight, languages } = require 'prismjs/components/prism-core'
require 'prismjs/components/prism-clike'
require 'prismjs/components/prism-json'
require 'prismjs/components/prism-javascript'
require 'prismjs/themes/prism-twilight.css'

# dateFns = require('date-fns')

global.DIM2 = 40
global.DIM = 30
SearchView = require './SearchView.coffee'
TabsView = require './TabsView.coffee'
# BookmarksView = require './BookmarksView.coffee'
GridView = require './GridView.coffee'
# CalendarView = require './CalendarView.coffee'

QueryBuilderView = require './QueryBuilderView'
QuerySaverView = require './QuerySaverView'






class ModelGrid extends Component
	constructor: (props)->
		super(props)

		window._grid = @ #DEBUG
		
		@state = 
			is_visible: false
			scroll_to_index: -1
			key_col_widths: {}
			editor_patches: []
			editor_error: null
			editor_value: '{}'

			query_style_map: {}
			

			data_item: null
			data_item_id: props.data_item_id
			
			query_item: null
			data: new Map()

			schema: props.schema
			

			# local storage
			schema_queries: {}
			schema_queries_indices: {}

			# external persistant storage
			public_schema_queries: {}
			private_schema_queries: {}
			schema_states: {}

			schema_state_scrolls: {}


			hoverbox:
				visible: no
				pointer_events: yes
				onClose: ()=>
					@state.hoverbox.visible = false
					@setState({})
					@runQuery()

		@fillSchemaState()

		

		@g_props = 
			selectDataItem: @selectDataItem
			updateDataItem: @updateDataItem
			deleteDataItem: @deleteDataItem
			createDataItem: @createDataItem
			showJSONView: @showJSONView
			runQuery: @runQuery
			selectQuery: @selectQuery
			selectQueryByLabel: @selectQueryByLabel
			updateSelectedDocument: @updateSelectedDocument
			renderDataItemMethod: @renderDataItemMethod
			selectNextDataItem: @selectNextDataItem
			selectPrevDataItem: @selectPrevDataItem
			showQueryBuilderHoverBox: @showQueryBuilderHoverBox
			showQuerySaverHoverBox: @showQuerySaverHoverBox
			onScrollTop: @onScrollTop
			saveSchemaState: @saveSchemaState
			navPrevQuery: @navPrevQuery
			navNextQuery: @navNextQuery
			onRenderedSearchLabels: @onRenderedSearchLabels
			editQuery: @editQuery
			saveQuery: @saveQuery
			setFirstSearchQuery: @setFirstSearchQuery
			onSearchInputLabel: @onSearchInputLabel
			cloneQueryAndSet: @cloneQueryAndSet
			selectFirstSearchQuery: @selectFirstSearchQuery


	log: =>
		console.log('%c [modelgrid]','color:yellow',arguments[0]||'',arguments[1]||'',arguments[2]||'',arguments[3]||'',arguments[4]||'',arguments[5]||'')


	closeHoverBox: ()=>
		@state.hoverbox.visible = false
		@setState({})
		@runQuery()
			

	loadLocalState: ()->
		m_state = JSON.parse(localStorage.getItem('re-moodelgrid-local-state')||'{}')
		Object.assign @state,m_state


	saveLocalState: ()->

		save_str = JSON.stringify
			schema_queries: @state.schema_queries
			schema_state_scrolls: @state.schema_state_scrolls
			schema_queries_indices: @state.schema_queries_indices

		localStorage.setItem('re-moodelgrid-local-state',save_str)
	


	fillSchemaState: ()->
		@state.schema_queries[@state.schema.name] = @state.schema_queries[@state.schema.name] || []
		@state.schema_states[@state.schema.name] = @state.schema_states[@state.schema.name] || {}
		@state.schema_states[@state.schema.name].key_col_widths = @state.schema_states[@state.schema.name].key_col_widths || {}
		@state.public_schema_queries[@state.schema.name] = @state.public_schema_queries[@state.schema.name] || []
		@state.private_schema_queries[@state.schema.name] = @state.private_schema_queries[@state.schema.name] || []
		

		
	getAllSchemaData: ()->
		Promise.all([@getSchemaPublicQueries(),@getSchemaPrivateQueries(),@getSchemaState()])
		
		
		


	componentDidMount: =>
		@fillSchemaState()
		@loadLocalState()
		@decideQueryItem()
		await @getAllSchemaData()
		@state.scroll_top = @state.schema_state_scrolls[@props.schema.name]
		@runQuery()




	componentDidUpdate: (props,state)->
		@state.scroll_top = undefined
		
		if @props.data_item_id != props.data_item_id
			@state.data_item_id = @props.data_item_id
			if @state.data_item_id
				@getDataItem()
			else
				@state.data_item = null
			


		if props.schema != @props.schema || @props.schema_data_sync_id != props.schema_data_sync_id
			@state.schema = @props.schema
			@fillSchemaState()
			@decideQueryItem()
			@getAllSchemaData()
			@state.scroll_top = @state.schema_state_scrolls[@props.schema.name]
			@runQuery()

		if @props.onUpdate
			@props.onUpdate
				schema_queries_indices: @state.schema_queries_indices
				schema_states: @state.schema_states
				query_item: @state.query_item
				schema_queries: @state.schema_queries
				public_schema_queries: @state.public_schema_queries
				private_schema_queries: @state.private_schema_queries
				schema_states: @state.schema_states
				hoverbox: @state.hoverbox



	#*****************#
	# QUERY API
	#*****************#



	decideQueryItem: ()->
		query_index = @state.schema_queries_indices[@state.schema.name] || 0

		if !query_index?
			query_index = 0

		@state.schema_queries[@state.schema.name] = @state.schema_queries[@state.schema.name] || []

		query_index = Math.min(query_index,@state.schema_queries[@state.schema.name].length-1)
		
		@state.schema_queries_indices[@state.schema.name] = query_index

		if !@state.schema_queries[@state.schema.name].length
			@state.query_item = @createNewQuery(@state.schema)
		else
			@state.query_item = @state.schema_queries[@state.schema.name][query_index]



		



	navNextQuery: =>
		current_query_index = @state.schema_queries_indices[@state.schema.name]
		if !current_query_index?
			return false
		if @state.schema_queries[@state.schema.name][current_query_index+1]?
			@state.schema_queries_indices[@state.schema.name]+=1
			@state.schema_state_scrolls[@state.schema.name] = 0
			@state.query_item = @state.schema_queries[@state.schema.name]?[current_query_index+1]
			@setState({})
			@runQuery()
			@saveLocalState()



	navPrevQuery: =>
		current_query_index = @state.schema_queries_indices[@state.schema.name]
		if !current_query_index? || current_query_index == 0
			return false
		
		if @state.schema_queries[@state.schema.name][current_query_index-1]?
			@state.schema_queries_indices[@state.schema.name]-=1
			@state.schema_state_scrolls[@state.schema.name] = 0
			@state.query_item = @state.schema_queries[@state.schema.name]?[current_query_index-1]
			@setState({})
			@runQuery()
			@saveLocalState()



	resetQuery: (qi)->
		qi.call_count = 0
		qi.skip = 0
		qi.limit = @props.query_limit || 100



	selectQuery: (query_item)=>
		@state.schema_state_scrolls[@state.schema.name] = 0
		if @state.query_item._id == query_item._id && query_item._v == @state.query_item._id
			return false
		@resetQuery(query_item)
		@clearQueryIndex()
		@state.scroll_top = 0
		@state.query_item = query_item
		@runQuery()
		return true

	selectQueryByLabel: (query_label)=>
		public_queries = @state.public_schema_queries[@state.schema.name]
		private_queries = @state.private_schema_queries[@state.schema.name]

		f_query = _.find public_queries,label:query_label
		if f_query
			return @selectQuery(f_query)

		f_query = _.find private_queries,label:query_label
		if f_query
			return @selectQuery(f_query)


	clearQueryIndex: ->		
		@state.schema_queries[@state.schema.name].splice(@state.schema_queries_indices[@state.schema.name]+1)


	getSchemaPublicQueries: ()->
		schema_name = @state.schema.name
		public_queries = await @props.getSchemaPublicQueries(schema_name,@props.user_id)
		@state.public_schema_queries[schema_name] = public_queries || []
		@mapSchemaQueries(schema_name)
		@setSchemaQueryStyles(schema_name)
		@setState({})


	getSchemaPrivateQueries: ()->
		schema_name = @state.schema.name
		private_queries = await @props.getSchemaPrivateQueries(schema_name,@props.user_id)
		@state.private_schema_queries[schema_name] = private_queries || []
		@mapSchemaQueries(schema_name)
		@setSchemaQueryStyles(schema_name)
		@setState({})

	pushQuery: (qi)->
		schema_queries = @state.schema_queries[@state.schema.name]
		schema_queries.push qi
		
		if schema_queries.length > @props.max_save_local_query_count
			@state.schema_queries[@state.schema.name] = schema_queries.slice(Math.max(schema_queries.length-@props.max_save_local_query_count,0),schema_queries.length-1)
		@state.schema_queries_indices[@state.schema.name] = @state.schema_queries[@state.schema.name].length-1
		@saveLocalState()

	
	cleanQuery: =>
		if @state.query_item.type == 'key'
			if !@state.query_item.input_value
				@state.query_item.type = 'key'
				@state.query_item.value = ''
				@state.query_item.input_value = ''
		if @state.query_item.layout_keys.length == 0
			@state.query_item.layout_keys[0] = '_label'

		@state.query_item.hidden_layout_keys = []


		@state.query_item.layout_keys = @state.query_item.layout_keys.filter (key)=>
			@state.schema.keys[key]?

		@state.query_item.required_keys = @state.schema.required_keys


		@state.query_item.populate = []
		for key in @state.query_item.layout_keys
			@state.query_item.populate = @state.query_item.populate.concat @state.schema.keys[key].populate || []
			if @state.schema.keys[key].keys_array
				@state.query_item.hidden_layout_keys = @state.query_item.hidden_layout_keys.concat @state.schema.keys[key].keys_array


	runQuery: (run_next)=>
		if @state.scroll_top?
			_scroll_top = @state.scroll_top
		@cleanQuery()

		qi = @state.query_item

		if qi.error
			return


		qi.called_at = Date.now()
		qi.completed_at = null
		qi.call_count = @state.query_item.call_count || 0
		qi.call_count += 1

		if run_next == true
			qi.skip += qi.limit
			qi.limit = @props.query_limit
		else
			qi.limit += qi.skip
			qi.skip = 0
			qi.end_reached = false


		q_i = Object.assign {},@state.query_item


		if q_i.json_input && q_i.type == 'json'
			q_i.value = eval('('+q_i.json_input+')')


		if qi.call_count == 1
			@pushQuery(qi)


		@state.query_item.error = undefined

		@setState({})

		
		@props.runQuery(@props.schema.name,q_i).then (data)=>


			if q_i._id != @state.query_item._id
				console.warn 'previously ran query does not match current state query'
				return false
	
			current_data = @state.data.get(@state.query_item._id) || []
			if !run_next
				current_data = []
				if _scroll_top
					@state.scroll_top = _scroll_top
				
			else
				
			
			@state.data.set(@state.query_item._id,current_data.concat(data))

			@state.query_item.completed_at = Date.now()
			if data.length < @state.query_item.limit
				@state.query_item.end_reached = true
			

			@mapDataItems()

			
			@forceUpdate()
		.catch @setQueryItemRunError.bind(@,qi)

		@saveLocalState()
		@setState({})

	resetQuerySaveState: (qi)->
		qi.called_at = undefined
		qi.updated_at = undefined
		qi.created_at = undefined
		qi.color = undefined
		qi.description = undefined
		qi.label = undefined
		qi._id = Date.now().toString(24)

	cloneQuery: =>

		cloned_query = _.cloneDeep(@state.query_item)

		@resetQuerySaveState(cloned_query)
		@resetQuery(cloned_query)
		return cloned_query

	cloneQueryAndSet: (edits)=>
		cloned_query = @cloneQuery()
		@clearQueryIndex()
		if edits
			Object.assign cloned_query,edits
		@setState
			query_item: cloned_query
	
	clearQuery: =>
		@setState
			query_item: @createNewQuery()


	createNewQuery: =>

		query = 
			sort_keys: []
			layout_keys: [@state.schema.default_key || @state.schema.keys_array[0]]
			search_key: @state.schema.default_key || @state.schema.keys_array[0] 
			type: 'keyword'
			label: null #bookmark label
			user_id: @props.user_id
			skip: 0 #skip
			limit: @props.query_limit || 100
			call_count: 0
			_id: Date.now().toString(24)
			_v: 0
			is_public: no
			called_at: null
			json_input: null
			keyword_input: null

		return query




	setNewQuery: ()->
		query_item = @createNewQuery(@state.schema)
		@setState
			query_item: query_item


	saveQuery: ()=>
		pub_queries = @state.public_schema_queries[@state.schema.name]
		priv_queries = @state.private_schema_queries[@state.schema.name]
		
		fpubqi = _.findIndex pub_queries,{_id:@state.query_item._id}
		fpriqi = _.findIndex priv_queries,{_id:@state.query_item._id}
		if fpubqi >= 0
			pub_queries.splice(fpubqi,1)
		if fpriqi >= 0
			priv_queries.splice(fpriqi,1)


		query_item = await @props.saveQuery @state.schema.name,@state.query_item
		log query_item

		if query_item.is_public
			if fpubqi >= 0
				pub_queries.splice(fpubqi,0,query_item)
			else
				pub_queries.unshift(query_item)
		
		else
			if fpriqi >= 0
				priv_queries.splice(fpriqi,0,query_item)
			else
				priv_queries.unshift(query_item)

		@setState
			query_item: query_item
		
		@saveLocalState()
		




	deleteQuery: ()=>
		# if @state.query_item.is_public
		f_i = _.findIndex @state.public_schema_queries[@state.schema.name],_id:@state.query_item._id
		if f_i >= 0
			@state.public_schema_queries[@state.schema.name].splice(f_i,1)
		else
			f_i = _.findIndex @state.private_schema_queries[@state.schema.name],_id:@state.query_item._id
			if f_i >= 0
				@state.private_schema_queries[@state.schema.name].splice(f_i,1)


		if f_i >= 0
			@state.schema_queries[@state.schema.name].splice(f_i,1)

		
		@props.deleteQuery(@props.schema.name,@state.query_item)
		@state.query_item = @cloneQuery()
		@saveLocalState()
		@setState({})




	getKeywordQueryObject: (keyword,query_item)=>
		keyword_parts = keyword.split(' ').map (part)->
			"\b"+part
		q_obj = {}
		q_obj[query_item.search_key]  = "//#{keyword_parts.join('|')}//ig"
		return q_obj




	editQuery: (edits)=>
		qi = @state.query_item

		if qi.label && @props.user_id != qi.user_id
			console.warn('cant edit query thats not yours')
			return false



		if edits.type
			if edits.type == 'json'
				qi.type = 'json'
				if qi.keyword_input && !qi.json_input
					qi.json_input = JSON.stringify(@getKeywordQueryObject(qi.keyword_input,qi),0,2)
					qi.keyword_input = undefined
			else
				qi.type = 'key'
				qi.keyword_input = qi.keyword_input || ''

		Object.assign qi,edits

		qi.user_id = @props.user_id
			
		@setState({})


	mapSchemaQueries: (schema_name)->
		priv_books = @state.private_schema_queries[schema_name]
		pub_books = @state.public_schema_queries[schema_name]

		@state.mapped_queries_v = Date.now()
		queries = @state.schema_queries[schema_name]
		

		for query_item,i in queries	
			f_q = _.find(priv_books,{_id:query_item._id})
			if f_q && f_q._v != query_item._v
				@resetQuerySaveState(query_item)
			else
				f_q = _.find(pub_books,{_id:query_item._id})
				if f_q && f_q._v != query_item._v
					@resetQuerySaveState(query_item)
	
	setQueryStyle: (query_item)=>
		if query_item.color
			color = new Color(query_item.color)
			@state.query_style_map[query_item._id] = generateStyle
				step_count: 6
				primary: color.isDark() && 'white' || 'black'
				primary_inv: color.hex()
				secondary: 'black' 
				secondary_inv: 'white' 


	setSchemaQueryStyles: (schema_name)->
		@state.query_style_map = {}
		priv_books = @state.private_schema_queries[schema_name]
		pub_books = @state.public_schema_queries[schema_name]
		priv_books?.map(@setQueryStyle)
		pub_books?.map(@setQueryStyle)
			






	getSchemaState: ()=>
		schema_name = @state.schema.name
		schema_state = await @props.getSchemaState(schema_name)

		if @state.schema.name != schema_name
			@log 'getSchemaState (reload - interrupted)'
			return false
		
		Object.assign @state.schema_states[schema_name],schema_state
		
		@setState({})


	saveSchemaState: ()=>
		@props.saveSchemaState(@state.schema.name,@state.schema_states[@state.schema.name])
		@setState({})






	clearQueryInput: =>
		@state.query_item.json_input = undefined
		@state.query_item.keyword_input = undefined
		@setState({})



	onScrollTop: (scroll_top)=>

		
		if !@state.schema_state_scrolls[@state.schema.name]
			@state.schema_state_scrolls[@state.schema.name] = scroll_top
			@saveLocalState()
		else if Math.abs(@state.query_item.scroll_top - scroll_top) > 200
			@state.schema_state_scrolls[@state.schema.name] = scroll_top
			@saveLocalState()
		else
			@state.schema_state_scrolls[@state.schema.name] = scroll_top



	selectDataItem: (item)=>
		
		@state.query_item.selected_data_item_id = item._id
		
		@props.selectDataItem(item._id)
		@saveLocalState()
		@saveSchemaState()


	selectNextDataItem: (skip)=>
		skip = skip || 1
		data = @state.data.get(@state.query_item._id)
		if @props.data_item_id
			i = _.findIndex data,_id:@props.data_item_id
			if data.length > 0
				n_i = Math.min(data.length-1,i+skip)
				@selectDataItem(data[n_i])
		else
			if data.length
				@selectDataItem(data[0])


	selectPrevDataItem: (skip)=>
		skip = skip || 1
		data = @state.data.get(@state.query_item._id)
		if @props.data_item_id
			i = _.findIndex data,_id:@props.data_item_id
			if data.length > 0
				n_i = Math.max(0,i-skip)
				@selectDataItem(data[n_i])
		else
			if data.length
				@selectDataItem(data[0])








	setQueryItemRunError: (query_item,error)=>

		query_item.error = error.message
		query_item.completed_at = Date.now()
		@setState
			query_item_run_error_visible: yes
			query_item_run_error:
				error: error
				query_item: query_item
		@props.onError?(error)

	mapDataItems: =>
		state_data_item_found = false
		if !@state.data_item then return
		data = @state.data.get(@state.query_item._id)
		for item in data
			if item._id == @state.data_item._id
				state_data_item_found = true
				break
		if state_data_item_found && @state.show_json_view
			@state.get_data_item = true
		else if !state_data_item_found
			@state.data_item = null






	runStaticMethod: (method)=>
	
	
		@setState
			action_query:
				data_item_id: '~'
				data_item_label: @state.schema.name
				action: method.name
				called_at: Date.now()
		
		if method.run
			await method.run(@state.schema,method)
		else
			await @props.runStaticMethod(@state.schema,method)

		@state.action_query.completed_at = Date.now()
		@runQuery()
		



	runDataItemMethod: (method,callback)=>
		
		@setState
			action_query:
				data_item_id: @state.data_item._id
				data_item_label: @state.data_item._label	
				action: method.name
				called_at: Date.now()
		
		if method.run
			res = await method.run(@state.schema,@state.data_item,method)
		else
			res = await @props.runDataItemMethod(@state.schema,@state.data_item,method)
		
		@state.action_query.completed_at = Date.now()
		@setState
			data_item: Object.assign {},res.data_item
		@runQuery()
		callback?(res)

	


	renderDataItemMethod: (method,get_method_res_callback,method_res)=>
		method_exec = @runDataItemMethod.bind(@,method,get_method_res_callback)
		return method.render(@state.schema,@state.data_item,method_exec,method_res)

	renderStaticMethod: (method,get_method_res_callback,method_res)=>
		method_exec = @runStaticMethod.bind(@,method,get_method_res_callback)
		return method.render(@state.schema,method_exec,method_res)



	setActionMethodError: (data_item,error)=>
		await @setState
			action_query: {}
			query_item_run_error_visible: false
			action_error:
				data_item: data_item
				error: error
		@props.onError?(error,data_item)

		return false
	
	setActionStaticError: (error)=>
		await @setState
			action_query: {}
			query_item_run_error_visible: false
			action_error: 
				error: error

		@props.onError?(error)
			


	updateDataItem: ()=>
	
		if !@state.action_query.completed_at && @state.action_query.called_at || !@state.editor_patches.length
			return
		
		if @state.editor_value_id != @state.data_item._id
			return

		@setState
			action_query:
				data_item_id: @state.data_item._id
				data_item_label: @state.data_item._label
				body: @state.editor_patches
				action: 'update'
				called_at: Date.now()



		@props.updateDataItem(@state.editor_value_id,@state.editor_patches).then (doc)=>
			@state.editor_value_id = null
			@state.action_query.completed_at = Date.now()
			if @state.data_item._id == doc._id
				@setState
					data_item: doc
			@runQuery()
		.catch @setActionMethodError.bind(@,@state.data_item)





	getDataItem: ()=>
	
		if !@state.action_query?.completed_at && @state.action_query?.called_at
			return
		
		@setState
			action_query:
				body: {}
				data_item_id: @state.data_item_id
				data_item_label: @state.data_item?._label || @state.data_item_id
				called_at: Date.now()
				action: 'get'

		
		@props.getDataItem(@props.schema.name,@state.data_item_id).then (doc)=>
			@state.action_query.completed_at = Date.now()
			@state.editor_value_id = null
			if @state.data_item_id == doc._id
				@setState
					data_item: doc
					data_item_id: doc._id

		
		.catch @setActionMethodError.bind(@,@state.data_item)



	hideJsonView: =>
		@setState
			show_json_view: false

	showJSONView: ()=>
		@setState 
			show_json_view: yes	

	closeJSONView: =>
		@setState
			show_json_view: no

	setBookmarkQueryItem: (query_item)=>
		@setState
			show_bookmarks_view: no
		@setQueryItem query_item



	onEditorValueChange: (val)=>
		try
			new_data_item = JSON.parse(val)
			patches = rfc6902.createPatch(@state.data_item,new_data_item)
			if patches.length > 6
				editor_error = 'patch count > 6, reduce updates for safety'

			@setState
				editor_patches: patches
				editor_value: val
				editor_error: editor_error || null
		catch err
			@setState
				editor_value: val
				editor_error: err.message


	
	baseRef: (slide)=>
		@base = slide?._outer || undefined
		if @base
			@setState
				is_visible:yes
		else
			@setState
				is_visible:no



	matchQueryByLabelPart: (label)=>
		public_queries = @state.public_schema_queries[@state.schema.name]
		private_queries = @state.private_schema_queries[@state.schema.name]
		for q in public_queries
			if q.label && q.label.indexOf(label) >= 0
				return q

		for q in private_queries
			if q.label && q.label.indexOf(label) >= 0
				return q

		return null



	setFirstSearchQuery: (search_first_query)=>
		if @state.search_first_query != search_first_query
			@setState
				search_first_query: search_first_query


	selectFirstSearchQuery: =>
		return @selectQuery(@state.search_first_query)


	showQuerySaverHoverBox: (bind_el)=>
		# @setState
		# 	show_query_saver_view: yes

		@setHoverBox
			visible: yes
			show_delay: 0
			hide_delay: 0
			flat: yes
			renderContent: (offset_left,offset_top)=>
				h QuerySaverView,
					key: @state.query_item._id
					offset_left: offset_left
					offset_top: offset_top
					deleteQuery: @deleteQuery
					clearQueryInput: @clearQueryInput
					editQuery: @editQuery
					cloneQuery: @cloneQuery
					cloneQueryAndSet: @cloneQueryAndSet
					cleanQuery: @clearQuery
					saveQuery: @saveQuery
					runQuery: @runQuery
					matchQueryByLabelPart: @matchQueryByLabelPart
					query_item: @state.query_item
					keys_array: @state.schema.keys_array
					keys: @state.schema.keys
					schema: @state.schema
					renderHoverBox: @props.renderHoverBox
					closeHoverBox:  @closeHoverBox
			getSize: ()->
				return
					width: 600
					height: 300
			getBindElement: ()=>
				return bind_el	

	showQueryBuilderHoverBox: (bind_el)=>
		# @setState
		# 	show_query_builder_view: yes

		@setHoverBox
			visible: yes
			show_delay: 0
			hide_delay: 0
			flat: yes
			renderContent: (offset_left,offset_top)=>
				h QueryBuilderView,
					key: @state.query_item._id
					offset_left: offset_left
					offset_top: offset_top
					deleteQuery: @deleteQuery
					clearQueryInput: @clearQueryInput
					editQuery: @editQuery
					cloneQuery: @cloneQuery
					cloneQueryAndSet: @cloneQueryAndSet
					cleanQuery: @clearQuery
					saveQuery: @saveQuery
					runQuery: @runQuery
					matchQueryByLabelPart: @matchQueryByLabelPart
					query_item: @state.query_item
					keys_array: @state.schema.keys_array
					keys: @state.schema.keys
					schema: @state.schema
					renderHoverBox: @props.renderHoverBox
					closeHoverBox:  @closeHoverBox
			getSize: ()->
				return
					width: 600
					height: 500
			getBindElement: ()=>
				return bind_el



	setHoverBox: ({visible,flat,getBindElement,renderContent,getSize,show_delay,hide_delay})=>
		@state.hoverbox.visible = visible
		@state.hoverbox.getBindElement = getBindElement
		@state.hoverbox.renderContent = renderContent
		@state.hoverbox.getSize = getSize
		@state.hoverbox.show_delay = show_delay
		@state.hoverbox.hide_delay = hide_delay
		@state.hoverbox.flat = flat
		@setState({})



	onSearchInputLabel: (val)=>
		if @_tabs_view
			@_tabs_view?.setState
				search_label: val



	render: ->
	
		if !@state.query_item
			@log 'query item missing, skip render'
			return false
		
		if @_pc != @context.primary.color[0]
			@_pc = @context.primary.color[0]
			@_pc_is_dark = !Color(@_pc).isDark()
			@_pc_opaque = Color(@_pc).alpha(0.8).rgb().string()


		@g_props.scroll_to_index = @state.scroll_to_index
		@g_props.bounding_box = @base?.getBoundingClientRect()
		@g_props.data = @state.data.get(@state.query_item._id) || []
		@g_props.scroll_top = @state.scroll_top
		@g_props.query_map = @state.query_map
		@g_props.query_item = @state.query_item
		@g_props.data_item = @state.data_item
		@g_props.show_title = @props.show_title
		@g_props.show_static_methods = @props.show_static_methods
		@g_props.data_item_id = @props.data_item_id
		@g_props.new_doc = @state.new_doc
		@g_props.mapped_queries_v = @state.mapped_queries_v
		@g_props.queries = @state.schema_queries[@state.schema.name]
		@g_props.query_index = @state.schema_queries_indices[@state.schema.name]
		@g_props.action_query = @state.action_query
		@g_props.schema = @state.schema
		@g_props.row_height = @state.schema.row_height || 30
		@g_props.scroll_query_beta_offset = @props.scroll_query_beta_offset
		@g_props.show_json_view = @state.show_json_view
		@g_props.methods = @props.methods
		@g_props.filter = @props.filter
		@g_props.schema_state = @state.schema_states[@state.schema.name]

		@g_props.public_queries = @state.public_schema_queries[@state.schema.name]
		@g_props.private_queries = @state.private_schema_queries[@state.schema.name]
		@g_props._pc_is_dark = @_pc_is_dark
		@g_props.query_style_map = @state.query_style_map




		style = {}
		style.visiblity = @state.is_visible && 'visible' || 'hidden'
		
		
		style.height = '100%'
		style.width = '100%'


		hover_box = h Style,
			primary:'#2c2e30'
			primary_inv: '#fff'
			secondary: '#fff'
			secondary_inv: '#386277'
			h HoverBox,
				visible: @state.hoverbox.visible
				hide_delay: @state.hoverbox.hide_delay
				show_delay: @state.hoverbox.show_delay
				visible_delay: no
				onClose: @state.hoverbox.onClose
				onClickOverlay: @state.hoverbox.onClickOverlay || @state.hoverbox.onClose
				box_pointer_events: @state.hoverbox.pointer_events
				offset_y: 0
				snap_x: 1
				align_x: 1
				align_y: -1
				snap_y: -1
				offset_x: 0
				flat: @state.hoverbox.flat
				background: @context.primary.inv[0]
				renderContent: @state.hoverbox.renderContent
				getBindElement: @state.hoverbox.getBindElement
				getSize: @state.hoverbox.getSize



		h Slide,
			ref: @baseRef
			slide: yes
			beta: @props.beta
			style: Object.assign style,@props.style
			className: cn css['model-grid'],'scrollbar'
			pos: !@state.show_json_view && 1 || 0
			vert: no
			outerChildren: hover_box
			
			h Slide,
				className: css['react-json-wrap']
				style:
					background: @context.primary.inv[1]
				beta: 50
				vert: yes
				h Bar,
					big: yes
					h Input,
						style:
							width: '50%'
							whiteSpace: 'nowrap'
						type: 'label'
						btn_type: 'primary'
						disabled: !@state.editor_error
						i: @state.editor_error && 'error' || 'check'
						label: @state.editor_error || 'ok'
					h Input,
						type: 'button'
						i : 'save'
						btn_type: 'primary'
						style:
							maxWidth: 'fit-content'
						label: String(@state.editor_patches.length).padEnd(2)
						disabled: !@state.editor_patches.length || @state.editor_error?
						onClick: @updateDataItem
						@state.editor_patches.length > 0 && h AlertDot
					h Input,
						type: 'button'
						i : 'refresh'
						onClick: @getDataItem
					h Input,
						type: 'button'
						i : 'close'
						onClick: @closeJSONView
				
				h Slide,
					className: cn css['react-json-container'],@_pc_is_dark && css['dark'] || css['light']
					@state.show_json_view && @state.data_item && h CodeEditor,
						value: @state.editor_value || '{}'
						onValueChange: @onEditorValueChange
						highlight: (code)->
							return highlight(code,languages.json)
						padding: 13
						style:
							fontFamily: 'monor, monospace'
							height: 'fit-content'
							fontSize: 13
				
				h Slide,
					dim: DIM2
					vert: yes
					scroll: yes
					style:
						background: @context.primary.inv.darker[4]
					@state.editor_patches.map (patch,i)=>
						h JsonView,
							key: 'patch-'+i
							style:
								width: '100%'
								background: i%2 != 0 && @context.primary.inv[2]
								padding: 13
							json: patch
							trim: yes
							colors:
								key: @context.primary.color[1]
								number: 'orange'
								string: @context.primary.true
								boolean: @context.primary.false

			
			h Slide,
				vert: yes
				style:
					transform: 'translate(0)'
				beta: @state.show_json_view && 50 || 100
				h TabsView,
					selectQuery: @selectQuery
					setFirstSearchQuery: @setFirstSearchQuery
					query_item: @state.query_item
					public_queries: @g_props.public_queries
					private_queries: @g_props.private_queries
					query_style_map: @g_props.query_style_map
					ref: (el)=>
						@_tabs_view = el 
				h GridView,@g_props
				h Style,
					primary:'#2c2e30'
					primary_inv: '#fff'
					secondary: '#fff'
					secondary_inv: '#386277'
					h SearchView,@g_props
					



ModelGrid.contextType = StyleContext

ModelGrid.defaultProps = 
	show_bar: yes
	query_limit: 100
	max_save_local_query_count: 15
	scroll_query_beta_offset: 2




module.exports = ModelGrid