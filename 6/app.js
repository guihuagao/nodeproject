/**
 * Created by DELL on 2017/7/11.
 */


//项目的路口文件

    /*
    app.js充当的是入口文件，所有的操作全部经过app.js
     */

//加载模块
var express=require('express');
var path=require('path');
//实例化一个应用

var app=new express();

//使用系统自定义的中间件，托管静态资源文件
//约定当前目录下的public目录，作为静态资源存储的目录
//在模板中加载资源时，使用 /  表示的是public目录
app.use(express.static(path.join(__dirname,'public')));

//设置模板引擎，ejs模板引擎
app.set('view engine','ejs');

//设置模板存储的目录
app.set('views',path.join(__dirname,'views'));

/*
将路由模块单独的取出来。约定：
/
/login
/reg
统一交给index.js路由模块处理

/user/info
/user/edit
/user/shoucang
和用户相关,统一交给user.js的模块进行处理

 */

//加载自定义的路由模块
var index=require('./routes/index');
var user=require('./routes/user');
var admin=require('./routes/admin');

//将路由交给指定的路由模块进行处理
app.use('/',index);
app.use('/user',user);

//设置后台路由  /admin
app.use('/admin',admin);

//创建web应用，设置监听的ip地址和端口号
app.listen('8080','localhost',function () {
    console.log('在localhost:8080端口运行')
});
