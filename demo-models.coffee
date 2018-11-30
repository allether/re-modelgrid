
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
		label: 'My Project'
		fn: (query)->
			query.project = 'My Project'
	
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
		}
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
			method_label: 'update all users'
			method_name: 'update-all-users'
			fn: onStaticFn
		},
		{
			method_label: 'alert all users'
			method_name: 'update-all-users'
			fn: onStaticFn
		}
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
			method_label: 'update all users'
			method_name: 'update-all-users'
			fn: onStaticFn
		},
		{
			method_label: 'alert all users'
			method_name: 'update-all-users'
			fn: onStaticFn
		}
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