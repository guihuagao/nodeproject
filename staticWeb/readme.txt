创建一个静态资源网站
=========================
1.实现用户访问网页
    首页     index.html
    列表页   list.html
    详情页   details.html

2.所有的图片、js、css都能正常的加载

3.如果用户访问的地址不存在，直接返回404报错

约定路由：
   /       根路由，表示index.html首页
   /list   列表页
   /details 详情页


搭建web服务器

项目目录结构
app.js  项目的入口文件