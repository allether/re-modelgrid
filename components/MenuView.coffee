SearchView = require './SearchView.coffee'
CreateDocView = require './CreateDocView.coffee'
BookmarksView = require './BookmarksView.coffee'
LayoutsView = require './LayoutsView.coffee'
{render,h,Component} = require 'preact'
Slide = require 'preact-slide'
{Input,MenuTab,Menu,Bar} = require 'lerp-ui'
css = require './ModelGrid.less'

MethodsView = require './MethodsView.coffee'
 
MAX_CHAR = 32
class MenuView extends Component
	constructor: (props)->
		super(props)
		@state = @getDefaultState()
	
	getDefaultState: ->
		menu_backdrop: false
		selected_layout_index: 0
		selected_filter_index: 0
		show_search_query_helper: no
		show_new_layout_form: false
		pin_menu_name: null
		menu_backdrop: false
		show_search_query_helper: no
		search_query_value: null
		search_value: null
		


	
	componentWillUpdate: (props,state)->
		if props.schema.name != @props.schema.name
			Object.assign state,@getDefaultState()
			# log @state
			

	mapMenuFilterButtons: (filter,i)=>
		h MenuTab,
			key: i
			content: h Input,
				# onClick: @togglePinMenu.bind(@,'layout')
				onClick: @props.onSelectFilter.bind(null,filter)
				type: 'button'
				label: filter.label

	


	togglePinMenu: (pin_menu_name,toggle)=>
		@setState
			show_search_query_helper: no
			show_new_layout_form: false
			pin_menu_name: pin_menu_name
			menu_backdrop: toggle





	
	
	


	
	
	

	getPinMenuBoolean: (pin_menu_name,bool)->
		if @state.pin_menu_name == pin_menu_name then true else (if bool then false else undefined)



	render: (props,state)->
		schema = props.schema
		data = props.data
		bb = props.bounding_box


		
		common_menu_schema = 
			vert: no
			bounding_box: bb
			backdrop_color: @context.__theme.primary.inv[3]
			onClickBackdrop: @togglePinMenu.bind(@,null,false)
			hover_reveal_enabled: no
			big: true
		
		# LEFT MENU OPTIONS
		left_menu_schema = Object.assign {},common_menu_schema,
			key: 'left-menu'
			className: css['model-grid-list-menu-left']
	
		# RIGHT MENU OPTIONS
		right_menu_schema = Object.assign {},common_menu_schema,
			key: 'right-menu'
			className: css['model-grid-list-menu-right']
		
		# MODEL TITLE TAB
		model_title_tab = h MenuTab,
			vert: yes
			show_backdrop: @getPinMenuBoolean('models',true)
			reveal: @getPinMenuBoolean('models',true)
			content: h Input,
				type: 'label'
				name: 'document'
				btn_type: 'flat'
				label: [
					schema.filter && h 'span',{},schema.filter.label
					schema.filter && h 'span',{className: css['model-grid-slash']},'/'
					h 'span',{style:{fontWeight:600,color:@context.__theme.primary.color[0]}},schema.label
				]

		# MODEL STATICS TAB
		model_statics_tab = h MenuTab,
			vert: yes
			big: no
			show_backdrop: @getPinMenuBoolean('statics',true)
			onClick: @togglePinMenu.bind(@,'statics',true)
			reveal: @getPinMenuBoolean('statics',true)
			content: h Input,
				type: 'button'
				btn_type: 'flat'
				i: 'more_vert'
			h MethodsView,
				data_item: @props.data_item
				methods: schema.statics

			# h MenuTab,
			# 	className: css['layout-form-keys-container']
			# 	tab_style:
			# 		background: @context.__theme.primary.inv[0]
			# 	content: schema.statics.map @mapMenuStaticsButtons

		# ADD NEW DOCUMENT TAB / VIEW
		new_doc_tab = h CreateDocView,
			reveal: @getPinMenuBoolean('add-doc',true)
			keys: schema.keys
			new_doc: props.new_doc
			keys_array: schema.keys_array
			onClick: @togglePinMenu.bind(@,'add-doc',true)
			onHide: @togglePinMenu.bind(@,null,false)
			onCreateDocument: props.onCreateDocument


		# SEARCH TAB / VIEW
		search_tab = h SearchView,
			reveal: @getPinMenuBoolean('search',true)
			onClick: @togglePinMenu.bind(@,'search',true)
			onHide: @togglePinMenu.bind(@,null,false)

			
			updateQueryItemAndSet: props.updateQueryItemAndSet
			updateQueryItem: props.updateQueryItem
			cloneQueryItemAndSet: props.cloneQueryItemAndSet
			cloneQueryItem: props.cloneQueryItem
			runQuery: props.runQuery
			setQueryItem: props.setQueryItem
			
			queries: props.queries
			queries_updated_at: props.queries_updated_at
			bookmarks: props.bookmarks
			bookmarks_updated_at: props.bookmarks_updated_at
			keys_array: schema.keys_array
			keys: schema.keys
			query_item: props.query_item


		# # LAYOUTS TAB / VIEW
		layouts_tab = h LayoutsView,
			reveal: @getPinMenuBoolean('layouts',true)
			onClick: @togglePinMenu.bind(@,'layouts',true)
			onHide: @togglePinMenu.bind(@,null,false)
			keys_array: schema.keys_array
			runQuery: props.runQuery
			updateQueryItemAndSet: props.updateQueryItemAndSet
			updateQueryItem: props.updateQueryItem
			cloneQueryItemAndSet: props.cloneQueryItemAndSet
			cloneQueryItem: props.cloneQueryItem
			setQueryItem: props.setQueryItem
			keys: schema.keys
			query_item: props.query_item


		# BASE SLIDE
		h Slide,
			dim: 40
			vert : no
			className: css['menu-slide']
			h Menu,
				left_menu_schema
				model_statics_tab
				model_title_tab
				
				new_doc_tab
				# bookmarks_tab
				search_tab
			h Menu,
				right_menu_schema
				layouts_tab
				

				
				
				

				

module.exports = MenuView
