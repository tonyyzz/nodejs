

var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(50);
//绑定事件以及事件的处理程序
eventEmitter.on("connection", function (index, m) {
    console.log("连接成功 ", index, m);
});

//触发事件
eventEmitter.emit("connection", 1, 4);

setTimeout(function () {
    eventEmitter.emit('connection', 2, 5);
}, 1000);

console.log("程序执行完毕。");

//eventEmitter.removeAllListeners("connection");


// for (let i = 0; i < 30; i++) {
//     eventEmitter.on("connection", function () {
//         console.log("连接成功"+i+" " );
//     });
// }

// for (let i = 0; i < 20; i++) {
//     eventEmitter.emit("connection");
// }

var eventArr = eventEmitter.listeners("connection");

console.log(eventArr);

eventArr[0](6, 6);

var count = eventEmitter.listenerCount("connection");
console.log("个数", count);
eventEmitter.on("error", function () {
    console.log("error");
});
eventEmitter.emit('error'); 