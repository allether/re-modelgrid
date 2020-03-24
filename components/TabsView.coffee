cn = require 'classnames'
css = require './ModelGrid.less'

class TabsView extends Component
	constructor: (props)->
		super(props)
		@state =
			rendered_labels_str: []

	renderTab: (qi)=>

		part_spans = []
		if @props.search_label
			search_parts = @props.search_label.split(' ')
			qi.label.split(' ').map (label_part)=>
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
			part_spans = [qi.label]

		if @props.query_item._id == qi._id
			btn_style = 
				background: @context.primary.true
				color: @context.primary.true_inv
				width: 260
		else
			btn_style = 
				background: @context.primary.inv[1]
				color: @context.primary.color[0]
				width: 260

			# btn_type = !qi.is_public && 'primary' || 'default'

		h 'div',
			className: 'lui-btn pad flex-down flex-start'
			key: qi._id
			style: btn_style
			onClick: @props.selectQuery.bind(null,qi)
			h 'span',
				className: cn 'mid-reg-fat',css['tab-title']
				style:
					borderColor: btn_style.color
				part_spans
			h 'span',
				className: 'small-mono'
				qi.bookmark_description



	filterAndCombineQueries: ->
		@state.rendered_labels_str = []
		arr = [].concat(@props.private_queries,@props.public_queries)
		if @props.search_label
			search_label_parts = @props.search_label.split(' ').map (part)->
				"\\b"+part
			
			match_regex = new RegExp("#{search_label_parts.join('|')}","ig")

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
		# @props.onRenderedSearchLabels(@state.rendered_labels_str)



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
					className: 'flex-right opaque'
					'no results for #'+@props.search_label
		
		


		h Slide,
			dim: DIM2*3
			vert: no
			scroll: yes
			className: 'scrollbar pad'
			query_tabs





TabsView.contextType = StyleContext
module.exports = TabsView