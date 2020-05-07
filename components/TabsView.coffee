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


	
	renderTab: (qi,index)=>
		if !@_first_query
			@_first_query = qi

		part_spans = []

		cstyle = @props.query_style_map[qi._id] || @context

		if !@state.search_label && qi._id == @props.query_item?._id && index != -1
			return h 'div',
				className: 'lui-btn '+css['tab-btn']+' center'
				key: qi._id+'-selected'
				style: 
					background: @context.primary.inv[1]
					color: @context.primary.inv[3]
					width: 260
					cursor: 'default'
				onMouseEnter: =>
					@setState
						hover_tab: qi._id
				onMouseLeave: =>
					@setState(hover_tab:undefined)
				h 'i',
					className: 'material-icons'
					style:
						fontSize: 32
					'visibility'


		if @state.search_label
			f_i = qi.label.indexOf(@state.search_label)
			if f_i >= 0
				if f_i > 0
					part_spans.push h 'span',
						key: 'pre'
						className: 'pre'
						qi.label.substr(0,f_i)
				part_spans.push h 'span',
					key: 'found'
					className: 'pre'
					style:
						color: 'black'
						background: 'yellow'
					qi.label.substr(f_i,@state.search_label.length)
				if f_i+@state.search_label.length < qi.label.length
					part_spans.push h 'span',
						key: 'post'
						className: 'pre'
						qi.label.substr(f_i+@state.search_label.length)

		else
			part_spans = [qi.label]




		








		if qi.color
			i_color = cstyle.primary.inv[3]
			i_color2 = cstyle.primary.inv[2]
			color_dot = h 'div',
				className: 'pad bot-left'
				h 'div',
					className: 'circle'
					style:
						background: cstyle.primary.inv[0]
						# border: "2px solid "+cstyle.primary.color[0]
		else
			i_color = cstyle.primary.color[3]
			i_color2 = cstyle.primary.inv[3]

		if @props.query_item._id == qi._id && qi._v == @props.query_item._v
			if qi.color
				btn_style = 
					background: @state.hover_tab == qi._id && cstyle.primary.inv[1] || cstyle.primary.inv[0]
					color: cstyle.primary.color[0]
					color2: cstyle.primary.inv[3]
					width: 260
					cursor: 'pointer'
			else
				btn_style = 
					background: @context.primary.color[0]
					color: @context.primary.inv[0]
					color2: @context.primary.inv[3]
					width: 260
					cursor: 'pointer'

		else
			btn_style = 
				background: @state.hover_tab == qi._id && @context.primary.inv[2] || @context.primary.inv[1]
				color: @context.primary.color[0]
				color2: @context.primary.color[3]
				width: 260
				cursor: 'pointer'

		qi_user = face.state.user_map.get(qi.user_id)
		if qi_user
			qi_user_label = qi_user.first_name[0]+qi_user.last_name[0]



		h 'div',
			className: 'lui-btn flex-down flex-start '+css['tab-btn']
			key: qi._id
			style: btn_style
			onMouseEnter: =>
				@setState
					hover_tab: qi._id
			onMouseLeave: =>
				@setState(hover_tab:undefined)

			onClick: @selectQuery.bind(@,qi)
			qi.icon && (h 'div',
				className: 'bot-right pad'
				h 'span',
					className: 'material-icons'
					style:
						color: i_color2
						fontSize: '40px'
					qi.icon
			)
			h 'span',
				className: cn 'mid-mono-fat',css['tab-title']
				style:
					borderColor: cstyle.primary.inv[3]
				part_spans
			h 'span',
				className: 'small-reg'
				style:
					whiteSpace: 'normal'
				qi.description
			
			qi.is_public && (h 'div',
				className: 'top-right pad flex-right'
				# h 'span',
				# 	className: 'reg-mono margin-right'
				# 	style:
				# 		color: btn_style.color2
				# 	qi_user_label
				h 'span',
					className: 'material-icons'
					style:
						# color: i_color
						fontSize: '16px'
					'public'
			) || null

			color_dot

	renderSeperator: =>
		h 'div',
			key: 'sep'
			height: '100%'
			className: 'center'
			h 'div',
				className: 'vert-bar'
				style:
					background: @context.primary.inv[2]
					margin: DIM/2
					height: DIM*.75
					marginRight: DIM2/2-10


	filterAndCombineQueries: ->
		arr = [].concat(@props.private_queries,@props.public_queries)
		
	
		@_first_query = null
		arr = arr.filter (qi,i)=>
			if !@state.search_label
				# if qi._id == @props.query_item?._id
				# 	return {_SELECT:qi}
				return true
			else if qi.label.indexOf(@state.search_label) >= 0
				return true
			return false

			
		.map @renderTab
		
		if @props.query_item?.updated_at && !@state.search_label
			arr.unshift @renderSeperator()
			arr.unshift(@renderTab(@props.query_item,-1))


		return arr


	componentDidUpdate: (props)->
		if props.query_item != @props.query_item
			@setState
				search_label: null
			@_list?.scrollLeft = 0
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
							'add'

			else
				query_tabs = h 'div',
					className: 'flex-right pad2'
					'no results for /'+@state.search_label
		
		
		h Slide,
			dim: DIM2*3
			vert: no
			scroll: yes
			className: 'slim-scrollbar'
			ref: (el)=>
				@_list = el?._outer
			query_tabs





TabsView.contextType = StyleContext
module.exports = TabsView