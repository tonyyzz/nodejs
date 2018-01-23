var http = require("http");
var url = require("url");
module.exports = {
    start: (route) => {
        function onRequest(request, response) {
            var pathname = url.parse(request.url).pathname;
            console.log();
            console.log(Date.parse(new Date()));
            console.log("Request for " + pathname + " received.");

            route(pathname);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write("yzz");
            response.end();
        }
        http.createServer(onRequest).listen(8080);
        console.log("Server has started.");
    }
}
