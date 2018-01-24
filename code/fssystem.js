//文件系统
// var fs =require('fs')
// //异步读取
// fs.readFile('input.txt',function(err,data){
//     if(err)return console.error(err.stack)
//     console.log('异步',data.toString())
// })
// //同步读取
// var dataSync = fs.readFileSync("input.txt");
// console.log('同步',dataSync.toString())
// console.log("程序执行完毕。");

// var fs = require('fs');
// console.log('准备打开文件')
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) return console.error(err);
//     console.log('文件打开成功',fd)
//     //setInterval(() => { console.log(Date.parse(new Date)) }, 2000)
// })


//stat
// var fs = require('fs')
// fs.stat('input.txt',(err,stats)=>{
//     if(err)return console.error(err)
//     console.log('获取文件信息成功')
//     console.log(stats)
// })

//unlink
// var fs = require('fs')
// fs.unlink('input.txt',()=>{
//     console.log('删除文件成功')
// })

//mkdir
// var fs = require('fs')
// fs.mkdir('temp', () => {
//     console.log('创建目录成功')
// })

//readdir
// var fs = require('fs')
// fs.readdir('E:\\code\\nodejs\\code', (err, files) => {
//     if (err) return console.error(err)
//     console.log("目录读取成功")
//     console.log(files)
// })

//删除目录 rmdir
var fs = require('fs')
fs.rmdir('temp', () => {
    console.log('删除目录成功')
})