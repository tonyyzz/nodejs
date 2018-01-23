var fs = require("fs");

// //读取数据
// var data = '';
// //创建可读流
// var readStream = fs.createReadStream("input.txt");
// //设置编码
// readStream.setEncoding("utf8");

// //处理流事件 data,error,end

// readStream.on('data',function(chunk){
//     data+=chunk;
// });
// readStream.on('error',function(err){
//     console.log(err.stack)
// })
// readStream.on('end',function(){
//     console.log('data:',data);
// })
// console.log("程序处理完毕");

//写入数据
// var data = "yzz2";
// //创建写入流
// var writeStream = fs.createWriteStream('output.txt');
// //设置写入编码
// writeStream.write(data, 'utf8');
// //标记文件尾
// writeStream.end();
// //处理流事件 finish,error
// writeStream.on("finish", function () {
//     console.log("写入完成！");
// })
// writeStream.on("error", function (err) {
//     console.log(err.stack);
// })

// console.log("程序处理完毕");


//管道流 将一个文件的内容复制到另一个文件中
var readStresm = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("output.txt");
readStresm.pipe(writeStream);
console.log("程序执行完毕");
