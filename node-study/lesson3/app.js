/**
 * 使用 superagent 与 cheerio 完成简单爬虫
 * 当在浏览器中访问 http://localhost:3000/ 时，输出 CNode(https://cnodejs.org/ ) 社区首页的所有帖子标题和链接，
 * 以 json 的形式
 */
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
	superagent.get('https://cnodejs.org/')
		.end(function(err, sres) {
			if(err) {
				return next(err);
			}

			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .topic_title').each(function(idx, element) {
				var $element = $(element);

				items.push({
					title: $element.attr('title'),
					href: 'https://cnodejs.org/' + $element.attr('href')
				});
			});

			res.send(items);
		});
});
app.listen('3000', function(req, res) {
	console.log('qpp is runing at port 3000');
});