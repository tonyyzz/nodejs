
var buf = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buf[i] = i + 97;
}

console.log(buf.toJSON())

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());