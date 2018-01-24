//inherits
// var util = require("util");
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function () {
//         console.log('hello ' + this.name);
//     }
// }
// Base.prototype.showName = function () {
//     console.log(this.name)
// }
// function Sub() {
//     this.name = 'sub';
// }
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.sayHello();
// objBase.showName();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// console.log(objSub);


//inspect
// var util = require('util');
// function Person() {
//     this.name = 'yzz';
//     this.toString = () => {
//         return this.name;
//     }
// }
// var obj  =new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true,null,true));

//isArray
// var util = require('util')
// console.log(util.isArray([]))
// console.log(util.isArray({}))


//isRegExp
// var util = require('util')
// console.log(util.isRegExp(/\d/))
// console.log(util.isRegExp('rt'))
// console.log(util.isRegExp(new RegExp('rt')))


//isDate
// var util = require('util')
// console.log(util.isDate(new Date()));
// console.log(util.isDate({}));

var util = require('util');
console.log(util.isError(new Error()))
console.log(util.isError(new TypeError()))
console.log(util.isError({ name: 'Error', message: 'error message' }));