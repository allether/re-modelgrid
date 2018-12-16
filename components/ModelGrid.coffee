# Color = require 'color'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
css = require './ModelGrid.less'
{Input,MenuTab,Menu,Bar,Overlay,AlertOverlay} = require 'lerp-ui'


ReactJson = require 'react-json-view'
ReactJson = ReactJson.default


MenuView = require './MenuView.coffee'
GridView = require './GridView.coffee'


class ModelGrid extends Component
	constructor: (props)->
		super(props)
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
			updateSelectedDocument: @updateSelectedDocument



	getDefaultConfig: (props)=>
		
		queries: [] # array <query_item>
		queries_updated_at: 0
		query_map: {} # array <query_item>
		bookmarks: [] 	# array <query_item_id>
		data: {} # <query._id> : [<data_item>]
		query_item: @createQueryItem
			key: '_id'
			type: 'key'
		data_item_query:
			data_item_id: null
			called_at: 0
			completed_at: 0
	
		data_item: null
		
		new_doc: {}



	selectDataItem: (item)=>
		log 'select data item'
		@setState
			data_item: Object.assign {},item
		@props.onSelectDataItem?(@state.data_item)



	mapQueryItems: (props,state)=>
		state = state || @state
		props = props || @props
		state.query_map = {}
		state.bookmarks = []
		for q in state.queries
			if q.label
				state.bookmarks.push q
			state.query_map[q._id] = q
			if state.query_item?._id == q._id
				state.query_item = q
		state.bookmarks_updated_at = Date.now() 


	setQueryItem: (query_item,run_query_once)=>
		@setState
			run_query_once: run_query_once
			query_item: query_item


	resetQueryItemLabel: (query_item)->
		# log 'reset label'
		keys = Object.keys(query_item.value)
		query_item.label = undefined
		if @props.filter
			filter_keys = Object.keys(@props.filter.query_value)
		else
			filter_keys = []
		is_key = true
		for key in keys
			if key != query_item.key && filter_keys.indexOf(key) == -1
				is_key = false
				break
		

		if is_key	
			query_item.type = 'key'
			query_item.input_value = query_item.value[query_item.key]
		else
			query_item.type = 'json'
			query_item.input_value = JSON.stringify(query_item.value)


	setQueryItemLabel: (query_item,label)=>
		log 'set label'
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
		sort_keys: query_item?.sort_keys || {}
		layout_keys: query_item?.layout_keys || ['_id']
		key: query_item?.key || props.schema.keys_array[0]
		label: query_item?.label
		type: query_item?.type
		value: query_item?.value
		input_value: query_item?.input_value || ""
		call_count: 0
		_id: Date.now().toString(24)+Math.random(1337).toString(24).substring(2)

	
	decideQueryItemType: (query_item)->
		if query_item.input_value[0] == '{'
			query_item.type = 'json'
		else if query_item.input_value[0] == '#'
			query_item.type = 'bookmark'
		else
			query_item.type = 'key'
	
	
	syncQueryItemValue: (query_item)->
		if query_item.type == 'key'
			q_value = {}
			q_value[query_item.key || query_item.key] = query_item.input_value
			query_item.value = q_value
			if @props.filter
				Object.assign q_value,@props.filter.query_value
		else if query_item.type == 'json'
			try
				query_item.value = JSON.parse(query_item.input_value)
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


	cloneQueryItemAndSet: (schema,query_item,run_query_once)=>
		query_item = @cloneQueryItem(schema,query_item)
		@mapQueryItems()
		@setQueryItem(query_item,run_query_once)
	


	updateQueryItemAndSet: (schema,query_item)=>
		@updateQueryItem(schema,query_item)
		@mapQueryItems()
		@setQueryItem(query_item)
		

	cloneQueryItem: (schema,query_item)=>
		query_item = @createQueryItem(query_item)

		if query_item.label
			@resetQueryItemLabel(query_item)

		# log schema
		Object.assign query_item,schema


		@decideQueryItemType(query_item)
		
		# # find bookmark
		# found_query = @findQueryItemBookmark(query_item)
		# if found_query
		# 	return found_query
		
		# set value (check for errors etc)
		@syncQueryItemValue(query_item)

		return query_item
		


	updateQueryItem: (schema,query_item)=>
		# log 'update query_item',schema,query_item.label
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
				run_query_once: yes
		
		# set value (check for errors etc)
		@syncQueryItemValue(query_item)

		# if schema.label = false
		# 	@mapQueryItems()

		return query_item

	cleanQuery: =>
		if @state.query_item.type == 'key'
			if !@state.query_item.input_value
				@state.query_item.type = 'json'
				@state.query_item.value = {}
				@state.query_item.input_value = '{}'
		if @state.query_item.layout_keys.length == 0
			@state.query_item.layout_keys[0] = '_id'


	clearQueryItemRunError: =>
		@setState
			query_item_run_error: null
	
	setQueryItemRunError: (query_item,error)=>
		query_item.error = error.message
		query_item.completed_at = Date.now()
		@setState
			query_item_run_error:
				error: error
				query_item: query_item

	runQuery: =>
		@cleanQuery()


		@state.query_item.called_at = Date.now()
		@state.query_item.completed_at = null
		@state.query_item.call_count = @state.query_item.call_count || 0
		@state.query_item.call_count += 1


		h_i = @state.queries.indexOf(@state.query_item)
		if h_i > 0
			@state.queries.splice(h_i,1)
			@state.queries.unshift @state.query_item
			@state.queries_updated_at = Date.now()
		else if h_i < 0
			@state.queries.unshift @state.query_item
			@state.queries_updated_at = Date.now()


		q_i = @state.query_item
		
		if @props.filter
			Object.assign q_i.value, @props.filter.query_value

		# log q_i.value

		@props.runQuery(q_i).then (data)=>
			@state.data[q_i._id] = data
			q_i.completed_at = Date.now()
			log 'runQuery completed',q_i._id,(q_i.completed_at - q_i.called_at)+'ms','#'+data.length
			@forceUpdate()
		.catch @setQueryItemRunError.bind(@,q_i)
	


		@setState
			run_query_once: false



	runDataItemMethod: (data_item,method)->
		log 'run data_item method',data_item,method

	setDataItemActionError: (data_item,error)=>
		@setState
			data_item_action_error:
				data_item: data_item
				error: error

	clearDataItemActionError: =>
		@setState
			data_item_query: {}
			data_item_action_error: null


	createDataItem: =>
		log 'create data item'
		@setState
			data_item_query:
				data_item_id: JSON.stringify(@state.new_doc)
				action: 'create'
				called_at: Date.now()
		@props.createDataItem(@state.new_doc).then (created_doc)=>
			log 'created data_item',created_doc
			@state.data_item_query.completed_at = Date.now()
			@state.data_item = Object.assign {},created_doc
			@runQuery()
		.catch @setDataItemActionError.bind(@,@state.new_doc)

	deleteDataItem: =>
		log 'delete data item'
		@setState
			data_item_query:
				data_item_id: @state.data_item._id
				action: 'delete'
				called_at: Date.now()

		# data_item = @state.data_item
		@props.deleteDataItem(@state.data_item._id).then (deleted_doc_id)=>
			log 'deleted data_item',deleted_doc_id
			@state.data_item_query.completed_at = Date.now()
			if @state.data_item._id == deleted_doc_id
				@setState
					data_item: null
			@runQuery()
		.catch @setDataItemActionError.bind(@,@state.new_doc)

	updateDataItem: (update)=>
	
		if !@state.data_item_query.completed_at && @state.data_item_query.called_at
			return

		@setState
			data_item_query:
				data_item_id: @state.data_item._id
				body: update
				action: 'update'
				called_at: Date.now()

		@props.updateDataItem(@state.data_item._id,update).then (doc)=>
			log 'updated data_item',doc
			@state.data_item_query.completed_at = Date.now()
			if @state.data_item._id == doc._id
				@setState
					data_item: doc
			@runQuery()
		.catch @setDataItemActionError.bind(@,@state.new_doc)

	getDataItem: ()=>
		
		if !@state.data_item_query.completed_at && @state.data_item_query.called_at
			return
		
		@setState
			data_item_query:
				body: {}
				data_item_id: @state.data_item._id
				called_at: Date.now()
				action: 'get'
		
		@props.getDataItem(@state.data_item._id).then (doc)=>
			log 'got data_item',doc
			@state.data_item_query.completed_at = Date.now()
			if @state.data_item._id == doc._id
				@setState
					data_item: doc
			# @runQuery()
		.catch @setDataItemActionError.bind(@,@state.new_doc)



	componentWillMount: ->
		Object.assign @state,@props.schema_state
		@state.schema_state_id = @props.schema_state_id
		@mapQueryItems()
		for q in @state.queries
			if q.called_at && !q.completed_at
				q.called_at = q.completed_at = 0
		# log 'mount and run query'
		@runQuery()
		


	componentDidUpdate: (props,state)->
		save_state = Object.assign {},
			queries: @state.queries
			query_item: @state.query_item
			data_item: @state.data_item
			new_doc: @state.new_doc
		
		if @state.run_query_once
			@runQuery()

		@props.onSchemaStateUpdated?(save_state)

		if @state.data_item && @state.show_json_view && ((@state.show_json_view != state.show_json_view) || @state.data_item_query.data_item_id != @state.data_item._id)
			@getDataItem()

		

	componentWillUpdate: (props,state)=>
		
		if props.schema_state_id != state.schema_state_id
			state.schema_state_id = props.schema_state_id
			Object.assign state,@getDefaultConfig(props)
			Object.assign state,props.schema_state
			state.run_query_once = true

		if state.queries_updated_at != @state.queries_updated_at
			@mapQueryItems(props,state)

		if state.query_item != @state.query_item
			state.show_json_view = false
		# log state.data_item,state.show_json_view && state.data_item_query.data_item_id != state.data_item._id
	

	showJSONView: ()=>
		@setState 
			show_json_view: yes	
		# 
	
	closeJSONView: =>
		@setState show_json_view: no

	onJSONViewEdit: (opts)=>
		upd_obj = {}
		if opts.namespace.length
			upd_key = opts.namespace.join('.')+'.'+opts.name
		else
			upd_key = opts.name
		upd_obj[upd_key] = opts.new_value
		@updateDataItem upd_obj


	render: (props,state)->
		window.g = @
		
		@g_props.bounding_box = @base?.getBoundingClientRect()
		@g_props.data = state.data[state.query_item._id] || []
		@g_props.queries = state.queries
		@g_props.bookmarks = state.bookmarks
		@g_props.query_map = state.query_map
		@g_props.query_item = state.query_item
		@g_props.data_item = state.data_item
		@g_props.new_doc = state.new_doc
		@g_props.data_item_query = state.data_item_query
		@g_props.schema = props.schema
		@g_props.show_json_view = state.show_json_view
		@g_props.queries_updated_at = state.queries_updated_at
		@g_props.methods = props.methods
		@g_props.filter = props.filter
		

		if state.query_item_run_error
			overlay = h AlertOverlay,
				initial_visible: no
				alert_type: 'error'
				visible: yes
				backdrop_color: @context.__theme.primary.inv[2]
				message: state.query_item_run_error.error.message
				onClick: @clearQueryItemRunError
				style:
					display: 'flex'
					alignItems: 'center'
					justifyContent: 'center'
				h Input,
					label: 'errored query value'
					type: 'textarea'
					btn_type: 'flat'
					select: no
					hover: no
					# disabled: yes
					bar: yes
					is_valid: no
					value: JSON.stringify(state.query_item_run_error.query_item.value,4,4)
		else
			overlay = h AlertOverlay,
				initial_visible: no
				backdrop_color: @context.__theme.primary.inv[2]
				alert_type: 'error'
				visible: state.data_item_action_error? || !state.data_item_query.completed_at && state.data_item_query.called_at
				message: state.data_item_action_error?.error.message
				onClick: state.data_item_action_error && @clearDataItemActionError 
				# z_index: 9999
				style:
					display: 'flex'
					alignItems: 'center'
					justifyContent: 'center'
				h Input,
					type: 'label'
					label: [
						
						h 'span',{style:{fontWeight:600,color:@context.__theme.primary.color[0]}},state.data_item_query.action
						h 'span',{className: css['model-grid-slash']},'/'
						state.data_item_query.data_item_id
					]

		
		h Slide,
			slide:yes
			pos: !@state.show_json_view && 1 || 0
			vert: if (@base && @base.clientHeight > @base.clientWidth) then true else false
			outerStyle:
				transform: 'translate(0px)'
			outerChildren: overlay
			h Slide,
				beta: 50
				className: css['react-json-wrap']
				@state.show_json_view && @state.data_item && h ReactJson,
					iconStyle: 'circle'
					displayDataTypes: false
					enableClipboard: yes
					name: false
					collapseStringsAfterLength: 100
					onEdit:@onJSONViewEdit
					onAdd:@onAdd
					shouldCollapse:@shouldCollapse
					theme: 'eighties'
					src: state.data_item
				h 'div',
					className: css['json-close']
					h Input,
						type: 'button'
						btn_type: 'flat'
						i : 'refresh'
						onClick: @getDataItem
					h Input,
						type: 'button'
						btn_type: 'flat'
						i : 'close'
						onClick: @closeJSONView
			h Slide,
				vert: yes
				style:
					transform: 'translate(0px)'
				beta: @state.show_json_view && 50 || 100
				className: css['model-grid']
				h MenuView,@g_props
				h GridView,@g_props
			

			





module.exports = ModelGrid