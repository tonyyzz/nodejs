var net = require('net')
var server = net.createServer((connection) => {
    console.log('client connected');

    connection.write('Hello World!\r\n');

    connection.on('end', function () {
        console.log('客户端关闭连接');
    });

    connection.pipe(connection);

}).listen(8080, function () {
    console.log('server is listening');
});
