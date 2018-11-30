{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
css = require './ModelGrid.less'
MAX_CHAR = 32


class BookmarksView extends Component
	constructor: (props)->
		super(props)
		
		@state = 
			show_new_bookmark_form: no
		Object.assign @state,@getFormInitialState(props)
		

	getFormInitialState: (props)=>
		query_item_value: props.query_item.value
		query_item_layout_keys: JSON.stringify(props.query_item.layout_keys)
		query_item_sort_keys: JSON.stringify(props.query_item.sort_keys)
		query_item_label: props.query_item.label

	saveQueryItem: =>
		n_q = @props.createOrUpdateQueryItem
			value: @state.query_item_value
			layout_keys: JSON.parse(@state.query_item_layout_keys)
			sort_keys: JSON.parse(@state.query_item_sort_keys)
			query_item_label: @state.query_item_label
		,@props.query_item

		return @props.saveQueryItem(n_q)

		# if n_q._id != @props.query_item._id
			



	showNewBookmarkForm: =>
		set_state = Object.assign @getFormInitialState(@props),
			show_new_bookmark_form: yes
		@setState set_state
			

	hideNewBookmarkForm: =>
		@setState show_new_bookmark_form: no

	setQueryItemLayoutKeysEnabled: =>
		@setState query_item_layout_keys_enabled: !@state.query_item_layout_keys_enabled
	
	setQueryItemValue: (e)=>
		@setState query_item_value: e.target.value

	setQueryItemLayoutKeys: (e)=>
		@setState query_item_layout_keys: e.target.value

	setQueryItemSortKeys: (e)=>
		@setState query_item_sort_keys: e.target.value

	setQueryItemLabel: (e)=>
		@setState query_item_label: e.target.value

	
	renderForm: ->
		selected_layout_keys_val = @props.selected_layout && JSON.stringify(@props.selected_layout.keys) || null
		

		if @state.show_new_bookmark_form
			form_options = [
				h MenuTab,
					content: h Input,
						type: 'input'
						onInput: @setQueryItemLabel
						value: @state.query_item_label
						placeholder: 'max '+MAX_CHAR+' char'
						label: 'label'
				
				# h MenuTab,
				# 	content: h Input,
				# 		type: 'input'
				# 		bar: yes
				# 		btn_type: 'flat'

				# 		label: 'query'.padStart(8)
				# 		value: @state.query_item_value
				# 		placeholder: @props.query_item.value

				# 		onInput: @setQueryItemValue
					
						
				# h MenuTab,
				# 	content: h Bar,
				# 		big: no
				# 		h Input,
				# 			label: 'save layout'.padStart(8)
				# 			type: 'checkbox'
				# 			select: @state.query_item_layout_keys_enabled
				# 			checked: @state.query_item_layout_keys_enabled
				# 			onClick: @setQueryItemLayoutKeysEnabled
				# 			btn_type: 'flat'
				# 		h Input,
				# 			type: 'input'
				# 			btn_type: 'flat'
				# 			disabled: !@state.query_item_layout_keys_enabled
				# 			placeholder: JSON.stringify(@props.query_item.layout_keys)
				# 			value: @state.query_item_layout_keys
				# 			onInput: @setQueryItemLayoutKeys
						
						
				# h MenuTab,
				# 	content: h Input,
				# 		type: 'input'
				# 		btn_type: 'flat'
				# 		btn_type: 'flat'
						
				# 		label: 'sort'.padStart(8)
				# 		placeholder: JSON.stringify(@props.query_item.sort_keys)
				# 		value: @state.query_item_sort_keys
						
				# 		onInput: @setQueryItemSortKeys
						
			]
		
		if @state.show_new_bookmark_form
			add_label = 'save'
			add_fn = @saveQueryItem
			add_type = 'primary'
			add_disabled = !@state.query_item_label
		else
			add_label = 'add'
			add_fn = @showNewBookmarkForm
			add_type = 'default'
			add_disabled = false
		
		h MenuTab,
			onClickBackdrop: @hideNewBookmarkForm
			reveal: @state.show_new_bookmark_form
			show_backdrop: @state.show_new_bookmark_form
			content: h Bar,
				style:
					width:'100%'
				big: no
				h Input,
					type: 'button'
					i: 'delete'
					onClick: @props.deleteQueryItem
					disabled: @state.show_new_bookmark_form
					center: yes
					btn_type: 'primary'
					label: 'del'
				h Input,
					type: 'button'
					i: 'add'
					# btn_type: 'true'
					disabled: add_disabled
					btn_type: add_type
					onClick: add_fn
					center: yes
					label: 'add'
				
			vert: yes
			form_options
			
	
	render: (props,state)->

		tab_options = 
			vert: yes
			big: no
			force_split_x: 1
			onClick: props.onClick
			onClickBackdrop: props.onHide
			reveal: props.reveal
			show_backdrop: props.reveal
			content: h Input,
				type: 'button'
				btn_type: 'flat'
				i: 'bookmark'

		content_tab = h MenuTab,
			content: h 'div',
				className: css['bookmarks-list-container']
				style:
					background: @context.__theme.primary.inv[1]
				props.bookmarks.map @mapBookmarkButtons
		
		if props.reveal
			form_tab = @renderForm()

		h MenuTab,
			tab_options
			content_tab
			form_tab
			
			
			
				
			
			
			


module.exports = BookmarksView