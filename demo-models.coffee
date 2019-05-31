{Input,MenuTab,Menu,Bar,Overlay} = require 're-lui'
Slide = require 're-slide'
onStaticFn = (schema,method)->
	return new Promise (resolve,reject)=>
		setTimeout ()=>
			reject(new Error 'test error -'+method.label)
		,1000


onMethodFn = (schema,data_item,method)=>
	return new Promise (resolve,reject)=>
		setTimeout ()=>
			reject(new Error 'test error -'+method.label)
		,1000

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
	filter:
		query_value:
			project: 'My Project'
	
	keys_array: ['project','_name','_name2','_name3','_name4','_name5','_name6','_id','_age']
	
	keys:
		_id:
			label: 'ID'
			requires: ['project']
			col_width: 170
			indexed: yes
			can_edit: no
			placeholder: '-'
			onEdit: (val)->
				alert('_id edit '+val)
		_name:
			label: 'Name'
			form_render:yes
			form_required: no
			can_edit: yes
			indexed: true
			type: String
			col_width: 150
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		_name2:
			label: 'Name2'
			form_render:yes
			form_required: no
			can_edit: yes
			indexed: true
			type: String
			col_width: 150
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		_name3:
			label: 'Name3'
			form_render:yes
			form_required: no
			can_edit: yes
			indexed: true
			type: String
			col_width: 150
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		_name4:
			label: 'Name4'
			form_render:yes
			form_required: no
			can_edit: yes
			indexed: true
			type: String
			col_width: 150
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		_name5:
			label: 'Name5'
			form_render:yes
			form_required: no
			can_edit: yes
			indexed: true
			type: String
			col_width: 150
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		_name6:
			label: 'Nam6'
			form_render:yes
			form_required: no
			can_edit: yes
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
			can_edit: yes
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
			can_edit: no
			# indexed: true
			form_autofill: 'My Project'
			form_required: yes
			type: String
			placeholder: '-'
			onEdit: (val)->
				alert('project edit '+val)
	
	statics: [
		{
			label: 'Update All Users'
			name: 'update-all-users'
			fn: onStaticFn
		},
		{
			label: 'Alert All Users'
			name: 'update-all-users'
			fn: onStaticFn
			render: ->
				[
					h MenuTab,
						content: h Input,
							type: 'number'
							label: 'render'
							placeholder: 'test'
					h MenuTab,
						content: h Input,
							btn_type: 'primary'
							type: 'button'
							label: 'submit'
				]
		}
	]

	methods: [
		{
			label: 'Some User Method'
			name: 'user-method1'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method2'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method3'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method4'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method5'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method6'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method7'
			fn: onMethodFn
		},
		{
			label: 'Some User Method'
			name: 'user-method8'
			fn: onMethodFn
		},
		{
			label: 'Rank User'
			name: 'setRank'
			render: (schema,data_item,exec,res)->
				# log res
				h Slide,
					center: yes
					vert: yes
					
					h Input,
						type: 'number'
						label: 'rank'
						placeholder: '[0-10]'
					h Input,
						btn_type: 'primary'
						onClick: exec
						type: 'button'
						label: 'submit'
					h Input,
						type: 'text'
						value: JSON.stringify(res?.method_res) || ''
						placeholder: 'method response'
		}
	]

event_model =
	name: 'event'
	label: 'Events'
	filter_label: 'Global Filter Label'
	filter_fn: (query)->
		query.project = 'My Project'
	keys_array: ['_id','_name','created_at']
	keys:
		_id:
			label: 'ID'
			col_width: 300
			indexed: yes
			placeholder: '-'
			onEdit: (val)->
				alert('_id edit '+val)
		_name:
			label: 'Name'
			col_width: 100
			indexed: yes
			form_required: yes
			form_render:yes
			placeholder: '-'
			onEdit: (val)->
				alert('_name edit '+val)
		created_at:
			# form_render:yes
			label: 'Created At'
			col_width: 60
			placeholder: '-'
			onEdit: (val)->
				alert('created_at edit '+val)

	statics: [
		{
			label: 'update all users'
			name: 'update-all-users'
			fn: onStaticFn
		},
		{
			label: 'alert all users'
			name: 'update-all-users'
			fn: onStaticFn
		}
	]

	methods: [
		{
			label: 'Delete User'
			name: 'delete'
			fn: onMethodFn
		},
		{
			label: 'View User'
			name: 'view'
			fn: onMethodFn
		},
		{
			label: 'Rank User'
			name: 'set-rank'
		}
	]


room_model =
	name: 'room'
	label: 'Rooms'
	keys_array: ['_id','_type']
	keys:
		_id:
			label: 'ID'
			indexed: yes
			col_width: 300
			# form_render:yes
			placeholder: '-'
			onEdit: (val)->
				alert('_id edit '+val)
		_type:
			label: 'Type'
			form_render:yes
			form_required: yes
			col_width: 100
			placeholder: '-'
			onEdit: (val)->
				alert('_type edit '+val)

	statics: [
		{
			label: 'update all users'
			name: 'update-all-users'
			fn: onStaticFn
		},
		{
			label: 'alert all users'
			name: 'update-all-users'
			fn: onStaticFn
		}
	]

	methods: [
		{
			label: 'Delete User'
			name: 'delete'
			fn: onMethodFn
		},
		{
			label: 'View User'
			name: 'view'
			fn: onMethodFn
		},
		{
			label: 'Rank User'
			name: 'set-rank'
		}
	]





for i in [0...500]
	user_data.push
		project: Math.random().toString(Math.floor(2+Math.random()*5)).substring(2)
		_id: Math.random().toString(36).substring(7)
		_name: Math.random().toString(36).substring(7) + ' ' + Math.random().toString(36).substring(7).toLocaleUpperCase()
		_age: Math.floor(Math.random()*100)

for i in [0...500]
	event_data.push
		project: Math.random().toString(Math.floor(2+Math.random()*5)).substring(2)
		_id: Math.random().toString(36).substring(7)
		_name: Math.random().toString(36).substring(7) + ' ' + Math.random().toString(36).substring(7).toLocaleUpperCase()
		_age: Math.floor(Math.random()*100)

for i in [0...500]
	room_data.push
		project: Math.random().toString(Math.floor(2+Math.random()*5)).substring(2)
		_id: Math.random().toString(36).substring(7)
		_name: Math.random().toString(36).substring(7) + ' ' + Math.random().toString(36).substring(7).toLocaleUpperCase()
		_age: Math.floor(Math.random()*100)

module.exports = {
	models: [user_model,event_model,room_model]
	data: [user_data,event_data,room_data]
}