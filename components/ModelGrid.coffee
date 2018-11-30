Color = require 'color'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
require 'normalize.css'
css = require './ModelGrid.less'



MenuView = require './MenuView.coffee'
GridView = require './GridView.coffee'



class ModelGrid extends Component
	constructor: (props)->
		super(props)
		@state = @getDefaultConfig(props)
		@g_props = 
			
			selectDocumentById: @selectDocumentById
			
			setQueryItem: @setQueryItem
			updateQueryItemAndSet: @updateQueryItemAndSet
			updateQueryItem: @updateQueryItem
			cloneQueryItemAndSet: @cloneQueryItemAndSet
			cloneQueryItem: @cloneQueryItem
			searchQueryItem: @searchQueryItem
			
			
				

	getDefaultConfig: (props)=>
		
		
		
		queries: [] # array <query_item>
		query_map: {} # array <query_item>

		bookmarks: [] 	# array <query_item_id>

		query_item: @createQueryItem
			key: props.opts.keys_array[0]
			type: 'key'
	
		selected_doc_id: 1
		
		new_doc: {}


	selectDocumentById: (doc_id)=>
		@setState
			selected_doc_id: doc_id


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

	
	setQueryItem: (query_item)=>
		@setState
			query_item: query_item


	resetQueryItemLabel: (query_item)->
		log 'reset label'
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
		key: query_item?.key || props.opts.keys_array[0]
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


	cloneQueryItemAndSet: (opts,query_item)=>
		log 'clone and set'
		query_item = @cloneQueryItem(opts,query_item)
		@mapQueryItems()
		@setState
			query_item: query_item


	updateQueryItemAndSet: (opts,query_item)=>
		@updateQueryItem(opts,query_item)
		@mapQueryItems()
		@setState
			query_item: query_item

	# createOrUpdateQueryItem: (opts,query_item)=>




	cloneQueryItem: (opts,query_item)=>
		# log opts.label,query_item
		query_item = @createQueryItem(query_item)

		if query_item.label
			@resetQueryItemLabel(query_item)
		Object.assign query_item,opts



		# decide type
		@decideQueryItemType(query_item)
		
		# # find bookmark
		# found_query = @findQueryItemBookmark(query_item)
		# if found_query
		# 	return found_query
		
		# set value (check for errors etc)
		@syncQueryItemValue(query_item)

		return query_item
		


	updateQueryItem: (opts,query_item)=>
		# log 'update query_item',opts,query_item.label
		if !query_item.label && opts.label
			@setQueryItemLabel(query_item,opts.label)
			@mapQueryItems()
		else if query_item.label && opts.label == false
			log 'RESET'
			@resetQueryItemLabel(query_item)
			@mapQueryItems()

		Object.assign query_item,opts

		# decide type
		@decideQueryItemType(query_item)
		
		# find bookmark
		found_query = @findQueryItemBookmark(query_item)
		if found_query
			return @setState
				query_item: found_query
		
		# set value (check for errors etc)
		@syncQueryItemValue(query_item)

		# if opts.label = false
		# 	@mapQueryItems()


		return query_item


	

	searchQueryItem: =>

		

		@state.query_item.called_at = Date.now()
		@state.query_item.call_count = @state.query_item.call_count || 0
		@state.query_item.call_count += 1

		h_i = @state.queries.indexOf(@state.query_item)
		# b_i = @state.bookmarks.indexOf(@state.query_item)

		if h_i >= 0
			@state.queries.splice(h_i,1)
					
		@state.queries.unshift @state.query_item
		@state.query_map[@state.query_item_id] = @state.query_item

		@setState
			queries: @state.queries


	componentWillMount: ->
		Object.assign @state,@getDefaultConfig(@props),@props.getState(@props.opts)
		@mapQueryItems()

	componentDidUpdate: ->
		save_state = Object.assign {},@state
		save_state.query_map = undefined
		save_state.bookmarks = undefined
		@props.setState(@props.opts,save_state)

	componentWillUpdate: (props,state)=>
		if props.opts.name != @props.opts.name
			Object.assign state,@getDefaultConfig(props),props.getState(props.opts)

		if state.queries.length != @_queries_ln
			@_queries_ln = state.queries.length
			@mapQueryItems(props,state)
			
			# @state.query_map
			

	render: (props,state)->
		
		@g_props.cfg = Object.assign {},@state
		@g_props.opts = props.opts
		@g_props.data = props.data
		@g_props.bounding_box = @base?.getBoundingClientRect()
		window.cfg = @state
		h Slide,
			vert: yes
			className: css['model-grid']
			h MenuView,@g_props
			h GridView,@g_props




module.exports = ModelGrid