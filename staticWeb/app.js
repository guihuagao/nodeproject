/**
 * Created by DELL on 2017/7/4.
 */

//搭建web静态资源服务器

/*
 路由：大家约定好的访问方式

 约定路由：
 /           根路由，首页
 /list       列表页
 /details    详情页

 */

//加载模块
var http=require('http');
var fs=require('fs');
var path=require('path');
//加载获取文件类型的模块
var getType=require('./getType')

//创建web服务器，设置监听的端口号和IP地址
http.createServer(function (req,res) {

   // console.log(req.url);
    //手动过滤收藏夹图标
    if(req.url=='/favicon.ico'){
        return false;
    }

    //响应首页
    if(req.url=='/'){

        fs.readFile('./index.html',function (err,data) {
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        });

    }else if(req.url=='/list'){
        fs.readFile('./list.html',function (err,data) {
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        });

    }else if(req.url=='/details'){
        fs.readFile('./details.html',function (err,data) {
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        });

    } else{
        //发起了文件请求或者是其他不在指定路由内的请求
        ///static/img/a.jpg
         //相当于访问当前static目录下的对应的文件
        //req.url   请求路径
        fs.readFile('.'+req.url,function (err,data) {
            //有错误信息就说明路由不存在，当前要读取的文件不存在
            if(err){
                fs.readFile('./error.html',function (err,data) {
                    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
                    res.write(data);
                    res.end();
                });
            }else{
                //响应文档头
                //获取文件的后缀名
                var extname=path.extname(req.url);
                //有文档的扩展名就能获得文件的类型



                //根据文档类型设置文档类型

                res.writeHead(200,{'content-type':getType(extname)});
                res.write(data);
                res.end();
            }

        })
    }

    /*如果用户请求的就是一个文件，那么我们应该读取对应位置的文件
     1.要知道对应要读取的文件是哪个
     2.文档的类型是哪个

     */


}).listen(8080,'localhost',function () {
    console.log('服务器已经在本机8080端口运行啦')
})