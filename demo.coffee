require 'normalize.css'
require 're-slide/dist/re-slide.css'
require 're-lui/dist/lui-mid.css'
window.log = console.log.bind(console)
{createElement,Component} = require 'react'
global.Component = Component
global.h = createElement
{render} = require 'react-dom'
ModelGrid = require './components/ModelGrid.coffee'

css = require './demo.less'
Slide = require 're-slide'
{Style,Input,MenuTab,Menu,Bar,StyleContext} = require 're-lui'

adler = require 'adler-32'
demo_models = require './demo-models.coffee'
_ = require 'lodash'

window.adler = adler

class Demo extends Component
	constructor: (props)->
		super(props)
		@state =
			primary:'#2c2e30'
			primary_inv: '#fff'
			secondary: '#fff'
			secondary_inv: '#386277'
			primary2:'#fff'
			secondary2:'#fff'
			primary2_inv:'#323233'
			secondary2_inv:'#5498bb'

	
	onSetStyle: (primary,secondary)=>
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
			secondary_inv: @state.secondary_inv
			primary_inv: @state.primary_inv
			onSetStyle: @onSetStyle
			h Slide,
				vert:yes
				beta: 100
				style:
					height: '100%'
					width: '100%'
				slide: no
				# h Slide,
				# 	beta: 30
				# 	h ModelGridExample,
				# 		key: 1
				# 		renderHoverBox: @renderHoverBox
				# 		setHoverBox: @setHoverBox
				# h Slide,
				# 	beta: 70
				h Style,
					primary: @state.primary2
					primary_inv: @state.primary2_inv
					secondary: @state.secondary2
					secondary_inv: @state.secondary2_inv
					darken_factor: .88
					onSetStyle: @onSetStyle2
					h ModelGridExample,
						key: 2
						renderHoverBox: @renderHoverBox
						setHoverBox: @setHoverBox




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








JsonView = require('./components/JsonView')

class DebugView extends Component
	constructor: (props)->
		super(props)
		@state = 
			json: {}


	setJSON: (json)->
		@setState
			json: json

	render: ->
		h 'div',
			style:
				color: 'grey'
				background: '#212121'
				overflow: 'scroll'
			className: css['json']+' reg-mono'
			h JsonView,
				json: @state.json
				trim: yes
				colors:
					key: '#b4c3b7'
					number: 'orange'
					string: 'lime'
					boolean: 'cyan'
		


getPrivateQueries= (schema_name,user_id)->
	JSON.parse(localStorage.getItem('privq-'+schema_name+'-'+user_id) || '[]')

getPublicQueries= (schema_name)->
	JSON.parse(localStorage.getItem('pubq-'+schema_name) || '[]')

setPrivateQueries= (schema_name,user_id,queries)->
	localStorage.setItem('privq-'+schema_name+'-'+user_id,JSON.stringify(queries))

setPublicQueries= (schema_name,queries)->
	localStorage.setItem('pubq-'+schema_name,JSON.stringify(queries))






