# Color = require 'color'
{createElement,Component} = require 'react'
global.h = createElement
global.Component = Component
Slide = require 're-slide'
Color = require 'color'
css = require './ModelGrid.less'
cn = require 'classnames'
{Input,MenuTab,Menu,Bar,Overlay,AlertOverlay,StyleContext,AlertDot} = require 're-lui'
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
require 'prismjs/themes/prism-twilight.css'


global.DIM2 = 40
global.DIM = 30
MenuView = require './MenuView.coffee'
GridView = require './GridView.coffee'
# CalendarView = require './CalendarView.coffee'


class ModelGrid extends Component
	constructor: (props)->
		super(props)
		window._grid = @
		@state = @getDefaultConfig(props)
		@g_props = 
			selectDataItem: @selectDataItem
			updateDataItem: @updateDataItem
			deleteDataItem: @deleteDataItem
			createDataItem: @createDataItem
			showJSONView: @showJSONView
			setQueryItem: @setQueryItem
			updateQueryItemAndSet: @updateQueryItemAndSet
			updateQueryItem: @updateQueryItem
			cloneQueryItemAndSet: @cloneQueryItemAndSet
			cloneQueryItem: @cloneQueryItem
			runQuery: @runQuery
			runDataItemMethod: @runDataItemMethod
			runStaticMethod: @runStaticMethod
			updateSelectedDocument: @updateSelectedDocument
			renderDataItemMethod: @renderDataItemMethod
			showLayoutsView: @showLayoutsView
			hideRightView: @hideRightView
			showBookmarksView: @showBookmarksView
			onClearQuerySortKeys: @onClearQuerySortKeys
			setBookmarkQueryItem: @setBookmarkQueryItem
			selectNextDataItem: @selectNextDataItem
			selectPrevDataItem: @selectPrevDataItem

	log: =>
		console.log('%c [modelgrid]','color:yellow',arguments[0]||'',arguments[1]||'',arguments[2]||'',arguments[3]||'',arguments[4]||'',arguments[5]||'')



	onClearQuerySortKeys: =>
		@state.query_item.sort_keys = []
		@runQuery()


	getDefaultConfig: (props)=>
		
		queries: [] # array <query_item>
		query_map: new Map # map <query_item>

		data: new Map # <query._id> : [<data_item>]
		
		queries_updated_at: 0

		is_visible: false

		scroll_to_index: -1

		key_col_widths: {}
		
		bookmarks: [] 	# array <query_item_id>
	
		query_item: @createQueryItem
			key: props.schema.default_key || '_id'
			type: 'key'
		action_query:
			data_item_id: null
			called_at: 0
			completed_at: 0


		editor_patches: []
		editor_error: null
		editor_value: '{}'
	
		data_item: @props.data_item
		
		new_doc: {}




	selectDataItem: (item)=>
		# if !@state.data_item || @state.data_item._id != item._id
		@setState
			data_item: Object.assign {},item
		@props.onSelectDataItem(item)


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

	scrollRight: =>
		@



	mapQueryItems: ()=>
		@state.bookmarks = []
		for q in @state.queries
			if q.label
				@state.bookmarks.push q
			@state.query_map.set(q._id,q)
			if @state.query_item?._id == q._id
				@state.query_item = q
		@setState
			bookmarks_updated_at: Date.now() 


	setQueryItem: (query_item)=>
		query_item.skip = 0
		# log run_query_once
		@setState
			query_item: query_item


	resetQueryItemLabel: (query_item)->
		
		keys = Object.keys(query_item.value)
		query_item.label = undefined
		is_key = true
		for key in keys
			if key != query_item.key #&& filter_keys.indexOf(key) == -1
				is_key = false
				break
		

		if is_key	
			query_item.type = 'key'
			query_item.input_value = query_item.input_value
		else
			query_item.type = 'json'
			query_item.input_value = JSON.stringify(query_item.value)


	setQueryItemLabel: (query_item,label)=>
		if !label
			return
		for b in @state.bookmarks
			if b.label == label || b._id == @state.query_item._id
				return
		query_item.label = label
		query_item.type = 'bookmark'
		query_item.input_value = '#'+label
		query_item.saved_at = Date.now()
		

	createQueryItem: (query_item)->
		qi = 
			sort_keys: query_item?.sort_keys || []
			layout_keys: query_item?.layout_keys || [@props.schema.default_key || '_id']
			key: query_item?.key || props.schema.keys_array[0]
			label: query_item?.label
			min_date: query_item?.min_date || Date.now() - xDays(365*2)
			max_date: query_item?.max_date || Date.now() + xDays(365)
			skip: 0
			type: query_item?.type
			value: query_item?.value
			limit: @props.query_limit || 100
			input_value: query_item?.input_value || ""
			call_count: 0
			_id: Date.now().toString(24)
		
		
		if @props.schema.force_keys
			for key,i in @props.schema.force_keys
				if !qi.layout_keys[i] || qi.layout_keys[i] != key
					existing_index = qi.layout_keys.indexOf(key)
					if existing_index >= 0
						qi.layout_keys.splice(existing_index,1)
					qi.layout_keys.splice(i,0,key)
		# log qi.layout_keys,@props.schema.force_keys

		return qi


	
	decideQueryItemType: (query_item)->
		if query_item.input_value?[0] == '{'
			query_item.type = 'json'
		else if query_item.input_value?[0] == '#'
			query_item.type = 'bookmark'
		else
			query_item.type = 'key'
	
	
	syncQueryItem: (query_item)->
		

		if query_item.type == 'key'
			q_value = {}
			query_item.error = null
			q_value[query_item.key || query_item.key] = '//'+query_item.input_value+'//ig'
			query_item.value = q_value
		else if query_item.type == 'json'
			try
				obj = eval('('+query_item.input_value+')')
				query_item.value = obj
				query_item.error = null
			catch error
				query_item.error = error.message


	
	findQueryItemBookmark: (query_item)->
		if query_item.type != 'bookmark'
			return
		
		query_label = query_item.input_value.substring(1)
		# m_r = new RegExp(query_label,"ig")
		query_item.match_label = null
		query_item.match_label_part = null
		if query_label
			n_q = @state.bookmarks.find (b)->
				if !query_item.match_label
					if b.label.indexOf(query_label) >= 0
						query_item.match_label = b.label
						query_item.match_label_q = query_label

				if b.label == query_label
					return true
				return false
			if !n_q
				return null
			else
				return n_q
		else
			return null


	cloneQueryItemAndSet: (schema,query_item)=>

		# log run_query_once
		query_item = @cloneQueryItem(schema,query_item)

		@mapQueryItems()
		@setQueryItem(query_item)
	


	updateQueryItemAndSet: (schema,query_item)=>
		@updateQueryItem(schema,query_item)
		@mapQueryItems()
		@setQueryItem(query_item)



	cloneQueryItem: (schema,query_item)=>
		query_item = @createQueryItem(query_item)

		if query_item.label
			@resetQueryItemLabel(query_item)

		Object.assign query_item,schema


		@decideQueryItemType(query_item)
		
		# # find bookmark
		# found_query = @findQueryItemBookmark(query_item)
		# if found_query
		# 	return found_query
		
		# set value (check for errors etc)
		@syncQueryItem(query_item)

		return query_item


	setQueryItemFilter: (query_item)->
		if @props.filter
			query_item.filter_value = @props.filter(@props.schema,query_item)

	updateQueryItem: (schema,query_item)=>
		if !query_item.label && schema.label
			@setQueryItemLabel(query_item,schema.label)
			@mapQueryItems()
		else if query_item.label && schema.label == false
			@resetQueryItemLabel(query_item)
			@mapQueryItems()

		Object.assign query_item,schema

		# decide type
		@decideQueryItemType(query_item)
		
		# find bookmark
		found_query = @findQueryItemBookmark(query_item)
		if found_query
			return @setState
				query_item: found_query
				# run_query_once: no
		
		# set value (check for errors etc)
		@syncQueryItem(query_item)


		return query_item

	cleanQuery: =>
		if @state.query_item.type == 'key'
			if !@state.query_item.input_value
				@state.query_item.type = 'json'
				@state.query_item.value = {}
				@state.query_item.input_value = '{}'
		if @state.query_item.layout_keys.length == 0
			@state.query_item.layout_keys[0] = '_label'

		@state.query_item.hidden_layout_keys = []


		@state.query_item.layout_keys = @state.query_item.layout_keys.filter (key)=>
			@props.schema.keys[key]?

		@state.query_item.required_keys = @props.schema.required_keys

		# log @state.query_item
		# if @state.query_item.sort_keys
		# 	for key,val of @state.query_item.sort_keys
		# 		if @state.query_item.layout_keys.indexOf(key) < 0 
		# 			delete @state.query_item.sort_keys[key]

		

	
		@state.query_item.populate = []
		for key in @state.query_item.layout_keys
			@state.query_item.populate = @state.query_item.populate.concat @props.schema.keys[key].populate || []
			if @props.schema.keys[key].keys_array
				@state.query_item.hidden_layout_keys = @state.query_item.hidden_layout_keys.concat @props.schema.keys[key].keys_array

		

		@setQueryItemFilter(@state.query_item)


	# hideQueryItemRunError: =>
	# 	@setState
	# 		query_item_run_error_visible: false
	
	setQueryItemRunError: (query_item,error)=>

		query_item.error = error.message
		query_item.completed_at = Date.now()
		@props.onError?(error)

		@setState()
		# console.error error
		# @setState
		# 	query_item_run_error_visible: yes
		# 	query_item_run_error:
		# 		error: error
		# 		query_item: query_item

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



	runQuery: (run_next)=>
		@cleanQuery()

		if @state.query_item.error
			return

		if run_next
			@state.scroll_to_index = -1

		# log 'NEXT',run_next

		@state.query_item.called_at = Date.now()
		@state.query_item.completed_at = null
		@state.query_item.call_count = @state.query_item.call_count || 0
		@state.query_item.call_count += 1

		# if run_all
		

		
		if run_next == true
			@state.query_item.skip += @state.query_item.limit
			@state.query_item.limit = 100
		else
			@state.query_item.limit += @state.query_item.skip
			@state.query_item.skip = 0
			@state.query_item.end_reached = false


		h_i = -1
		q = @state.queries.find (q,i)=>
			if q._id == @state.query_item._id
				h_i = i
				return true
			return false

		if h_i > 0
			@state.data_item = null
			@state.queries.splice(h_i,1)
			@state.queries.unshift @state.query_item
			@state.queries_updated_at = Date.now()
		
		else if h_i < 0
			@state.data_item = null
			@state.queries.unshift @state.query_item
			@state.queries_updated_at = Date.now()



		s_q_i = @state.query_item
		q_i = Object.assign {},@state.query_item



		@state.query_item.error = undefined
		@props.runQuery(q_i).then (data)=>

			if q_i._id != @state.query_item._id
				return @setQueryItemRunError(q_i,new Error('previously ran query does not match current state query '+q_i._id+' != '+@state.query_item._id))
			current_data = @state.data.get(@state.query_item._id) || []
			if !run_next
				current_data = []
			@state.data.set(@state.query_item._id,current_data.concat(data))

			@state.query_item.completed_at = Date.now()
			if data.length < @state.query_item.limit
				@state.query_item.end_reached = true
			# @log 'runQuery completed',@state.query_item._id,(@state.query_item.completed_at - @state.query_item.called_at)+'ms','#'+data.length
			@mapDataItems()

			# log current_data.length
			if !run_next
				@setScrollIndex()
			
			# log @state.scroll_to_index
			
			@forceUpdate()
		.catch @setQueryItemRunError.bind(@,s_q_i)

		@setState({})
	



	runStaticMethod: (method)=>
		# log 'RUN STATIC METHOD',method
		try
			@setState
				action_query:
					data_item_id: '~'
					data_item_label: @props.schema.name
					action: method.name
					called_at: Date.now()
			
			if method.run
				prom = method.run(@props.schema,method)
			else
				prom = @props.runStaticMethod(@props.schema,method)
			
			if prom?.then
				prom.then (method_res)=>
					@state.action_query.completed_at = Date.now()
					@runQuery()
				.catch
			else
				@setState
					action_query: {}

		catch error
			@setActionStaticError(error)


	runDataItemMethod: (method,callback)=>
		try
			@setState
				action_query:
					data_item_id: @state.data_item._id
					data_item_label: @state.data_item._label	
					action: method.name
					called_at: Date.now()
			
			if method.run
				prom = method.run(@props.schema,@state.data_item,method)
			else
				prom = @props.runDataItemMethod(@props.schema,@state.data_item,method)
			
			if prom?.then
				prom.then (res)=>
					@state.action_query.completed_at = Date.now()
					@setState
						data_item: Object.assign {},res.data_item
					@runQuery()
					callback?(res)
				.catch @setActionMethodError.bind(@,@state.data_item)
			else
				@setState
					action_query: {}
		catch error
			@setActionMethodError(@state.data_item,error)



	renderDataItemMethod: (method,get_method_res_callback,method_res)=>
		# log get_method_res_callback
		method_exec = @runDataItemMethod.bind(@,method,get_method_res_callback)
		return method.render(@props.schema,@state.data_item,method_exec,method_res)

	renderStaticMethod: (method,get_method_res_callback,method_res)=>
		# log get_method_res_callback
		method_exec = @runStaticMethod.bind(@,method,get_method_res_callback)
		return method.render(@props.schema,method_exec,method_res)



	setActionMethodError: (data_item,error)=>
		@props.onError?(error,data_item)
		@setState
			action_query: {}
		# @setState
		# 	query_item_run_error_visible: false
			# action_error:
			# 	data_item: data_item
			# 	error: error

		# return false
	
	setActionStaticError: (error)=>
		# console.error error
		@props.onError?(error)
		@setState
			action_query: {}
		# @setState
		# 	query_item_run_error_visible: false
			# action_error: 
			# 	error: error
			

	# clearActionQueryError: =>
	# 	@setState
	# 		action_query: {}
	# 		# action_error: null


	createDataItem: =>
		# @log 'create data item'
		@setState
			action_query:
				data_item_id: JSON.stringify(@state.new_doc)
				action: 'create'
				called_at: Date.now()
		@props.createDataItem(@state.new_doc).then (created_doc)=>
			# @log 'created data_item',created_doc
			@state.action_query.completed_at = Date.now()
			@state.data_item = Object.assign {},created_doc
			@runQuery()
		.catch @setActionMethodError.bind(@,@state.new_doc)

	deleteDataItem: =>
		# @log 'delete data item'
		@setState
			action_query:
				data_item_id: @state.data_item._id
				data_item_label: @state.data_item._label
				action: 'delete'
				called_at: Date.now()

		
		@props.deleteDataItem(@state.data_item._id).then (deleted_doc_id)=>
			# @log 'deleted data_item',deleted_doc_id
			@state.action_query.completed_at = Date.now()
			if @state.data_item._id == deleted_doc_id
				@setState
					data_item: null
			@runQuery()
		.catch @setActionMethodError.bind(@,@state.data_item)

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
		# log @state.action_query

		if !@state.action_query.completed_at && @state.action_query.called_at
			return
		
		@setState
			action_query:
				body: {}
				data_item_id: @state.data_item._id
				data_item_label: @state.data_item._label
				called_at: Date.now()
				action: 'get'
		
		@props.getDataItem(@state.data_item._id).then (doc)=>
			# @log 'got data_item',doc
			@state.action_query.completed_at = Date.now()
			@state.editor_value_id = null
			if @state.data_item._id == doc._id
				@props.onSelectDataItem(doc)
				@setState
					data_item: doc
		
		.catch @setActionMethodError.bind(@,@state.data_item)




	componentDidUpdate: (props,state)->


		@state.scroll_to_index = -1
		@state.queries = @state.queries.slice(0,5)
		save_state = Object.assign {},
			key_col_widths: @state.key_col_widths
			queries: @state.queries
			query_item: @state.query_item
			data_item: @state.data_item
			show_json_view: @state.show_json_view
			new_doc: @state.new_doc
			bookmarks: @state.bookmarks
		
		

		@props.onSchemaStateUpdated?(save_state)

		if @state.get_data_item || (@state.data_item && @state.show_json_view && ((@state.show_json_view != state.show_json_view) || @state.action_query.data_item_id != @state.data_item._id))
			@state.get_data_item = false
			@getDataItem()

		split_vert = if (@base && @base.clientHeight > @base.clientWidth) then true else false
		if split_vert != @state.split_vert
			@setState
				split_vert: split_vert

		if @state.show_json_view != state.show_json_view
			@forceUpdate()

		if props.run_query_item != @props.run_query_item
			# @log "RUN PROPS QUERY ITEM"
			@cloneQueryItemAndSet(@props.run_query_item,@state.query_item,true)


		if !@props.data_item_id && @state.data_item
			@setState
				data_item: null

		
		if @props.schema_state_id != props.schema_state_id || @props.query_state_id != props.query_state_id 
			@runQuery()

		if state.queries_updated_at != @state.queries_updated_at
			@mapQueryItems()


		if (!@state.data_item || state.query_item != @state.query_item || !state.data_item ) && @state.show_json_view
			@hideJsonView()



		if @state.data_item
			if @state.data_item._id != @state.editor_value_id
				if @state.data_item
					state.editor_value = JSON.stringify(@state.data_item,null,4)
					state.editor_patches = []
				else
					state.editor_value = "{}"
					state.editor_patches = []
				@setState
					editor_value_id: @state.data_item._id

		else
			if @state.editor_value != '{}' || @state.editor_patches.length
				@setState
					editor_value: '{}'
					editor_patches: []



	hideJsonView: =>
		@setState
			show_json_view: false

	# getChildContext: ->
	# 	gridHeight: @base?.clientHeight - (@props.show_bar && DIM || 0)
	componentDidMount: =>
		Object.assign @state,@props.schema_state
		@mapQueryItems()
		for q in @state.queries
			if q.called_at && !q.completed_at
				q.called_at = q.completed_at = 0

		@runQuery()
		

	setScrollIndex: (state)=>
		state = state || @state
		if state.query_item && state.data_item
			

			state.scroll_to_index = -1
			data = state.data.get(state.query_item._id)


			if data
				for data_item,i in data
					if data_item._id == state.data_item._id
						state.scroll_to_index = i
						break


	# componentWillUpdate: (props,state)=>
		# state.data_item = props.data_item
		# if !props.data_item_id
		# 	state.data_item = null

	
		
		# if props.schema_state_id != state.schema_state_id
		# 	state.schema_state_id = props.schema_state_id
		# 	Object.assign state,@getDefaultConfig(props)
		# 	Object.assign state,props.schema_state

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



	showJSONView: ()=>
		@setState 
			show_json_view: yes	


	
	closeJSONView: =>
		@setState show_json_view: no

	setBookmarkQueryItem: (query_item)=>
		@setState
			show_bookmarks_view: no
		@setQueryItem query_item

	showBookmarksView: =>
		@setState
			show_bookmarks_view: yes
			show_layouts_view: no

	hideRightView: =>
		@runQuery()
		@setState
			show_bookmarks_view: no
			show_layouts_view: no



	showLayoutsView: =>
		@setState
			show_bookmarks_view: no
			show_layouts_view: yes




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
		

	render: ->
		window[@props.schema.name+'_grid'] = @

		
		if @_pc != @context.primary.color[0]
			@_pc = @context.primary.color[0]
			@_pc_is_dark = !Color(@_pc).isDark()
			@_pc_opaque = Color(@_pc).alpha(0.8).rgb().string()


		@g_props.scroll_to_index = @state.scroll_to_index
		@g_props.bounding_box = @base?.getBoundingClientRect()
		@g_props.data = @state.data.get(@state.query_item._id) || []
		@g_props.queries = @state.queries
		@g_props.bookmarks = @state.bookmarks
		@g_props.query_map = @state.query_map
		@g_props.query_item = @state.query_item
		@g_props.data_item = @state.data_item
		@g_props.data_item_id = @props.data_item_id
		@g_props.new_doc = @state.new_doc
		@g_props.action_query = @state.action_query
		@g_props.schema = @props.schema
		@g_props.row_height = @props.schema.row_height || 30
		@g_props.scroll_query_beta_offset = @props.scroll_query_beta_offset
		@g_props.show_json_view = @state.show_json_view
		@g_props.queries_updated_at = @state.queries_updated_at
		@g_props.methods = @props.methods
		@g_props.filter = @props.filter
		@g_props.show_layouts_view = @state.show_layouts_view
		@g_props.show_bookmarks_view = @state.show_bookmarks_view
		@g_props.key_col_widths = @state.key_col_widths

		# log @state.bookmarks


		style = {}
		style.visiblity = @state.is_visible && 'visible' || 'hidden'
		style.transform = 'translate(0px)'
		
		

		h Slide,
			ref: @baseRef
			slide: yes
			beta: @props.beta
			style: Object.assign style,@props.style
			className: css['model-grid']
			pos: !@state.show_json_view && 1 || 0
			vert: no
			
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
						background: @context.primary.inv[1]
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
				h MenuView,@g_props
				h Slide,
					beta: 100
					# h CalendarView,@g_props
					h GridView,@g_props



ModelGrid.contextType = StyleContext

ModelGrid.defaultProps = 
	show_bar: yes
	query_limit: 100
	scroll_query_beta_offset: 2




module.exports = ModelGrid