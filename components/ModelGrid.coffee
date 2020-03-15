# Color = require 'color'
{createElement,Component} = require 'react'
global.h = createElement
global.Component = Component
Slide = require 're-slide'
Color = require 'color'
css = require './ModelGrid.less'
cn = require 'classnames'
{Input,MenuTab,Menu,Bar,Overlay,AlertOverlay,StyleContext,AlertDot,HoverBox,Style} = require 're-lui'
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
# BookmarksView = require './BookmarksView.coffee'
GridView = require './GridView.coffee'
# CalendarView = require './CalendarView.coffee'

QueryBuilderView = require './QueryBuilderView'







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


			hoverbox:
				visible: no
				pointer_events: yes
				onClose: ()=>
					@state.hoverbox.visible = false
					@setState({})
					@runQuery()

		@fillSchemaState()

		# log @state
		
		@g_props = 
			selectDataItem: @selectDataItem
			updateDataItem: @updateDataItem
			deleteDataItem: @deleteDataItem
			createDataItem: @createDataItem
			showJSONView: @showJSONView
			# setQueryItem: @setQueryItem
			# updateQueryItemAndSet: @updateQueryItemAndSet
			# updateQueryItemTypeAndSet: @updateQueryItemTypeAndSet
			# updateQueryItem: @updateQueryItem
			# cloneQueryItemAndSet: @cloneQueryItemAndSet
			# cloneQueryItem: @cloneQueryItem
			runQuery: @runQuery
			selectQuery: @selectQuery
			# runDataItemMethod: @runDataItemMethod
			# runStaticMethod: @runStaticMethod
			updateSelectedDocument: @updateSelectedDocument
			renderDataItemMethod: @renderDataItemMethod
			# setBookmarkQueryItem: @setBookmarkQueryItem
			selectNextDataItem: @selectNextDataItem
			selectPrevDataItem: @selectPrevDataItem
			showQueryBuilderHoverBox: @showQueryBuilderHoverBox
			onScrollTop: @onScrollTop

			saveSchemaState: @saveSchemaState
			
			navPrevQuery: @navPrevQuery
			navNextQuery: @navNextQuery


	log: =>
		console.log('%c [modelgrid]','color:yellow',arguments[0]||'',arguments[1]||'',arguments[2]||'',arguments[3]||'',arguments[4]||'',arguments[5]||'')


			

	loadLocalState: ()->
		m_state = JSON.parse(localStorage.getItem('re-moodelgrid-local-state')||'{}')
		Object.assign @state,m_state


	saveLocalState: ()->
		@log 'saving local state'
		save_str = JSON.stringify
			schema_queries: @state.schema_queries
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
		@runQuery()




	# componentWillUpdate: (props,state)=>
		# state.data_item = props.data_item
		# if !props.data_item_id
		# 	state.data_item = null

	
		
		# if state.schema_state_id != state.schema_state_id
		# 	state.schema_state_id = state.schema_state_id
		# 	Object.assign state,@getDefaultConfig(props)
		# 	Object.assign state,state.schema_state

		# 	# log 'NEW ID'
		# 	# if state.data_item
		# 	# 	@props.onSelectDataItem?(state.data_item)

		# 	# log 'RUN QUERY ONCE'
		# 	state.run_query_once = true

		# if props.query_state_id != @props.query_state_id
		# 	state.run_query_once = true

			

		
		# if !state.data_item
		# 	state.show_json_view = false
		
		# if state.query_item != @state.query_item
		# 	state.show_json_view = false



		# if state.data_item
		# 	if state.data_item._id != state.editor_value_id
		# 		if state.data_item
		# 			state.editor_value = JSON.stringify(state.data_item,null,4)
		# 			state.editor_patches = []
		# 		else
		# 			state.editor_value = "{}"
		# 			state.editor_patches = []

		# 		state.editor_value_id = state.data_item._id
		# else
		# 	state.editor_value = '{}'
		# 	state.editor_patches = []


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


		
		if !@state.schema_queries[@state.schema.name].length
			@state.query_item = @createNewQuery(@state.schema)
		else
			@state.query_item = @state.schema_queries[@state.schema.name][query_index]


		@state.scroll_top = @state.query_item.scroll_top



	navNextQuery: =>
		current_query_index = @state.schema_queries_indices[@state.schema.name]
		if !current_query_index?
			return false
		if @state.schema_queries[@state.schema.name][current_query_index+1]?
			@state.schema_queries_indices[@state.schema.name]+=1
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
			@state.query_item = @state.schema_queries[@state.schema.name]?[current_query_index-1]
			@setState({})
			@runQuery()
			@saveLocalState()



	resetQuery: (qi)->
		qi.called_at = undefined
		qi.call_count = 0
		qi.skip = 0
		qi.limit = @props.query_limit || 100



	selectQuery: (query_item)=>
		if @state.query_item._id == query_item._id
			return false
		@resetQuery(query_item)
		@clearQueryIndex()
		@state.query_item = query_item
		@runQuery()





	clearQueryIndex: ->
		@state.schema_queries_indices[@state.schema.name] = Math.max(@state.schema_queries[@state.schema.name].length-1,0)




	getSchemaPublicQueries: ()->
		schema_name = @state.schema.name
		public_queries = await @props.getSchemaPublicQueries(schema_name,@props.user_id)
		@state.public_schema_queries[schema_name] = public_queries || []
		@log 'getSchemaPublicQueries',public_queries
		@setState({})




	getSchemaPrivateQueries: ()->
		schema_name = @state.schema.name
		private_queries = await @props.getSchemaPrivateQueries(schema_name,@props.user_id)
		@state.private_schema_queries[schema_name] = private_queries || []
		@log 'getSchemaPrivateQueries',private_queries
		@setState({})

	pushQuery: (qi)->
		schema_queries = @state.schema_queries[@state.schema.name]
		schema_queries.push qi
		@state.schema_queries_indices[@state.schema.name] = schema_queries.length-1
		if schema_queries.length > @props.max_save_local_query_count
			@state.schema_queries[@state.schema.name] = schema_queries.slice(Math.max(schema_query.length-@props.max_save_local_query_count,0),schema_queries.length-1)
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
		# log 'RUN QUERY',@state.query_item._id
		@cleanQuery()

		qi = @state.query_item

		if qi.error
			return

		# if run_next
		# 	@state.scroll_to_index = -1
		


		qi.called_at = Date.now()
		qi.completed_at = null
		qi.call_count = @state.query_item.call_count || 0
		qi.call_count += 1

		# if run_all
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
		
		@props.runQuery(q_i).then (data)=>
			# log 'QUERY RAN'

			if q_i._id != @state.query_item._id
				console.warn 'previously ran query does not match current state query'
				return false
				# return @setQueryItemRunError(q_i,new Error('previously ran query does not match current state query '+q_i._id+' != '+@state.query_item._id))
			
			current_data = @state.data.get(@state.query_item._id) || []
			if !run_next
				current_data = []
				# @log 'scroll top SET'
				@state.scroll_top = q_i.scroll_top || undefined
			else
				
				
			# log @state.query_item._id,current_data.concat(data)
			@state.data.set(@state.query_item._id,current_data.concat(data))

			@state.query_item.completed_at = Date.now()
			if data.length < @state.query_item.limit
				@state.query_item.end_reached = true
			

			@mapDataItems()

			# log current_data.length
			# if !run_next
			# 	@setScrollIndex()
			
			# log @state.scroll_to_index
			
			@forceUpdate()
		.catch @setQueryItemRunError.bind(@,qi)

		@saveLocalState()
		@setState({})



	cloneQuery: =>
		@log 'clone query'
		cloned_query = _.cloneDeep(@state.query_item)
		cloned_query._id = Date.now().toString(24)
		cloned_query.label = undefined
		@resetQuery(cloned_query)
		@setState
			query_item: cloned_query

	
	clearQuery: =>
		@log 'clear query'
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
			called_at: null
			json_input: null
			keyword_input: null

		@log 'create new query',query
		return query




	setNewQuery: ()->
		query_item = @createNewQuery(@state.schema)
		@setState
			query_item: query_item




	saveQuery: ()=>
		log "SAVE QUERY",@state.query_item.is_public
		if @state.query_item.is_public
			@state.public_schema_queries[@state.schema.name].push @state.query_item
		else
			@state.private_schema_queries[@state.schema.name].push @state.query_item

		@props.saveQuery @state.schema.name,@state.query_item




	deleteQuery: ()=>
		if @state.query_item.is_public
			f_i = _.findIndex @state.public_schema_queries[@state.schema.name],_id:@state.query_item._id
			if f_i >= 0
				@state.public_schema_queries[@state.schema.name].splice(f_i,1)
		else
			f_i = _.findIndex @state.private_schema_queries[@state.schema.name],_id:@state.query_item._id
			if f_i >= 0
				@state.private_schema_queries[@state.schema.name].splice(f_i,1)


		f_i = _.findIndex @state.schema_queries[@state.schema.name],_id:@state.query_item._id
		# log f_i
		if f_i >= 0
			@state.schema_queries[@state.schema.name].splice(f_i,1)

		
		@props.deleteQuery(@props.schema.name,@state.query_item)
		@cloneQuery()
		@saveLocalState()
		@setState({})




	editQuery: (edits)=>
		qi = @state.query_item

		if !qi.label && qi.called_at
			@cloneQuery()
		

		if edits.type
			if edits.type == 'json'
				qi.type = 'json'
				if qi.keyword_input && !qi.json_input
					qi.json_input = JSON.stringify(@getKeywordQueryObject(qi.keyword_input,query_item),0,2)
					qi.keyword_input = undefined
			else
				qi.type = 'key'
				qi.keyword_input = qi.keyword_input || ''

		Object.assign qi,edits


		if edits.label
			qi.user_id = @props.user_id
			@saveQuery()

		@setState({})







	getSchemaState: ()=>
		schema_name = @state.schema.name
		schema_state = await @props.getSchemaState(schema_name)

		if @state.schema.name != schema_name
			@log 'getSchemaState (reload - interrupted)'
			return false
		# log 'GOT SCHEMA STATE'
		Object.assign @state.schema_states[schema_name],schema_state
		@setState({})


	saveSchemaState: ()=>
		@props.saveSchemaState(@state.schema.name,@state.schema_states[@state.schema.name])
		@setState({})







	getKeywordQueryObject: (keyword,query_item)=>
		keyword_parts = keyword.split(' ').map (part)->
			"\b"+part
		
		q_obj = {}
		q_obj[query_item.key]  = "//#{keyword_parts.join('|')}//ig"
		
		return q_obj


	clearQueryInput: =>
		@state.query_item.json_input = undefined
		@state.query_item.keyword_input = undefined
		@setState({})





	# findBookmarkByLabel: (bookmark_label)=>
	# 	return _.find(@props.bookmarks,bookmark_label:bookmark_label)



	# matchBookmarks: (label)=>
	# 	matched_queries = @props.bookmarks.filter (q)->
	# 		if q.bookmark_label.indexOf(label) >= 0
	# 			return true
	


	onScrollTop: (scroll_top)=>
		# log scroll_top
		if !@state.query_item.scroll_top
			@state.query_item.scroll_top = scroll_top
			@saveLocalState()
		else if Math.abs(@state.query_item.scroll_top - scroll_top) > 200
			# log Math.abs(@state.query_item.scroll_top - scroll_top)
			@state.query_item.scroll_top = scroll_top
			@saveLocalState()




	selectDataItem: (item)=>
		# log scroll_top
		@state.query_item.selected_data_item_id = item._id
		# @state.query_item.scroll_top = scroll_top
		@props.selectDataItem(item._id)
		@saveLocalState()
		@saveSchemaState()


	selectNextDataItem: (skip)=>
		skip = skip || 1
		data = @state.data.get(@state.query_item._id)
		if @state.data_item
			i = _.findIndex data,_id:@state.data_item._id
			if data.length > 0
				n_i = Math.min(data.length-1,i+skip)
				@selectDataItem(data[n_i])
		else
			if data.length
				@selectDataItem(data[0])


	selectPrevDataItem: (skip)=>
		skip = skip || 1
		data = @state.data.get(@state.query_item._id)
		if @state.data_item
			i = _.findIndex data,_id:@state.data_item._id
			if data.length > 0
				n_i = Math.max(0,i-skip)
				@selectDataItem(data[n_i])
		else
			if data.length
				@selectDataItem(data[0])





	# resetQueryItemLabel: (query_item)->
		
	# 	keys = Object.keys(query_item.value)
	# 	query_item.label = undefined
	# 	is_key = true
	# 	for key in keys
	# 		if key != query_item.key #&& filter_keys.indexOf(key) == -1
	# 			is_key = false
	# 			break
		

	# 	if is_key	
	# 		query_item.type = 'key'
	# 		query_item.input_value = query_item.input_value
	# 	else
	# 		query_item.type = 'json'
	# 		query_item.input_value = JSON.stringify(query_item.value)





	
	# saveQueryItemLabel: (bookmark_label,is_public,query_item)->
	# 	query_item.bookmark_label = bookmark_label
	# 	query_item.is_public = is_public || false
	# 	@props.saveQueryItemLabel(Object.assign({},query_item))

	# updateQueryItemAndSet: (schema,query_item)=>
	# 	@updateQueryItem(schema,query_item)
	# 	@setQueryItem(query_item)








	# setQueryItemFilter: (query_item)->
	# 	if @props.filter
	# 		query_item.filter_value = @props.filter(@state.schema,query_item)




		# @setQueryItem(query_item)





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
		# log 'RUN STATIC METHOD',method
	
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
		# log get_method_res_callback
		method_exec = @runDataItemMethod.bind(@,method,get_method_res_callback)
		return method.render(@state.schema,@state.data_item,method_exec,method_res)

	renderStaticMethod: (method,get_method_res_callback,method_res)=>
		# log get_method_res_callback
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
			

	# clearActionQueryError: =>
	# 	@setState
	# 		action_query: {}
	# 		# action_error: null


	# createDataItem: =>
	# 	# @log 'create data item'
	# 	@setState
	# 		action_query:
	# 			data_item_id: JSON.stringify(@state.new_doc)
	# 			action: 'create'
	# 			called_at: Date.now()
	# 	@props.createDataItem(@state.new_doc).then (created_doc)=>
	# 		# @log 'created data_item',created_doc
	# 		@state.action_query.completed_at = Date.now()
	# 		@state.data_item = Object.assign {},created_doc
	# 		@runQuery()
	# 	.catch @setActionMethodError.bind(@,@state.new_doc)

	# deleteDataItem: =>
	# 	# @log 'delete data item'
	# 	@setState
	# 		action_query:
	# 			data_item_id: @state.data_item._id
	# 			data_item_label: @state.data_item._label
	# 			action: 'delete'
	# 			called_at: Date.now()

		
	# 	@props.deleteDataItem(@state.data_item._id).then (deleted_doc_id)=>
	# 		# @log 'deleted data_item',deleted_doc_id
	# 		@state.action_query.completed_at = Date.now()
	# 		if @state.data_item._id == deleted_doc_id
	# 			@setState
	# 				data_item: null
	# 		@runQuery()
	# 	.catch @setActionMethodError.bind(@,@state.data_item)

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
			# @log 'updated data_item',doc
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

		# log @state.data_item_id
		
		@props.getDataItem(@state.data_item_id).then (doc)=>
			# log doc
			@state.action_query.completed_at = Date.now()
			@state.editor_value_id = null
			if @state.data_item_id == doc._id
				@setState
					data_item: doc
					data_item_id: doc._id

		
		.catch @setActionMethodError.bind(@,@state.data_item)


	# componentWillUpdate: (props,state)->
	# 	# log state.schema_state
	# 	if @state.schema_state != state.schema_state && state.schema_state
	# 		Object.assign state,@state.schema_state
	# 		if state.schema_state.queries.length
	# 			state.query_item = state.schema_state.queries[state.schema_state.queries.length-1]


	# componentDidUpdate: (props,state)->
	# 	log 'ModelGrid componentDidUpdate'


	# 	@state.queries = @state.queries.slice(0,5)
	# 	save_state = Object.assign {},
	# 		key_col_widths: @state.key_col_widths
	# 		queries: @state.queries
	# 		bookmarks: @state.private_bookmarks
	# 		data_item_id: @state.data_item_id
	# 		show_json_view: @state.show_json_view
	# 		new_doc: @state.new_doc
		

	# 	@props.onSchemaStateUpdated?(save_state)

	# 	if @state.get_data_item || (@state.data_item && @state.show_json_view && ((@state.show_json_view != state.show_json_view) || @state.action_query.data_item_id != @state.data_item._id))
	# 		@state.get_data_item = false
	# 		@getDataItem()

	# 	split_vert = if (@base && @base.clientHeight > @base.clientWidth) then true else false
	# 	if split_vert != @state.split_vert
	# 		@setState
	# 			split_vert: split_vert

	# 	if @state.show_json_view != state.show_json_view
	# 		@forceUpdate()

	# 	if props.run_query_item != @props.run_query_item
	# 		# @log "RUN PROPS QUERY ITEM"
	# 		@cloneQueryItemAndSet(@props.run_query_item,@state.query_item,true)


	# 	if !@props.data_item_id && @state.data_item
	# 		@setState
	# 			data_item: null

		
	# 	if @state.schema_state_id != state.schema_state_id || @props.query_state_id != props.query_state_id 
	# 		@runQuery()

	# 	# if state.queries_updated_at != @state.queries_updated_at
	# 	# 	@mapQueryItems()


	# 	if (!@state.data_item || state.query_item != @state.query_item || !state.data_item ) && @state.show_json_view
	# 		@hideJsonView()



	# 	if @state.data_item
	# 		if @state.data_item._id != @state.editor_value_id
	# 			if @state.data_item
	# 				state.editor_value = JSON.stringify(@state.data_item,null,4)
	# 				state.editor_patches = []
	# 			else
	# 				state.editor_value = "{}"
	# 				state.editor_patches = []
	# 			@setState
	# 				editor_value_id: @state.data_item._id

	# 	else
	# 		if @state.editor_value != '{}' || @state.editor_patches.length
	# 			@setState
	# 				editor_value: '{}'
	# 				editor_patches: []



	hideJsonView: =>
		@setState
			show_json_view: false

	

	# componentDidMount: =>
	# 	Object.assign @state,@state.schema_state
	# 	for q in @state.queries
	# 		if q.called_at && !q.completed_at
	# 			q.called_at = q.completed_at = 0

	# 	log 'run query'
	# 	@runQuery()
		


	# setScrollIndex: (state)=>
	# 	state = state || @state
	# 	if state.query_item && state.data_item
	# 		state.scroll_to_index = -1
	# 		data = state.data.get(state.query_item._id)
	# 		if data
	# 			for data_item,i in data
	# 				if data_item._id == state.data_item._id
	# 					state.scroll_to_index = i
	# 					break




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
			# console.error err
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

	

	showQueryBuilderHoverBox: (bind_el)=>
		@setState
			show_query_builder_view: yes

		@setHoverBox
			visible: yes
			show_delay: 0
			hide_delay: 0
			flat: yes
			renderContent: =>
				h QueryBuilderView,
					deleteQuery: @deleteQuery
					clearQueryInput: @clearQueryInput
					editQuery: @editQuery
					cloneQuery: @cloneQuery
					cleanQuery: @clearQuery
					matchQueryByLabelPart: @matchQueryByLabelPart
					query_item: @state.query_item
					keys_array: @state.schema.keys_array
					keys: @state.schema.keys
					schema: @state.schema
					renderHoverBox: @props.renderHoverBox
			getSize: ()->
				return
					width: 600
					height: 560
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



	render: ->

		# if @state.query_item != @state.schema_queries[@state.schema.name][]
		if @state.scroll_top
			@log 'scroll top',@state.scroll_top
		

		# log @state.schema.name,@state.schema_states[@state.schema.name]

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
		# log @g_props.data
		@g_props.scroll_top = @state.scroll_top
		@g_props.query_map = @state.query_map
		@g_props.query_item = @state.query_item
		@g_props.data_item = @state.data_item
		@g_props.show_title = @props.show_title
		@g_props.show_static_methods = @props.show_static_methods
		@g_props.data_item_id = @props.data_item_id
		@g_props.new_doc = @state.new_doc
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
		# @g_props.setHoverBox = @props.setHoverBox
		# @g_props.renderHoverBox = @props.renderHoverBox
		@g_props._pc_is_dark = @_pc_is_dark

		# log @state.bookmarks


		style = {}
		style.visiblity = @state.is_visible && 'visible' || 'hidden'
		# style.transform = 'translate(0px)'
		
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
				align_x: -1
				align_y: 1
				snap_y: 0
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
				h SearchView,@g_props
				h GridView,@g_props
					



ModelGrid.contextType = StyleContext

ModelGrid.defaultProps = 
	show_bar: yes
	query_limit: 100
	max_save_local_query_count: 15
	scroll_query_beta_offset: 2




module.exports = ModelGrid