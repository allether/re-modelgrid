{render,h,Component} = require 'preact'

ModelGrid = require './components/ModelGrid.coffee'
window.log = console.log.bind(console)
Slide = require 'preact-slide'
{Style,Input,MenuTab,Menu,Bar} = require 'lerp-ui'
adler = require 'adler-32'
demo_models = require './demo-models.coffee'

window.adler = adler

class Demo extends Component
	constructor: (props)->
		super(props)
		@state =
			primary:'#1B1C1D'
			secondary:'#4D6977'
			primary2:'#fff'
			secondary2:'#4D6977'

	onSetStyle: (primary,secondary)=>
		# log 'on set styl'
		@setState
			background: primary.inv[0]
			color: primary.color[0]
	onSetStyle2: (primary,secondary)=>
		@setState
			background2: primary.inv[0]
			color2: primary.color[0]

	render: (props,state)->
		h Style,
			primary: state.primary
			secondary: state.secondary
			onSetStyle: @onSetStyle
			h Slide,
				vert:yes
				beta: 100
				h Slide,
					beta: 50
					style:
						background: @state.background
						color: @state.color
					# h ModelGridExample
				h Slide,
					beta: 50
					style:
						background: @state.background2
						color: @state.color2
					h Style,
						primary: state.primary2
						secondary: state.secondary2
						onSetStyle: @onSetStyle2
						h ModelGridExample					


getStateConfig = (model)->
	model_cfg = localStorage.getItem(model.name)
	if model_cfg
		log 'load config for',model.name,localStorage.getItem(model.name+'-sum')
		return JSON.parse(model_cfg)

	

setStateConfig = (model,cfg)->
	cfg = JSON.stringify(cfg)
	cfg_sum = (adler.str(cfg,"overkill") >>> 0).toString(32)
	prev_sum = localStorage.getItem(model.name+'-sum')
	if prev_sum != cfg_sum
		log 'save config for',model.name,cfg_sum
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


	mapMenuModels: (model,i)=>
		h MenuTab,
			key: model.name
			content: h Input,
				type: 'button'
				btn_type: 'primary'
				label: model.label
				onClick: @selectModelIndex.bind(@,i)
				select: i == @state.selected_model_index


	render: (props,state)->

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
				h ModelGrid,
					schema: demo_models.models[@state.selected_model_index]
					schema_state: schema_state
					schema_state_id: @state.schema_state_id
					onSchemaStateUpdated: setStateConfig
					updateDataItem: (doc_id,updates)=>
						log 'update data item',doc_id,updates
						return new Promise (resolve,rejecet)=>
							for d,i in demo_models.data[@state.selected_model_index]
								if d._id == doc_id
									Object.assign d,updates
									return resolve(d)
							reject(new Error 'not found')
					
					getDocumentById: (doc_id)=>
						return new Promise (resolve,rejecet)=>
							for d,i in demo_models.data[@state.selected_model_index]
								if d._id == doc_id
									return resolve(d)
							reject(new Error 'not found')

					runQuery: (query)=>
						log 'runQuery',query
						new Promise (resolve,reject)=>
							resolve(demo_models.data[@state.selected_model_index])



window.demo = render(h(Demo),document.body,window.demo)