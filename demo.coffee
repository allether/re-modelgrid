{render,h,Component} = require 'preact'

ModelGrid = require './components/ModelGrid.coffee'
{Style} = require 'lerp-ui'
# Input = require 'Input.coffee'

onStaticFn = (opts)->
	console.log opts
onMethodFn = (opts)->
	console.log opts
onFormSubmit = (opts)->
	console.log opts

user_data = [
	{
		project: 'My Project'
		_id: 1
		_name: 'Jake'
		_age: 10
	},{
		project: 'My Project'
		_id: 2
		_name: 'Paul'
		_age: 11
	},{
		project: 'My Project'
		_id: 3
		_name: 'Sam Hyde'
		_age: 13
	},{
		project: 'Your Project'
		_id: 4
		_name: 'Ron'
	}
]


for i in [0...1000]
	user_data.push
		project: Math.random().toString(Math.floor(2+Math.random()*5)).substring(2)
		_id: Math.random().toString(36).substring(7)
		_name: Math.random().toString(36).substring(7) + ' ' + Math.random().toString(36).substring(7).toLocaleUpperCase()
		_age: Math.floor(Math.random()*100)

room_data = [
	{
		project: 'My Project'
		_id: 1
		_type: 'private'
	},{
		project: 'My Project'
		_id: 2
		_type: 'public'
	}
]

event_data = [
	{
		project: 'My Project'
		_id: 1
		_name: 'birthday party'
		created_at: Date.now()
	},{
		project: 'My Project'
		_id: 2
		_name: 'meeting'
		created_at: Date.now() - 1000
	}
]


user_model = 
	name: 'user'
	label: 'Users'
	parent_category: 'My Project'
	global_filter: (obj)->
		obj.project == 'My Project'
	

	keys_array: ['project','_name','_id','_age']
	
	keys:
		_id:
			label: 'ID'
			col_width: 70
			indexed: yes
			placeholder: '-'
			onEdit: (val)->
				alert('_id edit '+val)
		_name:
			label: 'Name'
			form_render:yes
			form_required: no
			indexed: true
			type: String
			col_width: 150
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		_age:
			label: 'Age'
			col_width: 70
			form_render:yes
			indexed: true
			form_required: yes
			type: String
			center: yes
			placeholder: '-'
			onEdit: (val)->
				alert('_age edit '+val)
		project:
			label: 'Project'
			col_width: 350
			form_render:yes
			# indexed: true
			form_autofill: 'My Project'
			form_required: yes
			type: String
			placeholder: '-'
			onEdit: (val)->
				alert('project edit '+val)
	
	statics: [
		{
			method_label: 'update all users'
			method_name: 'update-all-users'
			fn: onStaticFn
		},
		{
			method_label: 'alert all users'
			method_name: 'update-all-users'
			fn: onStaticFn
		},
		
	]

	methods: [
		{
			method_label: 'Delete User'
			method_name: 'delete'
			fn: onMethodFn
		},
		{
			method_label: 'View User'
			method_name: 'view'
			fn: onMethodFn
		},
		{
			method_label: 'Rank User'
			method_name: 'set-rank'
			render: ->
				h ModelGridForm,
					values: [
						{
							key: 'rank'
							required: yes
							type: 'text'
							validate: (val)->
								if val != 'admin'
									return false
								return true
						}
						{
							render: (opts)->
								h 'div',
									classNam: 'seperator'
									'-------'
						}
						{
							key: 'rank'
							type: 'toggle'
							required: yes
						}
					]
					submit:
						label: 'submit'
						fn: onFormSubmit
		}
	]


event_model =
	
	keys: [
		_id:
			label: 'ID'
			col_width: 300
			placeholder: '-'
			onEdit: (val)->
				alert('_id edit '+val)
		_name:
			label: 'Name'
			col_width: 100
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		created_at:
			label: 'Created At'
			col_width: 60
			placeholder: '-'
			onEdit: (val)->
				alert('created_at edit '+val)
	]


room_model =
	keys: [
		_id:
			label: 'ID'
			col_width: 300
			placeholder: '-'
			onEdit: (val)->
				alert('_id edit '+val)
		_type:
			label: 'Type'
			col_width: 100
			placeholder: '-'
			onEdit: (val)->
				alert('_type edit '+val)
	]	



class Demo extends Component
	constructor: (props)->
		super(props)
		@state =
			primary:'#1B1C1D'
			secondary:'#4D6977'
	render: (props,state)->
		h Style,
			primary: state.primary
			secondary: state.secondary
			onSetStyle: (@primary,@secondary)=>
				@_top_container.style.background = @primary.inv[0]
				@_top_container.style.color = @primary.color[0]
			h 'div',
				style: 
					display: 'flex'
					flexDirection: 'column'
				h 'div',
					style:
						height: '50%'
					ref: (e)=>
						@_top_container = e
					h ModelGrid,
						opts: user_model
						data: user_data
						
						loadCfg: (defaults)->
							for key,value of defaults
								# log 'load',key,value
								got_key = localStorage.getItem(key)
								defaults[key] = if got_key then JSON.parse(got_key) else value

							# query_helper_tab_name: 'bookmark'
						
						saveCfg: (cfg)->
							for key,value of cfg
								# log 'save',key,value
								localStorage.setItem(key,JSON.stringify(value))
				h 'div',
					style:
						height: '50%'
					ref: (e)=>
						@_bot_container = e
					h Style,
						primary: '#fff'
						secondary: state.secondary
						onSetStyle: (@primary,@secondary)=>
							@_bot_container.style.background = @primary.inv[0]
							@_bot_container.style.color = @primary.color[0]
						h ModelGrid,
							opts: user_model
							data: user_data
							
							loadCfg: (defaults)->
								for key,value of defaults
									# log 'load',key,value
									got_key = localStorage.getItem(key)
									defaults[key] = if got_key then JSON.parse(got_key) else value

								# query_helper_tab_name: 'bookmark'
							
							saveCfg: (cfg)->
								for key,value of cfg
									# log 'save',key,value
									localStorage.setItem(key,JSON.stringify(value))
					



class ModelGridExample extends Component
	render: (props,state)->
		


render(h(Demo),document.body)