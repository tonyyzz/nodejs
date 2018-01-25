var event = require('events')
var emitter1 = new event.EventEmitter();
var doamin = require('domain');
//创建域
var domain1 = doamin.create();

domain1.on('error', (err) => {
    console.log('doamin1 处理这个错误（' + err.message + '）');
})

//显示增加事件
doamin1.add(emitter1)
emitter1.on('error',function(err){
    console.log("监听器处理此错误 ("+err.message+")");
 });
 emitter1.emit('error',new Error('通过监听器来处理'));