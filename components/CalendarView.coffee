{Input,MenuTab,SquareLoader,Section,Menu,Bar,Overlay,AlertOverlay,StyleContext,AlertDot} = require 're-lui'
{List} = require 'react-virtualized/dist/commonjs/List'
Slide = require 're-slide'
css = require './ModelGrid.less'
cn = require 'classnames'
dayjs = require 'dayjs'

class CalendarView extends Component

	constructor: (props)->
		super(props)
		today = new Date()
		@state = 
			day_keys: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
			mode: 'week' #mode - week / day (each row is either a week or a day)
			today: today
			select_ranges: []
			calendar: @buildCalendar()


	buildCalendar: =>
		date_start = dayjs @props.query_item.min_date || (Date.now() - xDays(365*2))
		date_end = dayjs @props.query_item.max_date || (Date.now() + xDays(365))

		cal =
			weeks: []
		days = Math.abs(date_end.diff(date_start,'day'))
		weeks = cal.weeks
		today = new Date()
		week_i = -1
		p_day_n = 7
		prev_month_str = null

		for day in [0...days]
			day_date = date_start.add(day,'day')
			month_i = day_date.month()
			day_date._date_string = day_date.$d.toDateString()
			day_n = day_date.day()
			month_str = day_date.month()

			if day_n < p_day_n || month_str != prev_month_str
				if week_i >= 0
					weeks[week_i].max_day = p_day
				if prev_month_str != month_str
					week_i++
					weeks[week_i] = 
						month_string: day_date.format('MMMM')
						month_i: month_i
						min_day: day_date
						max_day: day_date
						month_year: day_date.year()
				week_i++
				weeks[week_i] = []
			weeks[week_i][day_n] = day_date
			if !weeks[week_i].min_day
				weeks[week_i].min_day = day_date
			weeks[week_i].max_day = day_date
			weeks[week_i].month_i = month_i
			
			if today < weeks[week_i].max_day.$d && today > weeks[week_i].min_day.$d
				cal.current_week_i = week_i
			prev_month_str = month_str
			p_day_n = day_n
			p_day = day_date

		return cal
		





	# onScroll: (e)=>
	# 	r_h = @_base?.clientWidth/7
	# 	min_week = @state.calendar.weeks[Math.floor((e.scrollTop-e.clientHeight*2)/r_h)]
	# 	max_week = @state.calendar.weeks[Math.floor((e.scrollTop+e.clientHeight*3)/r_h)]
	# 	if !min_week
	# 		min_week = @state.calendar.weeks[0]
	# 	if !max_week
	# 		max_week = @state.calendar.weeks[@props.user_weeks.length-1]

		

	onDayClick: (day)->
		date_string = day.format("ddd MMM D, YYYY")
		face.setAltSlideView(undefined)
		face.searchValue(date_string)



	weekRow: (week,week_index)=>
		r_h = @_base?.clientWidth/7 || 0


		if week.month_i % 2 == 0
			month_bg = @context.primary.inv[2]
			month_bg_alt = @context.primary.inv[1]
		else
			month_bg = @context.primary.inv[3]
			month_bg_alt = @context.primary.inv[2]


		if week.month_string
			return h 'div',
				className: css['calendar-week-month-title']
				style:
					background: month_bg
				h Section,
					title: [h('span',{key:1,style:{paddingRight:'6px',color:@context.primary.color[0]}},week.month_string),week.month_year]



		active_week = week.max_day.$d > @state.today > week.min_day.$d
		# log week.max_day.$d < @state.today > week.min_day.$d

		[0...7].map (i)=>
			day = week[i]

			active_day = active_week && @state.today.getDay() == i



				
			if week_index % 2 == 0
				if i % 2 == 0
					bg = month_bg
				else
					bg = month_bg_alt
			else
				if i % 2 != 0
					bg = month_bg
				else
					bg = month_bg_alt

			if !day
				return h 'div',
					key: i
					className: cn(css['calendar-week-day'],css['calendar-week-day-null'])
					style: 
						background: month_bg

			
			if active_week
				color = @context.primary.color[0]
			else
				color = @context.primary.color[2]

			h 'div',
				key: i
				className: css['calendar-week-day']
				style:
					background: bg
					color: color
				h 'div',
					className: cn(css['calendar-week-day-date'],r_h < 60 && css['calendar-week-day-date-full'])
					# style:
					# 	background: @context.secondary.color[0]
					# 	color: @context.secondary.inv[0]
					day.date()
				# icon || null
				# job_counts || null
				# r_h >= 60 && day_jobs?[0].status <= 1 && @renderJobTime(day_jobs[0])


	# renderJobTime: (job)=>
	# 	if !job._time_string
	# 		job._time_string = dayjs(job.scheduled_at).format('h:mmA')

	# 	h 'div',
	# 		className: 'week-day-time'
	# 		job._time_string


	renderWeekRow: (opts)=>
		# log opts.index
		week = @state.calendar.weeks[opts.index]
		active_week = week.max_day.$d > @state.today > week.min_day.$d
		if active_week
			opts.style = Object.assign {},opts.style,
				borderTop: '4px solid '+@context.secondary.color[0]
		
		return h 'div',
			style: opts.style
			key: opts.key
			className: css['calendar-week-row']
			@weekRow(week,opts.index)

			


	slideRef: (slide)=>
		if !slide
			@_base = null
		else
			@_base = slide._outer
			@forceUpdate()


	setScrollToJobWeek: (job)->
		d = new Date(@props.job_item?.scheduled_at)
		for week,i in @props.user_weeks
			# log week
			if d >= week.min_day.$d && d <= week.max_day.$d
				@state.scroll_to_index = i
				break
	

	componentWillMount: ->
		if @props.job_item
			@setScrollToJobWeek(@props.job_item)

	componentWillUpdate: (props,state)->
		if props.job_item && @props.job_item != props.job_item
			@setScrollToJobWeek(props.job_item)

	componentDidUpdate: (props,state)=>
		if @props.jobs_days_timestamp != props.jobs_days_timestamp
			@_list?.recomputeGridSize()

	listRef: (e)=>
		@_list = e


	renderTodayCircle: ->
		h 'div',
			className: 'circle calendar-today-circle'
			style:
				border: '4px solid '+@context.secondary.color[2]
				background: @context.secondary.color[0]


	renderDayKeys: ->
		@state.day_keys.map (key,i)=>
			h 'div',
				key: key
				className: css['calendar-day-key']
				style:
					background: (@state.today.getDay() == i && @context.secondary.color[0]) || (i%2 && @context.primary.inv[0])
					color: @state.today.getDay() == i && @context.secondary.inv[1]
					width: @_base?.clientWidth/7 || '100%'
				key
				

	toggleMode: =>
		if @state.mode == 'week'
			@setState
				mode: 'day'
		else
			@setState
				mode: 'week'


	render: ->
		
		# if @state.scroll_to_index >= 0 
		# 	scroll_week_index = @state.scroll_to_index
		
		scroll_week_index = @state.calendar.current_week_i
		# log @state.calendar.weeks
		
		# log @state.calendar
		calendar_list = h List,
			rowHeight: @_base?.clientWidth/7 || 0
			ref: @listRef
			scrollToIndex: scroll_week_index
			scrollToAlignment: 'center'
			# onScroll: @onScroll
			rowCount: @state.calendar.weeks.length
			rowRenderer: @renderWeekRow
			height: @_base?.clientHeight || 0
			width: @_base?.clientWidth || 0


		if @state.mode == 'week'
			calendar_keys = h Slide,
				dim: DIM
				className: css['calendar-day-keys']
				style:
					background: @context.primary.inv[1]
				@renderDayKeys()


		h Slide,
			className: css['calendar-view']
			vert: yes
			dim: DIM*7
			style:
				background: @context.primary.inv[2]
			ref: @slideRef
			h Bar,
				dim: DIM
				vert: no
				h Input,
					i: 'close'
					type: 'button'
					onClick: @props.onReset
				h Input,
					i: 'view_stream'
					type: 'button'
					select: @state.mode == 'week'
					onClick: @toggleMode
			calendar_keys
			calendar_list


CalendarView.contextType = StyleContext
module.exports = CalendarView