Color = require 'color'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
require 'normalize.css'
css = require './ModelGrid.less'
adler = require 'adler-32'

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
			showJSONView: @showJSONView
			setQueryItem: @setQueryItem
			updateQueryItemAndSet: @updateQueryItemAndSet
			updateQueryItem: @updateQueryItem
			cloneQueryItemAndSet: @cloneQueryItemAndSet
			cloneQueryItem: @cloneQueryItem
			runQuery: @runQuery

			updateSelectedDocument: @updateSelectedDocument
			
			
				

	getDefaultConfig: (props)=>
		
		queries: [] # array <query_item>
		query_map: {} # array <query_item>
		bookmarks: [] 	# array <query_item_id>
		data: {} # <query._id> : [<data_item>]
		query_item: @createQueryItem
			key: props.schema.keys_array[0]
			type: 'key'
	
		data_item: null
		
		new_doc: {}


	selectDataItem: (item)=>
		@setState
			data_item: Object.assign {},item


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

	# mapDataItems: (props,state)=>
	# 	state = state || @state
	# 	props = props || @props
	# 	if state.data_item && state.data[state.query_item._id]
	# 		for item in state.data[state.query_item._id]
	# 			if item._id == state.data_item._id
	# 				log 'mapDataItems: found & updated data_item'
	# 				state.data_item = Object.assign {},item
	# 				return


	setQueryItem: (query_item)=>
		@setState
			run_query_once: yes
			query_item: query_item


	resetQueryItemLabel: (query_item)->
		# log 'reset label'
		keys = Object.keys(query_item.value)
		query_item.label = undefined
		if keys.length == 1 && keys[0] == query_item.key
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
		sort_keys: query_item?.sort_keys || []
		layout_keys: query_item?.layout_keys || []
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


	cloneQueryItemAndSet: (schema,query_item)=>
		query_item = @cloneQueryItem(schema,query_item)
		@mapQueryItems()
		@setState
			query_item: query_item


	updateQueryItemAndSet: (schema,query_item)=>
		@updateQueryItem(schema,query_item)
		@mapQueryItems()
		@setState
			query_item: query_item

	# createOrUpdateQueryItem: (schema,query_item)=>




	cloneQueryItem: (schema,query_item)=>
		query_item = @createQueryItem(query_item)

		if query_item.label
			@resetQueryItemLabel(query_item)

		# log schema
		Object.assign query_item,schema


		# decide type
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
			log 'RESET'
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


	

	runQuery: =>
		@state.query_item.called_at = Date.now()
		@state.query_item.call_count = @state.query_item.call_count || 0
		@state.query_item.call_count += 1

		h_i = @state.queries.indexOf(@state.query_item)
		# b_i = @state.bookmarks.indexOf(@state.query_item)

		if h_i >= 0
			@state.queries.splice(h_i,1)
					
		@state.queries.unshift @state.query_item
		@state.query_map[@state.query_item_id] = @state.query_item

		q_i = Object.assign {},@state.query_item
		@props.runQuery(q_i).then (data)=>
			@state.data[q_i._id] = data
			q_i.completed_at = Date.now()
			log 'runQuery completed',q_i.completed_at - q_i.called_at,data.length
			# @mapDataItems()
			@forceUpdate()



		@setState
			run_query_once: false
			queries: @state.queries




	updateDataItem: (update)=>
		@props.updateDataItem(@state.data_item._id,update).then (doc)=>
			log 'updated data_item',doc
			@setState
				data_item: doc
			@runQuery()
		.catch @onUpdateDataItemError



	componentWillMount: ->
		Object.assign @state,@props.schema_state
		@state.schema_state_id = @props.schema_state_id
		@mapQueryItems()
		log 'mount and run query'
		@runQuery()
		


	componentDidUpdate: (props,state)->
		save_state = Object.assign {},
			queries: @state.queries
			query_item: @state.query_item
			data_item: @state.data_item
			new_doc: @state.new_doc
		
		if @state.run_query_once
			log 'new query item, run query'
			@runQuery()

		@props.onSchemaStateUpdated?(@props.schema,save_state)

		

	componentWillUpdate: (props,state)=>
		
		if props.schema_state_id != state.schema_state_id
			state.schema_state_id = props.schema_state_id
			Object.assign state,props.schema_state

		if state.queries.length != @_queries_ln
			@_queries_ln = state.queries.length
			@mapQueryItems(props,state)

		


	showJSONView: ()=>
		@setState show_json_view: yes	
	closeJSONView: =>
		@setState show_json_view: no


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
		@g_props.schema = props.schema


		h Slide,
			slide:yes
			pos: !@state.show_json_view && 1 || 0
			h Slide,
				beta: 50
				className: css['react-json-wrap']
				@state.data_item && h ReactJson,
					iconStyle: 'circle'
					displayDataTypes: false
					enableClipboard: yes
					name: false
					collapseStringsAfterLength: 100
					onEdit:@onEdit
					onAdd:@onAdd
					shouldCollapse:@shouldCollapse
					theme: 'eighties'
					src: @state.data_item
				h Input,
					type: 'button'
					i : 'close'
					onClick: @closeJSONView
					className: css['json-close']
			h Slide,
				vert: yes
				style:
					transform: 'translate(0px)'
				beta: @state.show_json_view && 50 || 100
				className: css['model-grid']
				h MenuView,@g_props
				h GridView,@g_props
			





module.exports = ModelGrid