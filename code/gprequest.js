//get
var http = require('http')
var url = require('url')
var util = require('util')
http.createServer((req, resp) => {
    resp.writeHead(200, "Content-Type", "text/html;charset=utf-8");
    resp.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)
console.log('服务器启动成功') //http://localhost:3000

//post
