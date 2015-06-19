#URL

## 目录：
1. [url.parse](#1-url.parse)
2. [url.format](#2-url.format)
3. [url.resolve](#1-url.resolve)
---
```javascript
$ node
> url
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] }
  ```

##1 url.parse
> url.parse(urlStr[, parseQueryString][, slashesDenoteHost])
> Take a URL string, and return an object.

```javascript
> url.parse('https://nodejs.org:8080/api/url.html?frome=google&course=node#floor1')
{ protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'nodejs.org:8080',
  port: '8080',
  hostname: 'nodejs.org',
  hash: '#floor1',
  search: '?frome=google&course=node',
  query: 'frome=google&course=node',
  pathname: '/api/url.html',
  path: '/api/url.html?frome=google&course=node',
  href: 'https://nodejs.org:8080/api/url.html?frome=google&course=node#floor1' }
  ```
  标准url的组成部分：

  * protocol: 指定的是底层使用的协议（http/https）
  * slashes: 是否有协议的双斜线
  * host: http服务器的ip地址或者是域名
  * port: 端口，默认是80端口，如果使用了别的端口就必须指明
  * hostname: 主机名 
  * hash: 哈希值
  * search: 查询字符串参数
  * query: 发送给http服务器的数据
  * pathname: 访问资源路径名
  * path: 路径
  * href: 没被解析的完整的超链接

  第二个参数用来指定query这个模块是用querystring module还是用url本来的，如果设为true就会用querystring module，默认是false

  ```javascript
  > url.parse('https://nodejs.org:8080/api/url.html?frome=google&course=node#floor1', true)
{ protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'nodejs.org:8080',
  port: '8080',
  hostname: 'nodejs.org',
  hash: '#floor1',
  search: '?frome=google&course=node',
  query: { frome: 'google', course: 'node' },
  pathname: '/api/url.html',
  path: '/api/url.html?frome=google&course=node',
  href: 'https://nodejs.org:8080/api/url.html?frome=google&course=node#floor1' }
  ```
  query变成对象，但是search还是string

  第三个参数设为true, treat //nodejs.org/api/url.html as { host: 'nodejs.org', pathname: '/api/url.html' } rather than { host: null, pathname: '//nodejs.org/api/url.html' }. Defaults to false.
  ```javascript
  > url.parse('//nodejs.org/api/url.html',true)
{ protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '//nodejs.org/api/url.html',
  path: '//nodejs.org/api/url.html',
  href: '//nodejs.org/api/url.html' }
  ```
  ```javascript
  > url.parse('//nodejs.org/api/url.html',true, true)
{ protocol: null,
  slashes: true,
  auth: null,
  host: 'nodejs.org',
  port: null,
  hostname: 'nodejs.org',
  hash: null,
  search: '',
  query: {},
  pathname: '/api/url.html',
  path: '/api/url.html',
  href: '//nodejs.org/api/url.html' }
  ```



##2 url.format
> url.format(urlObj)
> Take a parsed URL object, and return a formatted URL string.

  ```javascript
  > url.format({ protocol: 'https:',
...   slashes: true,
...   auth: null,
...   host: 'nodejs.org:8080',
...   port: '8080',
...   hostname: 'nodejs.org',
...   hash: '#floor1',
...   search: '?frome=google&course=node',
...   query: 'frome=google&course=node',
...   pathname: '/api/url.html',
...   path: '/api/url.html?frome=google&course=node',
...   href: 'https://nodejs.org:8080/api/url.html?frome=google&course=node#floor1' })
'https://nodejs.org:8080/api/url.html?frome=google&course=node#floor1'
  ```
  生成一个完整的合法的url地址

  ## 3 url.resolve
  > url.resolve(from, to)
  > Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag.

  ```javascript
  > url.resolve('https://nodejs.org/', '/api/url.html')
'https://nodejs.org/api/url.html'
  ```




