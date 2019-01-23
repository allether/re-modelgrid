Slide = require 're-slide'
{Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
css = require './ModelGrid.less'

class CreateDocView extends Component
	onNewDocFormInput: (key_name,e)->
		# log key_name,e.target.value
		@props.new_doc[key_name] = e.target.value
		@forceUpdate()


	renderNewDocForm: (props,state)->
		lc = props.keys_array.reduce (pre,key_name)->
			if key_name.length > pre
				return key_name.length
			return pre
		,0

		
		if props.filter
			filter_q = props.filter.query_value


		h 'form',
			className: css['model-grid-add-doc-form']
			style:
				background: @context.primary.inv[0]
			
			h Bar,
				vert: true
				big: false
				props.form.keys.map (key,i)=>
					key_name = key.name
					if key.render
						return key.render props.new_doc,()=>
							@forceUpdate()
							# @onNewDocFormInput.bind(null,key_name,value)
					

					override = null
					if filter_q && filter_q[key_name]
						override = filter_q[key_name]


					key = props.keys[key_name]
					props.new_doc[key_name] = override || props.new_doc[key_name]
					key_val = props.new_doc[key_name]
					h Input,
						key: key_name
						label: key.label.padStart(lc+4," ")
						bar: yes
						name: props.schema.name+'/'+key_name
						disabled: override && yes
						required: key.form_required && yes
						is_valid: key.form_validate?(key_val) || undefined
						value: override || key_val || ''
						onInput: @onNewDocFormInput.bind(@,key_name)
						placeholder: key.form_placeholder || key_name
				

				h Input,
					big: yes
					type: 'button'
					label: 'create'
					center: yes
					onClick: props.createDataItem
					btn_type: 'primary'


	render: ->
		h MenuTab,
			vert: yes
			show_backdrop: @props.reveal
			reveal: @props.reveal
			onClick: @props.onClick
			content: h Input,
				type: 'button'
				btn_type: 'flat'
				i: 'add'
			@props.reveal && @renderNewDocForm(@props,@state)

CreateDocView.contextType = StyleContext
module.exports = CreateDocView