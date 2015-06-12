/**
 * 使用外部模块
 * 当在浏览器中访问 http://localhost:3000/?q=vicky 时，输出 vicky 的 md5 值，即 8af433519d6e385e89bb280f8002f2b2。
 */
var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(req, res) {
	var q = req.query.q;
	var md5Value = utility.md5(q);

	res.send(md5Value);
});
app.listen('3000', function(req, res) {
	console.log('qpp is runing at port 3000');
});