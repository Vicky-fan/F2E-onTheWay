/**
 * 使用 eventproxy 控制并发
 * 输出 CNode(https://cnodejs.org/ ) 社区首页的所有主题的标题，链接和第一条评论，以 json 的格式。
 */
var express = require('express');
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var app = express();
var cnodeUrl = 'https://cnodejs.org/';

app.get('/', function (req, sres, next) {
	superagent.get(cnodeUrl)
	.end(function (err , res) {
		if(err) {
			return console.log(err);
		}
		var topicUrls = [];
		var $ = cheerio.load(res.text);

		$('#topic_list .topic_title').each(function (idx, element) {
			var $element = $(element);
			 var href = url.resolve(cnodeUrl, $element.attr('href'));

			 topicUrls.push(href);
		});

		var ep = new eventproxy();

		ep.after('topic_html', topicUrls.length, function (topics) {
			topics =  topics.map(function (topicPair) {
				var topicUrl = topicPair[0];
				var topicHtml = topicPair[1];
				var $ = cheerio.load(topicHtml);

				return ({
					title: $('topic_full_title').text().trim(),
					href: topicUrl,
					comment1: $('.reply_content').eq(0).text().trim(),
					point: $('.big').text().trim()
				});
			});

			// sres.send('final');
			sres.send(topics);
		});

		topicUrls.forEach(function (topicUrl) {
			superagent.get(topicUrl)
				.end(function (err, res) {
					// console.log('fetch' + topicUrl + 'successful');
					ep.emit('topic_html', [topicUrl, res.text]);
				})
		});
	});
});
app.listen('3000', function(req, res) {
	console.log('qpp is runing at port 3000');
});