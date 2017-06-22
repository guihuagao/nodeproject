/**
 * Created by DELL on 2017/6/21.
 */

/**
 * 定义问好的函数 hello()
 */
function hello(){
    // 直接在控制台输出
    console.log('你好');
}
// 暴露普通变量
var username = '我是用户名';

// 定义好的变量、函数、其他的变量都需要向外暴露

// module.exports 相当于暴露一个对象，身上挂载hello和username
module.exports.hello = hello;
module.exports.username = username;