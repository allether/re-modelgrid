{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
css = require './ModelGrid.less'

class CreateDocView extends Component
	onNewDocFormInput: (key_name,e)=>
		@props.new_doc[key_name] = e.target.value
		@setState()
	renderNewDocForm: (props,state)->
		lc = props.keys_array.reduce (pre,key_name)->
			if key_name.length > pre
				return key_name.length
			return pre
		,0

		# log props.cfg.new_doc

		h 'form',
			className: css['model-grid-add-doc-form']
			style:
				background: @context.__theme.primary.inv[0]
			# style:
			# 	maxHeight: @_grid_slide._outer.clientHeight ||'300px'
			h Bar,
				vert: true
				big: false
				props.keys_array.map (key_name,i)=>
					if !props.keys[key_name].form_render
						return null
					# log key_name
					key = props.keys[key_name]
					key_val = props.new_doc[key_name] || key.form_autofill
					h Input,
						key: i
						label: key.label.padStart(lc+4," ")
						bar: yes
						disabled: key.form_autofill && yes
						required: key.form_required && yes
						is_valid: key.form_validate?(key_val) || undefined
						value: key_val
						onInput: @onNewDocFormInput.bind(null,key_name)
						placeholder: key.form_placeholder || key_name
				h Input,
					big: yes
					type: 'submit'
					onClick: @onCreateDocument
					btn_type: 'primary'


	render: (props,state)->
		h MenuTab,
			vert: yes
			show_backdrop: props.reveal
			reveal: props.reveal
			onClick: props.onClick
			content: h Input,
				type: 'button'
				btn_type: 'flat'
				i: 'add'
			props.reveal && @renderNewDocForm(props,state)


module.exports = CreateDocView