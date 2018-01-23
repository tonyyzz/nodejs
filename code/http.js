// var http = require("http");

// function onRequest(request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello World");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log("服务器启动成功");

var server = require("./server");
var router = require("./router");
server.start(router.route);