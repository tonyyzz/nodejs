var net = require('net');
var client = net.connect({ port: 8080 }, function () {
    console.log('连接到服务器！');
});
client.on('data', function (data) {
    console.log('服务器发送过来的数据：', data.toString());
    client.end();
});
client.on('end', function () {
    console.log('断开与服务器的连接');
});