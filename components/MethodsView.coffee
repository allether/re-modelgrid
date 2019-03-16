{Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
Slide = require 're-slide'
css = require './ModelGrid.less'
MAX_CHAR = 31




class MethodsView extends Component
	constructor: (props)->
		super(props)
		@state = 
			render_method: null
			method_res: null
	onRenderMethodRes: (res)=>
		@setState
			method_res: res

	onMethodClick: (method)=>
		if method.render
			@setState
				render_method: method
		else
			@props.runDataItemMethod(method)

	
	hideMethodRender: =>
		@setState
			render_method: null
			method_res: null


	mapMethods: (method,i)=>
		if @state.render_method?
			if @state.render_method != method
				return null
		if method.isVisible && !method.isVisible(@props.data_item)
			return null
	
		h Input,
			key: method.name
			onClick: @onMethodClick.bind(@,method)
			type: 'button'
			btn_type: 'flat'
			i: method.icon || (method.render && 'subject' || 'play_arrow')
			label: method.label

	confirmDelete: =>
		@setState
			confirm_delete: yes

	hideConfirmDelete: =>
		@setState
			confirm_delete: no
	
	render: ->

		if @state.render_method
			return h Slide,
				vert: yes
				h Bar,
					vert: no
					big: yes
					h Input,
						type: 'button'
						i: 'close'
						onClick: @hideMethodRender
					h Input,
						label: @state.render_method.label
						type: 'label'
				h 'div',
					className: css['methods-list-render-view']
					@state.render_method && @props.renderDataItemMethod(@state.render_method,@onRenderMethodRes,@state.method_res)

		h Slide,
			vert: yes
			h Bar,
				vert: yes
				big: yes
				h Bar,
					vert: no
					big: yes
					h Input,
						type: 'button'
						i: 'code'
						onClick: @props.showJSONView
						label: 'edit'
					@props.onDelete && h Input,
						type: 'button'
						i: 'delete'
						onClick: @props.onDelete

			h 'div',
				className: css['data-item-method-menu']
				h Bar,
					vert: yes
					big: no
					@props.schema.methods?.map @mapMethods


MethodsView.contextType = StyleContext
module.exports = MethodsView