Slide = require 're-slide'
{AlertDot,Input,MenuTab,Menu,Bar,SquareLoader,StyleContext} = require 're-lui'
css = require './ModelGrid.less'
cn = require 'classnames'


MAX_CHAR = 32

SEARCH_BAR_WIDTH = 400





class SearchView extends Component
	constructor: (props)->
		super(props)
		@state = 
			query_item: props.query_item.label && props.query_item
			search_value: (props.query_item.label && "#"+props.query_item.label) || props.query_item.keyword_input || ""
			autofill_label: null

	
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

		if @state.query_item
			return @props.runQuery()
		
		if @state.autofill_label == @props.query_item.label
			@setState
				query_item: @props.query_item
				search_value: (@props.query_item.label && "#"+@props.query_item.label) || @props.query_item.keyword_input || ""
				autofill_label: null
			@props.runQuery()
			return
		
		if @state.autofill_label
			@props.selectQueryByLabel(@state.autofill_label)
		
		else if @state.search_value[0] != '#'
			# log 'edit query item'
			@props.editQuery
				keyword_input: @state.search_value
			@props.runQuery()



	componentDidUpdate: (props)->
		if @props.query_item != props.query_item
			@setState
				query_item: @props.query_item.label && @props.query_item
				search_value: (@props.query_item.label && "#"+@props.query_item.label) || @props.query_item.keyword_input || ""




	setSearchValue: (e)=>
		@setState
			query_item: undefined
			search_value: e.target.value

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


	navPrevQuery: =>
		@props.navPrevQuery()

	navNextQuery: =>
		@props.navNextQuery()


	onRenderedSearchLabels: (labels)=>
		# log labels
		if !labels.length
			if @state.autofill_label
				@setState
					autofill_label: null
			return
		
		if @state.autofill_label != labels[0]
			@setState
				autofill_label: labels[0]


	render: ->

		# log @props.query_item.keyword_input

		props = @props
		state = @state
		qi = props.query_item
		query_item_is_loading = qi.called_at && !qi.completed_at
		
		if @state.query_item && @state.query_item.label
			bar_style = 
				background: @context.primary.true_inv

		if qi.error
			bar_style = 
				background: @context.secondary.false
		if query_item_is_loading
			bar_style = 
				background: qi.error && @context.secondary.false || @context.secondary.color[2]

	
		

		if @state.search_value[0] == '#'
			search_label = @state.search_value.substring(1)
			if @state.autofill_label
				autofill_label = '#'+@state.autofill_label




		search_input = h 'div',
			cn: 'flex-right'
			h Bar,
				btn: yes
				big: yes
				className: 'shadow'
				style:
					background: @context.primary.inv[0]
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
				className: 'shadow'
				h Input,
					onFocus: @onFocus
					ref: @searchRef
					type: 'text'
					btn_type: @state.query_item && 'true'
					input_props:
						autoComplete: 'false'
						spellCheck: 'false'
						autoCorrect: 'false'
						autoCapitalize: 'false'
					i: 'search'
					style: 
						width: SEARCH_BAR_WIDTH - 40 - 40
					value: @state.search_value
					overlay_input: autofill_label
					bar_style: bar_style
					onInput: @setSearchValue
					onEnter: @onSearchEnter
					bar: yes
					placeholder: 'keyword | #saved'
				h Input,
					type: 'button'
					btn_type: @state.query_item && 'true'
					i: 'menu_open'
					big: yes
					ref: (el)=>
						if el
							@_week_btn = el._outer
					onClick: @onShowLayoutHoverBox




		edit_doc_json_button = h Input,
			type: 'button'
			i: 'edit'
			className: 'shadow'
			btn_type: !@props.data_item_id && 'flat'
			big: yes
			disabled: !@props.data_item_id
		
		
		
		

		# query_tabs = h QueryTabs,
		# 	private_queries: @props.private_queries
		# 	public_queries: @props.public_queries
		# 	query_item: @props.query_item
		# 	search_label: !@state.query_item && search_label
		# 	selectQuery: @props.selectQuery
		# 	onRenderedSearchLabels: @onRenderedSearchLabels


		h 'div',
			className: 'overlay'
			h 'div',
				className: 'flex-right pad2 bot-center'
				style:
					paddingTop: 0
				search_input
			h 'div',
				className: 'pad2 bot-right'
				edit_doc_json_button


SearchView.contextType = StyleContext
module.exports = SearchView