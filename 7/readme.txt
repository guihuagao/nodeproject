1.熟悉Express框架的使用
  Express是其他人使用一些包和自定义的包开发出来的一个搭建web应用的框架

  Express框架，有约定好的使用方式，按套路出牌

  使用Express框架搭建项目
     1.下载Express包
     2.加载包，创建web应用
     3.启动项目

   项目构造器   express-generator 用于快速搭建项目目录结构
     使用方式：
     全局安装   express-generator模块
     npm install express-generator -g
     推荐：以管理员的身份进行安装

     检测express-generator是否安装成功  express --version  4.15.0

使用项目构造器创建web应用

   express 应用名

   express blog  默认创建的是使用jade作为模板引擎

   express --view=ejs blog  创建项目 设置模板引擎为ejs

   切换到项目目录，下载依赖包  cd blog && npm install

   运行项目  npm start    http://localhost:3000/


 介绍Express框架搭建的应用的目录结构：
 blog   项目目录
   app.js   项目的入口文件（所有的操作必然经过该文件）
   bin    项目启动目录
     wwww  项目启动文件
   package.json  项目说明、配置文件
   {
     "name": "blog",   项目的应用名称
     "version": "0.0.0",  当前项目的版本号
     "private": true,

     //scripts用于调试的命令 使用npm启动
     "scripts": {
     //start约定好的命令
     //执行npm start 相当于启动了node ./bin/www
       "start": "node ./bin/www"
     },
     //依赖包说明
     "dependencies": {
       "body-parser": "~1.17.1",
       "cookie-parser": "~1.4.3",
       "debug": "~2.6.3",
       "ejs": "~2.5.6",
       "express": "~4.15.2",
       "morgan": "~1.8.1",
       "serve-favicon": "~2.4.2"
     }
   }

npm命令说明
   npm install 包名   下载指定的包
   npm install    默认找当前目录下的package.json文件，按照该文件中的dependencies依赖包说明下载依赖的模块

node_modules    存放第三方的依赖包目录
public         约定的存放静态资源的目录
  images       默认创建存放图片
  Javascripts   默认创建，存放js文件
  stylesheets   默认创建，存放css文件

 routes    路由模块目录
 views     视图模板目录

2.掌握Express框架中路由的设定
  路由：是我们约定好的访问方式

  路由的方法
     get:
        1.在地址栏上进行直接的访问
        2.表单以get方式提交数据
     post：
        1.表单中以post方式提交的数据

      使用什么样的方式进行访问，对应的要以什么方式进行接收

      all监听所有的方式请求
         一般使用all()作为中间件处理

      路由的路径
         /    根路由
         /info  查看信息路由

        用户访问/123不在指定的范围内，不能正常的访问

       路由的句柄handdler  处理函数
         允许写多个，写在前面的函数一定要移交权限给下一个


3.介绍ajax的使用，主要介绍使用jquery发送ajax

4.掌握ejs模板引擎，语法结构
    下载ejs模板引擎：npm install ejs
    设置好模板引擎和模板目录，存储在指定位置

5.框架中如何传递参数，接收参数

预习：mongodb相关资料