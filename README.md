# nodeproject
学习node.js的整个过程代码以及小项目的制作

# git bash定位所在目录

1.提供了类似于linux的操作环境，运行相关的linux命令

2.相关命令

   ls     查看当前目录的所有文件和目录

   cd     切换目录


supervisor  检测者
==============

1、当文件内容发生改变时，自动重启文件

下载安装

npm install 包名  当前下创建node_modules目录里面存放包

任何位置检测 npm install -g 包名   -g全局安装

使用方式

node 文件名

supervisor node 文件名    只要文件发生变化，程序自动重启


借助express框架搭建web应用
==============

1.下载模块express

2.加载express模块搭建服务器

3.使用ejs模板引擎

        1.下载ejs模板引擎

        2.加载模板引擎

        3.设置模板引擎，设置模板存储的目录

        4.模板文件在存储时，要以.ejs为扩展名

 4.项目构造器   express-generator 用于快速搭建项目目录结构