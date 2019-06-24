Slide = require 're-slide'
{StyleContext,Input,MenuTab,Menu,Bar} = require 're-lui'
css = require './ModelGrid.less'
MAX_CHAR = 32


class BookmarksView extends Component
	constructor: (props)->
		super(props)


	onClickBookmark: (bookmark_query)=>
		@props.setBookmarkQueryItem(bookmark_query)


	renderBookmarkItem: (bookmark_query)=>
		h Input,
			onClick: @onClickBookmark.bind(@,bookmark_query)
			key: bookmark_query._id
			select: @props.query_item._id == bookmark_query._id
			label: '#'+bookmark_query.label
			type: 'button'

			
	render: ()->
		h 'div',
			className: css['bookmarks-container']
			style:
				background: @context.primary.inv[1]
			h Bar,
				btn: no
				vert: yes
				@props.bookmarks.map @renderBookmarkItem
			


BookmarksView.contextType = StyleContext
module.exports = BookmarksView