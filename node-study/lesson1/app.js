/**
 * 简单的 express 应用
 * 当在浏览器中访问 http://localhost:3000/ 时，输出 Hello World
 */
var express = require('express');
var app =  express ();
app.get('/',function(req, res) {
	res.send('hello world2');
})
app.listen(3000, function() {
	console.log('app is listening at port 3000');
});