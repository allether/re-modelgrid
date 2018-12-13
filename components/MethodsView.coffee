
{render,h,Component} = require 'preact'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
css = require './ModelGrid.less'
MAX_CHAR = 32

class MethodsView extends Component
	onMethodClick: (method)=>
		
		if method.render
			@setState
				render_method: method
		else
			method.fn?(method,@props.data_item)

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
			backdrop_color: @context.__theme.primary.inv[3]
			content: h Input,
				onClick: @onMethodClick.bind(@,method)
				type: @state.render_method == method && 'label' || 'button'
				select:  @state.render_method == method
				btn_type: 'flat'
				i: method.icon || (method.render && 'subject' || 'play_arrow')
				label: method.label.padEnd(MAX_CHAR)
			

	render: (props,state)->
		method_tabs = props.methods.map @mapMethods
		if state.render_method
			method_rendered = state.render_method.render(state.render_method)
		tab_props = 
			tab_style:
				background: @context.__theme.primary.inv[0]
			content: h 'div',
				className: css['methods-list-container']
				method_tabs
			reveal: state.render_method && yes || no
			onClickBackdrop: @hideMethodRender
			backdrop_color: @context.__theme.primary.inv[3]
			show_backdrop: state.render_method && yes || no
		# method_tabs.push h 'span',{},props.methods.length+' methods'
		if method_rendered
			h MenuTab,tab_props,method_rendered
		else
			h MenuTab,tab_props
			




module.exports = MethodsView