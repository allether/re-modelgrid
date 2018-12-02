obj = 
	a: 10
	b: 12
	g: ["apple","orange","bean"]
key_map = {}





sep = "⌇"
str = JSON.stringify obj,(key,value)->
	if typeof value == 'string' || typeof value == 'number' || typeof value == 'boolean'
		return sep+value+sep
	return value
,4
str = str.replace /"[^"]*":/g, (val)->
	return sep+val.substring(1,val.length-2)+sep
console.log str.split("⌇")
# # for char in str
# # 	if char

# # arr = str.indexOf /"[-\s\w]+":/g
# str = str.replace /"[-\s\w]+":/g,(val)->
# 	val.replace()
# 	return "test"
# console.log str