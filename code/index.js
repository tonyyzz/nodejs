// process.on('exit',function(code){
//     console.log("退出代码为%d",code)
// })
// process.exit(1)
//console.log(process.getgroups())

// process.on("signal",function(s){
//     console.log("signal",s);
// })
// process.kill(process.pid,"SIGINT")
// console.log(process.memoryUsage())
// process.nextTick(function(){
//     console.log(56)
// })
setTimeout(() => {
    console.log(process.uptime())
}, 2000);
