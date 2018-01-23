var fs = require("fs");
var zlib = require("zlib");

//文件压缩

//将input.txt文件中的内容经过压缩后存放到output.txt中
var readStream = fs.createReadStream("input.txt");
var gzip = zlib.createGzip();
var writeStream = fs.createWriteStream("input.txt.gz");
//链式流
readStream.pipe(gzip).pipe(writeStream);
console.log("文件压缩完成");