//函数
function say(word) {
    console.log(word);
};
function execute(func, val) {
    func(val);
};
execute((params) => {
    console.log("params " + params)
}, "hello world");