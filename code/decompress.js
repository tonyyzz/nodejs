var fs = require("fs");
var zlib = require("zlib");

//文件解压
//链式流

fs.createReadStream("input.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("input2.txt"));
console.log("文件解压完成");