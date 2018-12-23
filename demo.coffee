window.log = console.log.bind(console)
{createElement,Component} = require 'react'
global.Component = Component
global.h = createElement
{render} = require 'react-dom'
ModelGrid = require './components/ModelGrid.coffee'
Slide = require 're-slide'
{Style,Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'
adler = require 'adler-32'
demo_models = require './demo-models.coffee'

window.adler = adler

class Demo extends Component
	constructor: (props)->
		super(props)
		@state =
			primary:'#1B1C1D'
			secondary:'#386277'
			primary2:'#fff'
			secondary2:'#386277'

	onSetStyle: (primary,secondary)=>
		# log 'on set styl'
		@setState
			background: primary.inv[0]
			color: primary.color[0]
	onSetStyle2: (primary,secondary)=>
		@setState
			background2: primary.inv[0]
			color2: primary.color[0]
	componentDidMount: =>
		window.addEventListener 'resize',()=>
			@forceUpdate()
	render: ->
		h Style,
			primary: @state.primary
			secondary: @state.secondary
			onSetStyle: @onSetStyle
			h Slide,
				vert:yes
				beta: 100
				Slide: no
				# h Slide,
				# 	beta: 20
				# 	style:
				# 		background: @state.background
				# 		color: @state.color
				# 	h ModelGridExample
				h Slide,
					beta: 30
					style:
						background: @state.background
						color: @state.color
					h ModelGridExample
				h Slide,
					beta: 70
					h Style,
						primary: @state.primary2
						secondary: @state.secondary2
						darken_factor: .88
						onSetStyle: @onSetStyle2
						h ModelGridExample					



getStateConfig = (model)->
	model_cfg = localStorage.getItem(model.name)
	if model_cfg
		# log 'load config for',model.name,localStorage.getItem(model.name+'-sum')
		return JSON.parse(model_cfg)

	

setStateConfig = (model,cfg)->
	cfg = JSON.stringify(cfg)
	cfg_sum = (adler.str(cfg,"overkill") >>> 0).toString(32)
	prev_sum = localStorage.getItem(model.name+'-sum')
	if prev_sum != cfg_sum
		# log 'save config for',model.name,cfg_sum
		localStorage.setItem(model.name+'-sum',cfg_sum)
		localStorage.setItem(model.name,cfg)



class ModelGridExample extends Component
	constructor: (props)->
		super(props)
		@state =
			selected_model_index: 0
			schema_state_id: Date.now()
	
	selectModelIndex: (i)=>
		@setState
			selected_model_index: i
			schema_state_id: Date.now()


	mapMenuModels: (model,i)=>
		h MenuTab,
			key: model.name
			content: h Input,
				type: 'button'
				btn_type: 'primary'
				label: model.label
				onClick: @selectModelIndex.bind(@,i)
				select: i == @state.selected_model_index


	render: ->

		schema_state = getStateConfig(demo_models.models[@state.selected_model_index])
		

		h Slide,
			vert: no
			
			h Style,
				primary: '#81ffcd'
				secondary: '#81ffcd'
				h Slide,
					style:
						background: '#81ffcd'
						overflow: 'visible'
						zIndex: 9999
					dim: 30
					h Menu,
						hover_reveal_enabled: yes
						big: no
						vert: yes
						split_x: 1
						split_y: 1
						h MenuTab,
							content: h Input,
								i: 'menu'
								btn_type: 'primary'
								type: 'button'
							demo_models.models.map @mapMenuModels

			h Slide,
				beta: 100
				style:
					background: @context.primary.inv[0]
					color: @context.primary.color[0]
				h ModelGrid,
					schema: demo_models.models[@state.selected_model_index]
					schema_state: schema_state
					schema_state_id: @state.schema_state_id
					onSchemaStateUpdated: setStateConfig.bind(null,demo_models.models[@state.selected_model_index])
					
					createDataItem: (doc)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								reject(new Error 'test error - failed to create doc')
							,1000
				
					runDataItemMethod: (schema,data_item,method)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								reject(new Error 'test error -'+method.label)
							,1000
					
					updateDataItem: (doc_id,updates)=>
						# log 'update data item',doc_id,updates

						return new Promise (resolve,reject)=>
							setTimeout ()=>
								for d,i in demo_models.data[@state.selected_model_index]
									if d._id == doc_id
										Object.assign d,updates
										return resolve(d)
								reject(new Error 'not found')
							,500
					deleteDataItem: (doc_id)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								for d,i in demo_models.data[@state.selected_model_index]
									if d._id == doc_id
										demo_models.data[@state.selected_model_index].splice(i,1)
										return resolve(doc_id)
								reject(new Error 'not found')
							,500

					getDataItem: (doc_id)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								for d,i in demo_models.data[@state.selected_model_index]
									if d._id == doc_id
										gd = Object.assign {},d
										gd.test_1234 = {abc:{gg:"12345123"}}
										return resolve(gd)
								reject(new Error 'not found')
							,500

					runQuery: (query)=>
						log 'runQuery',query
						new Promise (resolve,reject)=>
							setTimeout ()=>
								if query.input_value == '{}'
									reject new Error 'test error for input_value == {} (type something in the search field)'
								else
									resolve(demo_models.data[@state.selected_model_index])
								
							,1000

ModelGridExample.contextType = StyleContext

window.demo = render(h(Demo),window.demo)