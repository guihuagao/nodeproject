/**
 * Created by DELL on 2017/7/15.
 */
//加载模块
var express=require('express');
var path=require('path');

//实例化一个app应用
var app=new express();

//使用系统自定义的中间件express.static()来托管静态资源
app.use(express.static(path.join(__dirname,'public')));

/*
模板引擎：专门用于处理加载模板加载，模板中变量使用的包
    ejs   模板引擎
 */

//按照框架的方式，设置模板引擎
app.set('view engine','ejs');

//设置视图模板存储目录
app.set('views',path.join(__dirname,'views'));

/*
创建专门的路由模块，进行相关路由的处理

 */

var index=require('./routes/index');
var user=require('./routes/user');

//将相关的路由交给指定的路由文件进行处理
app.use('/',index);

//约定将 /user开头的路由，交给user路由模块进行处理
app.use('/user',user);


//监听ip地址和端口号
app.listen(8080,'localhost',function () {
    console.log('web应用已经在localhost:8080位置运行了');
});