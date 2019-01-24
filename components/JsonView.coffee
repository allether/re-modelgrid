css = require './ModelGrid.less'
cn = require 'classnames'


class JsonView extends Component
	render: ->
		key_map = {}
		val_map = {}

		
		sep = "🧝"
		str = JSON.stringify @props.json,(key,value)->
			if typeof value == 'string' || typeof value == 'number' || typeof value == 'boolean'
				val_map[value] = true
				return sep+value+sep
			return value
		,4
		str = str.replace /"[^"]*":/g, (val)->
			val = val.substring(1,val.length-2)
			key_map[val] = true
			return ''+sep+val+sep+':'
		children = str.split(sep)

		# children = children.map (val,i)->
		for val,i in children 
			if i % 2 == 0
				continue
			t = null
			if key_map[val]
				t = 'key'
			if !isNaN(Number(val))
				children[i-1] = children[i-1].slice(0,-1)
				t = 'number'
				children[i+1] = children[i+1].slice(1)
			else if val == 'true' || val == 'false' || val == 'null' || val == 'undefined'
				children[i-1] = children[i-1].slice(0,-1)
				t = 'boolean'
				children[i+1] = children[i+1].slice(1)
			else if val_map[val]
				t = 'string'
				val = '"' + val + '"'
				children[i-1] = children[i-1].slice(0,-1)
				children[i+1] = children[i+1].slice(1)

			
			if t
				children[i] = h 'span',
					key: i
					style: color: @props.colors?[t]
					val

		h 'div',
			className: css['json-view']
			style: @props.style
			children

module.exports = JsonView