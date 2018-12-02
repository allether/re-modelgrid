css = require './ModelGrid.less'
{render,h,Component} = require 'preact'
cn = require 'classnames'


class JsonView extends Component
	render: (props)->
		key_map = {}
		val_map = {}

		props.colors = props.colors || {}

		sep = "🧝"
		str = JSON.stringify props.json,(key,value)->
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
			else if val == 'true' || val == 'false'
				children[i-1] = children[i-1].slice(0,-1)
				t = 'boolean'
				children[i+1] = children[i+1].slice(1)
			else if val_map[val]
				t = 'string'
			
			if t
				children[i] = h 'span',
					style: color: props.colors[t]
					val

		h 'div',
			className: css['json-view']
			children

module.exports = JsonView