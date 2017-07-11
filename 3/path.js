/**
 * Created by DELL on 2017/7/4.
 */
//解析路径的模块

//加载模块
var path=require('path');

//定义路径
var url='/user/index.html';

/*解析路径
 { root: '/',   表示根
 dir: '/user',   表示目录
 base: 'index.html',    文件名（包括扩展名）
 ext: '.html',          扩展名
 name: 'index' }        单纯的文件名


 */
var pathObj=path.parse(url);

console.log(pathObj);

//path.firname()  获取路径名
var dirname = path.dirname(url);
console.log(dirname);

//path.basename()  获取文件名
var basename=path.basename(url);
console.log(basename);

//path.extname()  获取文件扩展名
var extname=path.extname(url);
console.log(extname);

//path.format    格式化对象返回字符串
var objUrl={
    dir:'/memeda',
    base:'demo.txt'
}
var strUrl=path.format(objUrl);
console.log(strUrl);

// path.isAbsolute()  判断是否为绝对路径（是否以/开头的路径）
var url='./memeda/1.txt';
var res=path.isAbsolute(url);
console.log(res);

//path.join() 连接路径
var dir='./memeda';
var filename='./test.html';

var newPath=path.join(dir,filename);

console.log(newPath);

//定义路径
var url='./';
/*
 path.resolve()  返回路径的绝对地址
   windows系统下，返回的是以盘符为出发点的路径
   linux系统下，返回的是以/为开始的路径

 */
var newPath=path.resolve(url);
console.log(newPath);