//加载模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//加载路由模块
var index = require('./routes/index');
var users = require('./routes/users');
//创建项目应用
var app = express();

// view engine setup
//设置模板引擎与目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//设置中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//实现静态资源托管
app.use(express.static(path.join(__dirname, 'public')));
//设置路由给对应的路由模块
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
//捕获404错误
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler

//错误信息处理函数
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //设置错误信息模板的响应
  res.render('error');
});

//向外暴露应用
module.exports = app;
