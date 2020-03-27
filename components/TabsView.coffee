cn = require 'classnames'
css = require './ModelGrid.less'

class TabsView extends Component
	constructor: (props)->
		super(props)
		@state =
			rendered_labels_str: []

	selectQuery: (qi)=>
		@props.selectQuery(qi)
		@setState
			search_label: null


	
	renderTab: (qi)=>
		if !@_first_query
			@_first_query = qi

		part_spans = []
		if @state.search_label
			search_parts = @state.search_label.split(' ')
			qi.label.split(' ').map (label_part,i)=>
				for search_part in search_parts
					f_i = label_part.indexOf(search_part)
					if f_i >= 0
						found_part = search_part
						break

				if f_i >= 0
					part_spans.push label_part.substring(0,f_i)
					part_spans.push h 'span',
						key: found_part
						style:
							color: 'black'
							background: 'yellow'
						found_part
					part_spans.push label_part.substring(f_i+found_part.length,label_part.length)
				else
					part_spans.push h 'span',
						key: label_part
						className: 'pre'
						(i!=0 && ' ' ||'')+label_part+' '
		else
			part_spans = [qi.label]



		if @props.query_item._id == qi._id && qi._v == @props.query_item._v
			i_color = @context.primary.inv[3]
			btn_style = 
				background: @context.primary.color[0]
				color: @context.primary.inv[0]
				width: 260
				cursor: 'default'
		else
			i_color = @context.primary.color[3]
			btn_style = 
				background: @state.hover_tab == qi._id && @context.primary.inv[2] || @context.primary.inv[1]
				color: @context.primary.color[0]
				width: 260
				cursor: 'pointer'
		# if !part_spans && @state.search_label


		h 'div',
			className: 'lui-btn pad flex-down flex-start '+css['tab-btn']
			key: qi._id
			style: btn_style
			onMouseEnter: =>
				@setState
					hover_tab: qi._id
			onMouseLeave: =>
				@setState(hover_tab:undefined)

			onClick: @selectQuery.bind(@,qi)
			h 'span',
				className: cn 'mid-reg-fat',css['tab-title']
				style:
					borderColor: btn_style.color
				part_spans
			h 'span',
				className: 'small-mono'
				qi.description
			qi.is_public && (h 'span',
				className: 'material-icons top-right pad'
				style:
					color: i_color
					fontSize: '16px'
				'public'
			) || null




	filterAndCombineQueries: ->
		@state.rendered_labels_str = []
		arr = [].concat(@props.private_queries,@props.public_queries)
		if @state.search_label
			search_label_parts = @state.search_label.split(' ').map (part)->
				"\\b"+part
			
			match_regex = new RegExp("#{search_label_parts.join('|')}","ig")

			@_first_query = null
			return arr.filter (qi,i)=>
				
				test = match_regex.test(qi.label)
				# log test
				if test
					@state.rendered_labels_str.push qi.label
				return test

				
			.map @renderTab
		else
			arr.map @renderTab

	componentDidUpdate: ->
		# log @state.rendered_labels_str
		

	componentDidUpdate: (props)->
		if props.query_item != @props.query_item
			@setState
				search_label: null
		@props.setFirstSearchQuery(@_first_query)

	render: ->
		query_tabs = @filterAndCombineQueries()

		if !query_tabs.length
			if !@props.private_queries.length && !@props.public_queries.length
				query_tabs = h 'div',
					className: 'center full-w'
					h Input,
						big: yes
						style:
							height: DIM*2
						type:'label'
						label: 'no bookmarks, create with'
						h 'i',
							className: 'material-icons'
							style:
								paddingLeft: PAD
							'menu_open'
					# h Input,
					# 	i: 'menu_open'
					# 	type: 'label'
					# 	btn_type: 'flat'
			else
				query_tabs = h 'div',
					className: 'flex-right pad2'
					'no results for #'+@state.search_label
		
		


		h Slide,
			dim: DIM2*3
			vert: no
			scroll: yes
			className: 'scrollbar pad'
			query_tabs





TabsView.contextType = StyleContext
module.exports = TabsView