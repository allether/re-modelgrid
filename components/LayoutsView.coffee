{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
css = require './ModelGrid.less'
MAX_CHAR = 32
class LayoutsView extends Component
	constructor: (props)->
		super(props)
		

	onSelectKey: (key_name)=>
		key_arr = [].concat @props.query_item.layout_keys

		k_i = key_arr.indexOf key_name
		if k_i >= 0 
			key_arr.splice(k_i,1)
		else
			key_arr.push key_name

		if key_arr.length == 0
			key_arr = ['_id']

		if @props.query_item.called_at
			@props.cloneQueryItemAndSet
				layout_keys: key_arr
			,@props.query_item
		else
			@props.updateQueryItemAndSet
				layout_keys: key_arr
			,@props.query_item
			# @forceUpdate()


	setNewLayoutNameValue: (e)=>
		@setState new_layout_name_value: String(e.target.value).substring(0,MAX_CHAR)
	setNewLayoutKeysValue: (e)=>
		@setState new_layout_keys_value: e.target.value
	showNewLayoutForm: =>
		@setState show_new_layout_form:yes
	hideNewLayoutForm: =>
		@setState show_new_layout_form:no

	submitNewLayoutForm: ()=>
		if !@state.new_layout_name_value
			return
		@props.onCreateLayout(@state.new_layout_name_value,@state.new_layout_keys_value)
		@setState
			new_layout_name_value: null
			new_layout_keys_value: null
			show_new_layout_form: false

	mapMenuLayoutButtons: (layout,i)=>
		h MenuTab,
			key: i
			# onClick: @togglePinMenu.bind(@,'layout')
			content: h Input,
				invalid:yes
				onClick: @props.onSelectLayout.bind(null,layout)
				focus: if layout == @props.layouts[@props.layout_index] then false else undefined
				btn_type: layout == @props.layouts[@props.layout_index] && 'primary'
				type: 'button'
				label: [
					layout.label.padEnd(MAX_CHAR)
					h 'span',{className: css['model-grid-opaque']},String(layout.keys.length).padStart(3)
				]

	
	
	renderForm: ->
		return [
			h MenuTab,
				className: css['methods-list-container']
				tab_style:
					background: @context.__theme.primary.inv[0]
				content: @props.keys_array.map (key_name)=>
					key_index = @props.query_item.layout_keys.indexOf(key_name)
					h MenuTab,
						key: key_name
						content: h Input,
							type: 'button'
							onClick: @onSelectKey.bind(@,key_name)
							btn_type: key_index >= 0 && 'primary' || 'flat'
							label: [
								@props.keys[key_name].label.padEnd(MAX_CHAR)
								# h 'span',{className: css['model-grid-opaque']},String(@props.keys[key_name].label).padStart(10)
								String(if key_index >= 0 then key_index else '').padStart(3)
							]
			h MenuTab,
				content: h Input,
					type: 'label'
					onInput: @setNewLayoutKeysValue
					label: JSON.stringify(@props.query_item.layout_keys)
					placeholder: '[keys]'
					# label: '[keys]'
		]
	


			
	
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
				i: 'view_week'
				label: [
					h 'span',{className: css['model-grid-slash']},'/'
					String(props.query_item.layout_keys.length).padStart(2)
				]

		if props.reveal
			form_tab = @renderForm()

		h MenuTab,
			tab_options
			form_tab
			
			
			
				
			
			
			


module.exports = LayoutsView