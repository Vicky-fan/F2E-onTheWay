#querystring

##1. querystring.stringify序列化
demo1: 

```javascript
> querystring.stringify({name:'vicky', course:['javascript','node'], frome:''})
'name=vicky&course=javascript&course=node&frome='
```

deom2:

第二个参数可以修改参数与参数之间的连接符，默认`&`
```javascript
> querystring.stringify({name:'vicky', course:['javascript','node'], frome:''},',')
'name=vicky,course=javascript,course=node,frome='
```

deom3:

修改参数的key和value之间的链接符，默认是`=`
```javascript
> querystring.stringify({name:'vicky', course:['javascript','node'], frome:''},',',':')
'name:vicky,course:javascript,course:node,frome:'
```
##2. querystring.parse()反序列化
demo1:

```javascript
> querystring.parse('name=vicky&course=javascript&course=node&frome=')
{ name: 'vicky',
  course: [ 'javascript', 'node' ],
  frome: '' }
```

demo2:

当参数之间的连接符不是`&`的时候，需要第二个参数告诉pase参数之间的连接符
```javascript
> querystring.parse('name=vicky,course=javascript,course=node,frome=',',')
{ name: 'vicky',
  course: [ 'javascript', 'node' ],
  frome: '' }
```

demo3:

当参数的key和value之间的链接符不是`=`的时候，需要第三个参数告诉pase参数的key和value之间的连接符
```javascript
> querystring.parse('name:vicky,course:javascript,course:node,frome:',',',':')
{ name: 'vicky',
  course: [ 'javascript', 'node' ],
  frome: '' }
```

demo4:

第四个参数options，参数的个数默认是1000个，不能超过1000个。如果把options的maxkey设为0，参数的个数就不受限制
```javascript
> querystring.parse('name:vicky,course:javascript,course:node,frome:',',',':')
{ name: 'vicky',
  course: [ 'javascript', 'node' ],
  frome: '' }
```
##3. querystring.escape()转义
```javascript
> querystring.escape('哈哈')
'%E5%93%88%E5%93%88'
```
##4. querystring.unescape()反转义
```javascript
> querystring.unescape('%E5%93%88%E5%93%88')
'哈哈'
```