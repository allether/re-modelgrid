css = require './ModelGrid.less'
cn = require 'classnames'

class QuerySaverView extends Component
	constructor: (props)->
		super(props)
		@state = 
			save_bookmark_public: @props.query_item.is_public
			bookmark_description: @props.query_item.description
			bookmark_label: @props.query_item.label
			bookmark_color: @props.query_item.color
			bookmark_icon: @props.query_item.icon
			edit_v: 0

	onBookmarkDecriptionInput: (e)=>
		v = e.target.value
		@setState
			edit_v: @state.edit_v+1
			bookmark_description:v
			


	onBookmarkLabelInput: (e)=>
		v = e.target.value
		bookmark_exists = @props.matchQueryByLabelPart(v)?
		@setState
			bookmark_label:v
			edit_v: @state.edit_v+1
			bookmark_label_invalid: if (bookmark_exists || v.length) < 4 then yes else if (!bookmark_exists && v.length >= 4) then no else undefined


	toggleSavePublic: =>
		@setState
			edit_v: @state.edit_v+1
			save_bookmark_public: !@state.save_bookmark_public

	onDelete: =>
		@props.deleteQuery()
		@props.closeHoverBox()
	
	# componentDidUpdate: (props,state)->
	# 	if @props.query_item != props.query_item
	# 		@setState
	# 			edit_v: 0
	# 			save_bookmark_public: @props.query_item.is_public
	# 			bookmark_description: @props.query_item.description
	# 			bookmark_label: @props.query_item.label
	# 			bookmark_color: @props.query_item.color

	onSaveQuery: =>
		if !@state.bookmark_label || !@state.bookmark_description
			return false
		
		@props.editQuery
			label: @state.bookmark_label
			description: @state.bookmark_description
			color: @state.bookmark_color
			icon: @state.bookmark_icon
			is_public: @state.save_bookmark_public
		@props.saveQuery()
		# if @props.query_item.updated_at
		@props.closeHoverBox()
		# @props.runQuery()

	onSetColor: (e)=>
		# log 'SET COLOR',e.target.value
		@setState
			edit_v: @state.edit_v+1
			bookmark_color: e.target.value

	render: ->
		qi = @props.query_item

		bookmark_description = h Input,
			type: 'textarea'
			label: 'bookmark description'
			value: @state.bookmark_description
			className: css['query-bookmark-description']
			placeholder: 'add a descriptive name to save the bookmark'
			onInput: @onBookmarkDecriptionInput

		# log @state.bookmark_color

		bookmark_label_input = h Bar,
			btn: yes
			big: yes
			h Input,
				type: 'input'
				i: 'bookmark'
				big: yes
				bar: yes
				onInput: @onBookmarkLabelInput
				placeholder: 'Bookmark Name'
				invalid: @state.bookmark_label_invalid
				value: @state.bookmark_label
			h Input,
				type: 'checkbox'
				big: yes
				# btn_type: @state.save_bookmark_public && 'primary'
				onClick: @toggleSavePublic
				checked: @state.save_bookmark_public
				checkbox_type: 'circle'
				label: 'public'
				i: 'public'
			h Input,
				type: 'color'
				onInput: @onSetColor
				value: @state.bookmark_color




		if qi.updated_at
			delete_bookmark_button = h Input,
				type: 'button'
				i: 'delete'
				big: yes
				margin_left: no
				margin_right: yes
				onClick: @onDelete
				btn_type: 'false'
				label: 'delete'

		
		bookmark_icon_input = h 'div',
			className: 'flex-right'
			h Input,
				type: 'button'
				label: 'icon browser'
				i: 'link'
				btn_type: 'flat'
				onClick: ->
					window.open 'https://material.io/resources/icons/?style=baseline'
				href: 'https://material.io/resources/icons/?style=baseline'
			h Input,
				type: 'text'
				i: 'grade'
				value: @state.bookmark_icon
				placeholder: 'icon_name'
				onInput: (e)=>
					@setState
						edit_v: @state.edit_v+1
						bookmark_icon: e.target.value

		save_query_btn = h Input,
			i: !qi.updated_at && 'bookmark' || 'save'
			label: !qi.updated_at && 'create' || 'save'
			big: yes
			margin_left: yes
			margin_right: no
			type: 'button'
			disabled: !(@state.edit_v && @state.bookmark_description && @state.bookmark_label)
			btn_type: 'true'
			onClick: @onSaveQuery


		h 'div',
			className: 'flex-down full'
			key: @props.query_item._id
			h 'div',
				className: 'flex-right pad-bottom'
				h 'div',
					className: 'flex-right'
					style: 
						width: '50%'
					delete_bookmark_button
				h 'div',
					className: 'flex-left'
					style:
						width: '100%'
					save_query_btn
			h 'div',
				className: cn 'card full-w box-shadow flex-down pad'
				style:
					transform: 'none'
					height: '100%'
					background: @context.primary.inv[0]
				bookmark_label_input
				bookmark_icon_input
				bookmark_description

			

			
QuerySaverView.contextType = StyleContext
module.exports = QuerySaverView