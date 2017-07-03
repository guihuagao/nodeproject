/**
 * Created by DELL on 2017/6/30.
 */
/*
Node.js自行搭建服务器
*/

//加载模块
var http=require('http');
var fs=require('fs');

//创建web服务器
var server=http.createServer(function (req,res) {
   /*req request请求
     res response响应
   * */

   //req.url 获取用户请求路径    / 表示根请求  谷歌  /favicon.ico 默认发送一个收藏夹图标的请求
    //req.method  获取用户请求方法

    //如果请求的是收藏夹图标，进行过滤
    if(req.url=='/favicon.ico'){
        return false;
    }
   console.log(req.url);
    /*
    req.method   用户请求的方式
    GET
    1.发送的数据地址栏是可见的，相对不安全，
    2.有长度限制
    POST
    1.发送的数据在地址栏不可见，相对安全，
    2.没有长度限制
    3.如果涉及上传文件一定要选择post

     */
   // console.log(req.method);

    /*路由
    /
    /memeda


     */


    //判断用户请求的地址是/,表示用户要访问首页
    if(req.url=='/'){

        //设置文档头
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

        //设置响应数据
        //res.write('<h3>欢迎访问首页</h3>');

        fs.readFile('./httpindex.html',function (err,data) {
            //console.log(err);
            //console.log(data);

            //Error: write after end
           //在文件未读取完之前，就end了

          //将读取的文件放到返回的数据中
            res.write(data);
            //表示响应结束
            res.end();
        })


    }
else if(req.url=='/memeda'){
        //响应
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        res.write('欢迎进入memeda页面');
        res.end();
    }else{
        res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
        fs.readFile('./httperror.html',function (err,data) {
            res.write(data);
            //表示响应结束
            res.end();
        })
    }


});

server.listen(3000,'127.0.0.1',function () {
    console.log('服务器已经运行在127.0.0.1:3000');
})