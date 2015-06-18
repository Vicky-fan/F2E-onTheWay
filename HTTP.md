#HTTP
##1.HTTP请求报头的具体含意
```html
Accept-Language: zh-cn,zh;q=0.5
Accept-Charset: GB2312,utf-8;q=0.7,*;q=0.7
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/5.0 (compatible; 域名)
Host: 域名
Connection: Keep-Alive
```
### Accept-Language: zh-cn,zh;q=0.5 
浏览器支持的语言分别是中文和简体中文，优先支持简体中文。  
详解：  
Accept-Language表示浏览器所支持的语言类型；  
zh-cn表示简体中文；zh 表示中文； 
q是权重系数，范围 0 =< q <= 1，q 值越大，请求越倾向于获得其“;”之前的类型表示的内容，若没有指定 q 值，则默认为1，若被赋值为0，则用于提醒服务器哪些是浏览器不接受的内容类型。 
###Accept-Charset: GB2312,utf-8;q=0.7,*;q=0.7 
浏览器支持的字符编码分别是 GB2312、utf-8 和任意字符，优先顺序是 GB2312、utf-8、*。 
详解： 
Accept-Charset告诉 Web 服务器，浏览器可以接受哪些字符编码； 
*表示任意字符编码，虽然 q 都是等于 0.7，但明确指定的 GB2312,utf-8 比 * 具有更高的优先级。 
###Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 
浏览器支持的 MIME 类型分别是 text/html、application/xhtml+xml、application/xml 和 */*，优先顺序是它们从左到右的排列顺序。 
详解： 
Accept表示浏览器支持的 MIME 类型； 
MIME的英文全称是 Multipurpose Internet Mail Extensions（多功能 Internet 邮件扩充服务），它是一种多用途网际邮件扩充协议，在1992年最早应用于电子邮件系统，但后来也应用到浏览器。 
text/html,application/xhtml+xml,application/xml 都是 MIME 类型，也可以称为媒体类型和内容类型，斜杠前面的是 type（类型），斜杠后面的是 subtype（子类型）；type 指定大的范围，subtype 是 type 中范围更明确的类型，即大类中的小类。 
Text：用于标准化地表示的文本信息，文本消息可以是多种字符集和或者多种格式的； 
text/html表示 html 文档； 
Application：用于传输应用程序数据或者二进制数据； 
application/xhtml+xml表示 xhtml 文档； 
application/xml表示 xml 文档。 
###Accept-Encoding: gzip, deflate
浏览器支持的压缩编码是 gzip 和 deflate。 
详解： 
Accept-Encoding表示浏览器有能力解码的编码类型； 
gzip是 GNU zip 的缩写，它是一个 GNU 自由软件的文件压缩程序，也经常用来表示 gzip 这种文件格式。 
deflate是同时使用了 LZ77 算法与哈夫曼编码（Huffman Coding）的一个无损数据压缩算法。 
###User-Agent: Mozilla/5.0 (compatible;域名)
使用的用户代理是 Mozilla/5.0 (compatible; 域名)。 
详解： 
User-Agent（用户代理），简称 UA，它是一个特殊字符串头，使得服务器能够识别客户端使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。 
Mozilla/5.0：Mozilla 是浏览器名，版本是 5.0； 
compatible（兼容的）表示平台是兼容模式； 
###Host: 域名
Host表示请求的服务器网址； 
###Connection: Keep-Alive
Connection表示客户端与服务连接类型； 
Keep-Alive表示持久连接；
