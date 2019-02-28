Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
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
		sorted_keys = @props.keys_array.concat([])
		sorted_keys.sort (k,pk)=>
			ki = @props.query_item.layout_keys.indexOf(k)
			pki = @props.query_item.layout_keys.indexOf(pk)
			if ki == -1 && pki >= 0
				return 1000
			else if pki == -1 && ki >= 0
				return -1000
			else 
				return ki - pki
			
			


		# sorted_keys = sorted_keys.map (key_name)=>
		# 	key_index = @props.query_item.layout_keys.indexOf(key_name)
			
		
		return [
			h MenuTab,
				className: css['methods-list-container']
				key: 1
				tab_style:
					background: @context.primary.inv[0]
				content: h Bar,
					vert: yes
					sorted_keys.map (key_name)=>
						key_index = @props.query_item.layout_keys.indexOf(key_name)
						h MenuTab,
							key: key_name
							content: h Input,
								type: 'button'
								onClick: @onSelectKey.bind(@,key_name)
								btn_type: key_index >= 0 && 'primary' || 'flat'
								label: [
									String(if key_index >= 0 then key_index else '').padEnd(4)
									@props.keys[key_name].label
									# h 'span',{className: css['model-grid-opaque']},String(@props.keys[key_name].label).padStart(10)
									
								]
			h MenuTab,
				key: 2
				content: h Input,
					type: 'text'
					onInput: @setNewLayoutKeysValue
					value: JSON.stringify(@props.query_item.layout_keys)
					placeholder: '[keys]'
					# label: '[keys]'
		]
	


	render: ->

		tab_options = 
			vert: yes
			big: no
			force_split_x: -1
			force_bar_dir_x: -1
			force_split_y: 1
			force_bar_dir_y: 1

			onClick: @props.onClick
			onClickBackdrop: @props.onHide
			reveal: @props.reveal
			show_backdrop: @props.reveal
			content: h Input,
				type: 'button'
				btn_type: 'flat'
				i: 'view_week'
				label: [
					h 'span',{key:1,className: css['model-grid-slash']},'/'
					String(@props.query_item.layout_keys.length).padStart(2)
				]

		if @props.reveal
			form_tab = @renderForm()

		h MenuTab,
			tab_options
			form_tab
			
			
			
				
			
LayoutsView.contextType = StyleContext
			


module.exports = LayoutsView