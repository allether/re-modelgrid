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
			search_v: 0
			search_value: (props.query_item?.updated_at && '/'+props.query_item.label) || props.query_item?.keyword_input || ""

		
	onFocus: =>
		setTimeout ()=>
			@_search.select()
			@_search.focus()

		,0

		if @state.run_query_interval
			@toggleQueryInterval()


	onSearchEnter: =>
		if @state.search_value[0] == '/' && @state.search_v
			if !@props.selectFirstSearchQuery()
				@setState
					search_value:'/'+@props.query_item.label
		
		else
			if @props.query_item
				if @props.query_item.called_at
					await @props.cloneQueryAndSet
						keyword_input: @state.search_value
				else 
					await @props.editQuery
						keyword_input: @state.search_value
				@props.runQuery()


	UNSAFE_componentWillUpdate:(props,state)->
		if @props.query_item != props.query_item || @props.mapped_queries_v != props.mapped_queries_v
			if props.query_item.updated_at
				state.search_value  = '/'+props.query_item.label
			else
				state.search_value = props.query_item.keyword_input || ""



	setSearchValue: (e)=>
		@setState
			query_item: undefined
			search_v: @state.search_v+1
			search_value: e.target.value
		if e.target.value?[0] == '/'
			@props.onSearchInputLabel(e.target.value && e.target.value.substring(1) || "")



	searchRef: (el)=>
		if !el
			return
		@_search = el._input




	toggleQueryInterval: =>	
		if @state.run_query_interval
			clearInterval @state.run_query_interval
			return @setState
				run_query_interval: undefined
		else
			q_i = setInterval @props.runQuery,3000
			return @setState
				run_query_interval: q_i


	onShowLayoutHoverBox: (e)=>
		@props.showQueryBuilderHoverBox(@_layout_btn)

	onShowSaveHoverBox: (e)=>
		@props.showQuerySaverHoverBox(@_save_btn)



	render: ->
		props = @props
		state = @state
		qi = props.query_item
		query_item_is_loading = qi.called_at && !qi.completed_at
		

		if qi.error
			bar_style = 
				background: @context.secondary.false
		
		if query_item_is_loading
			bar_style = 
				background: qi.error && @context.secondary.false || @context.secondary.color[2]

		if @state.search_value[0] == '/'
			if @state.autofill_label
				autofill_label = '/'+@state.autofill_label


		search_input = h Bar,
			big: yes
			btn: yes
			className: 'shadow '+css['search-input']
			h Input,
				onFocus: @onFocus
				ref: @searchRef
				type: 'text'
				input_props:
					autoComplete: 'false'
					spellCheck: 'false'
					autoCorrect: 'false'
					autoCapitalize: 'false'
					onKeyDown: (e)=>
						if e.nativeEvent.code == "Escape"
							@_search.blur()
						else if e.nativeEvent.code == "Enter"
							@onSearchEnter()
				i: 'search'

				style: 
					width: SEARCH_BAR_WIDTH - 40 - 40
				value: @state.search_value
				overlay_input: autofill_label
				bar_style: bar_style
				onInput: @setSearchValue
				# onEnter: @onSearchEnter
				bar: yes
				placeholder: 'keyword | /bookmark'
			




		edit_doc_json_button = h Input,
			type: 'button'
			i: 'edit'
			className: 'shadow'
			btn_type: !@props.data_item_id && 'flat'
			big: yes
			disabled: yes
		
		

		h 'div',
			className: 'overlay'
			h 'div',
				cn: 'flex-right pad bot-left'
				style:
					# bottom: '12px'
					paddingTop: 0
				h Bar,
					btn: yes
					big: yes
					h Input,
						type: 'button'
						onClick: @onShowLayoutHoverBox
						btn_type: @props.query_item.updated_at && 'true'
						i: 'view_week'
						big: yes
						ref: (el)=>
							if el
								@_layout_btn = el._outer
					h Input,
						type: 'button'
						onClick: @onShowSaveHoverBox
						btn_type: @props.query_item.updated_at && 'true'
						i: @props.query_item.updated_at && 'bookmark' || 'add'
						big: yes
						ref: (el)=>
							if el
								@_save_btn = el._outer
					
			h 'div',
				className: 'flex-right pad bot-center'
				style:
					paddingTop: 0
					# bottom: '12px'
				h Input,
					type: 'button'
					i: 'keyboard_arrow_left'
					disabled: @props.query_index == 0
					onClick: @props.navPrevQuery
				search_input
				h Input,
					type: 'button'
					disabled: @props.query_index == @props.queries.length-1
					i: 'keyboard_arrow_right'
					onClick: @props.navNextQuery
			h 'div',
				className: 'pad bot-right'
				# style:
					# bottom: '12px'
				edit_doc_json_button


SearchView.contextType = StyleContext
module.exports = SearchView