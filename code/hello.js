//1、创建模块
// exports.world = () => {
//     console.log("hello world");
// }


//2、模块接口
// function Hello() {
//     var name;
//     this.setName = (thyname) => {
//         this.name = thyname;
//     };
//     this.sayHello = () => {
//         console.log("hello " + this.name)
//     }
// }
// module.exports = Hello;


//3
module.exports = {
    test: () => {
        console.log("test")
    }
}
