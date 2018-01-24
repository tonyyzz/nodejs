//get
// var http = require('http')
// var url = require('url')
// var util = require('util')
// http.createServer((req, resp) => {
//     resp.writeHead(200, "Content-Type", "text/html;charset=utf-8");
//     resp.end(util.inspect(url.parse(req.url, true)))
// }).listen(3000)
// console.log('服务器启动成功') //http://localhost:3000

//post
var http = require('http')
var querystring = require('querystring');
var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer((req, resp) => {
    var body = '';
    req.on('data', (chunk) => {
        body += chunk;
    })
    
    req.on('end', () => {
        console.log(body)
        body = querystring.parse(body);
       
        resp.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        if (body.name && body.url) {
            resp.write('网站名：' + body.name);
            resp.write('<br />');
            resp.write("URL:" + body.url);
        } else {
            resp.write(postHTML);
        }
        resp.end();
    })
}).listen(3000);
 console.log('服务器启动成功') //http://localhost:3000