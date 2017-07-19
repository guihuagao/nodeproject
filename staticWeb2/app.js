/**
 * Created by DELL on 2017/7/11.
 */
//做一个静态资源托管网站

//加载express模块
var express=require('express');
var path=require('path');

//实例化应用
var app=new express();


//使用ejs模板引擎响应模板文件
//设置模板引擎
app.set('view engine','ejs');

//设置模板存储的目录
app.set('views',path.join(__dirname,'views'));

//静态资源托管
app.use(express.static(path.join(__dirname,'public')));

//设置路由
app.get('/',function (req,res) {
    //响应首页
    res.render('index');
});

//列表页
app.get('/list',function (req,res) {
    //响应列表页
    res.render('list');
});

//详情页
app.get('/details',function (req,res) {
    //响应详情页
    res.render('details');
});

//创建web服务器，设置监听的IP地址、端口号
app.listen('100','127.0.0.1',function () {
    console.log('web服务器已经运行了...');
});