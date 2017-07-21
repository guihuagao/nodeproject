一、借助express框架搭建web应用

1.下载模块express
2.加载express模块搭建服务器

二、express的基本应用
  使用ejs模板引擎
     1.下载ejs模板引擎
     2.加载模板引擎
     3.设置模板引擎，设置模板存储的目录
     4.模板文件在存储时，要以.ejs为扩展名

三、Express项目的目录结构
    app.js    项目的入口文件、启动文件
    node_modules   第三方模块存储目录
    public     静态资源存放目录
    views      模板存放目录
    routes     路由模块目录

四、路由模块
    创建每一个路由模块，用于处理相关的路由

    index.js  处理相关的路由
                   /
                   /list
                   /details
                   /topic

    user.js   只处理和用户相关的路由
              /user
              /user/info

    topic.js  话题相关路由
