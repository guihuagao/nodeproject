一、Express框架
express-generator  Express应用的构造器

创建项目
     express --view=ejs blog
 切换到项目目录，安装依赖包
     cd blog &&npm install
 运行项目
     npm start

二、ejs模板的使用和数据的分配

    ejs语法结构
    <% %>   在ejs模板中只要想输出数据<% %>
    输出<%=  %>

三、关于express路由的设置与参数的请求与获取
     req.query    针对get方式
     req.body     针对post方式
     req.params   针对特殊路由： /topic/aaaaaaa   ----/topic/:id (占位符)

四、Ajax
     异步的JavaScript和XML
     目的：在不刷新页面的情况下请求数据

     学习使用JQuery发送Ajax
       $.ajax()
       $.get()
       $.post()