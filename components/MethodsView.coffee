{Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
css = require './ModelGrid.less'
MAX_CHAR = 31

class MethodsView extends Component
	constructor: (props)->
		super(props)
		@state = 
			render_method: null
	onMethodClick: (method)=>
		
		if method.render
			@setState
				render_method: method
		else
			@props.runDataItemMethod(method)

	hideMethodRender: =>
		@setState
			render_method: null

	mapMethods: (method,i)=>
		
		if @state.render_method?
			if @state.render_method != method
				return null
		h MenuTab,
			key: i
			onClickBackdrop: @hideMethodRender
			show_backdrop: @state.render_method == method && yes || no
			backdrop_color: @context.primary.inv[3]
			content: h Input,
				onClick: @onMethodClick.bind(@,method)
				type: @state.render_method == method && 'label' || 'button'
				select:  @state.render_method == method
				btn_type: 'flat'
				i: method.icon || (method.render && 'subject' || 'play_arrow')
				label: method.label
			

	render: ->
		method_tabs = @props.methods.map @mapMethods
		if @state.render_method
			@state.render_method.post_body = @state.render_method.post_body || {}
			method_rendered = @state.render_method.render(@state.render_method,@state.render_method.post_body)
		tab_props = 
			tab_style:
				background: @context.primary.inv[0]
				width: '300px'
			content: h 'div',
				className: css['methods-list-container']
				h Bar,
					style:
						width: '100%'
					vert: yes
					method_tabs
			reveal: @state.render_method && yes || no
			onClickBackdrop: @hideMethodRender
			backdrop_color: @context.primary.inv[3]
			show_backdrop: @state.render_method && yes || no
		# method_tabs.push h 'span',{},props.methods.length+' methods'
		if method_rendered
			h MenuTab,tab_props,method_rendered
		else
			h MenuTab,tab_props
			


MethodsView.contextType = StyleContext

module.exports = MethodsView