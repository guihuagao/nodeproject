/**
 * Created by DELL on 2017/6/21.
 */
// 加载模块
var hello= require('./selfnode');
console.log(hello);

// 调用暴露的对象身上的方法
hello.hello();

// 输出值
console.log(hello.username);