class ModelGridExample extends Component
	constructor: (props)->
		super(props)
		@state =
			selected_model_index: 0
			schema_data_sync_id: Date.now()
			user_id: '1'

		

	selectModelIndex: (i)=>
		@setState
			selected_model_index: i
			# schema_data_sync_id: Date.now()


	mapMenuModels: (model,i)=>
		h Input,
			type: 'button'
			key: i
			# btn_type: 'primary'
			label: String(i)
			onClick: @selectModelIndex.bind(@,i)
			select: i == @state.selected_model_index




				
	render: ->

		schema_state = getStateConfig(demo_models.models[@state.selected_model_index])
		

		h Slide,
			vert: no
			h Style,
				primary: '#000'
				primary_inv: '#fde400'
				h Slide,
					style:
						background: '#fde400'
						color: '#000'
						overflow: 'visible'
					dim: 400
					vert: no
					h Slide,
						className: 'flex-down'
						h DebugView,
							ref: (ref)=>
								@_debug_view = ref
					h Slide,
						dim: DIM
						h 'div',
							className: 'flex-down'
							h Bar,
								vert: yes
								demo_models.models.map @mapMenuModels
								h Input,
									key: 'sync'
									onClick: ()=>
										localStorage.clear()
										@setState
											grid_id: Date.now()
											schema_data_sync_id: Date.now()
									i: 'refresh'
									type: 'button'

			h Slide,
				beta: 100
				style:
					background: @context.primary.inv[0]
					color: @context.primary.color[0]
				h ModelGrid,
					schema: demo_models.models[@state.selected_model_index]
					schema_data_sync_id: @state.schema_data_sync_id
					data_item_id: @state.data_item_id
					user_id: @state.user_id
					key: @state.grid_id
					onSchemaStateUpdated: setStateConfig.bind(null,demo_models.models[@state.selected_model_index])
					setHoverBox: @props.setHoverBox
					renderHoverBox: @props.renderHoverBox

					onUpdate: (state)=>
						@_debug_view.setJSON(state)
				
					onError: (err)->
						console.error err
						alert('ERROR '+err.message)

					selectDataItem: (doc_id)=>
						@setState
							data_item_id: doc_id
					
					filter: (schema)=>
						@setState
							test_filter:schema.name



	
					runQuery: (query)=>
						new Promise (resolve,reject)=>
							setTimeout ()=>
								if query.input_value == '{}'
									reject new Error 'test error for input_value == {} (type something in the search field)'
								else
									resolve(demo_models.data[@state.selected_model_index].slice(query.skip,query.skip+query.limit))
								
							,500


					getSchemaPrivateQueries: (schema_name)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								# log getPrivateQueries(schema_name,@state.user_id)
								resolve(getPrivateQueries(schema_name,@state.user_id))
							,500



					getSchemaPublicQueries: (schema_name)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								# log getPublicQueries(schema_name,@state.user_id)
								resolve(getPublicQueries(schema_name,@state.user_id))
							,500


					
					saveSchemaState: (schema_name,schema_state)=>
						localStorage.setItem('schema-state-'+schema_name,JSON.stringify(schema_state))


					getSchemaState: (schema_name)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								resolve(JSON.parse(localStorage.getItem('schema-state-'+schema_name)||'{}'))
								# resolve(SCHEMA_STATES[schema_name])
							,500



					saveQuery: (schema_name,query_item)=>
						if query_item.is_public
							queries = getPublicQueries(schema_name)
							queries.push query_item
							log queries
							setPublicQueries(schema_name,queries)
						else
							queries = getPrivateQueries(schema_name,@state.user_id)
							queries.push query_item
							setPrivateQueries(schema_name,@state.user_id,queries)
						
						return new Promise (resolve,reject)->
							setTimeout ()=>
								resolve(true)
							,1000




					deleteQuery: (schema_name,query_item)=>
						if query_item.is_public
							queries = getPublicQueries(schema_name)
							f_i = _.findIndex queries,_id:query_item._id
							if f_i >= 0
								queries.splice(f_i,1)
								setPublicQueries(schema_name,queries)
						else
							queries = getPrivateQueries(schema_name,@state.user_id)
							f_i = _.findIndex queries,_id:query_item._id
							if f_i >= 0
								queries.splice(f_i,1)
								setPrivateQueries(schema_name,@state.user_id,queries)
						



					

					createDataItem: (doc)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								reject(new Error 'test error - failed to create doc')
							,1000



					runDataItemMethod: (schema,data_item,method)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								resolve
									data_item: data_item
									method_res:
										test_response: 200
							,1000


					updateDataItem: (doc_id,updates)=>
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								for d,i in demo_models.data[@state.selected_model_index]
									if d._id == doc_id
										Object.assign d,{"TEST":"this is a fake update"},updates
										return resolve(d)
								reject(new Error 'not found')
							,500


					# deleteDataItem: (doc_id)=>
					# 	return new Promise (resolve,reject)=>
					# 		setTimeout ()=>
					# 			for d,i in demo_models.data[@state.selected_model_index]
					# 				if d._id == doc_id
					# 					demo_models.data[@state.selected_model_index].splice(i,1)
					# 					return resolve(doc_id)
					# 			reject(new Error 'not found')
					# 		,500


					getDataItem: (doc_id)=>
						# log doc_id
						return new Promise (resolve,reject)=>
							setTimeout ()=>
								for d,i in demo_models.data[@state.selected_model_index]
									if d._id == doc_id
										gd = Object.assign {},d
										gd.test_1234 = {abc:{gg:"12345123"}}
										return resolve(gd)
								reject(new Error 'not found')
							,500


ModelGridExample.contextType = StyleContext

window.demo = render(h(Demo),window.demo)