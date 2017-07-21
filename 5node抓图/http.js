/**
 * Created by DELL on 2017/7/11.
 */
//使用http模块来直接发送请求
var http=require('http');

/*
 发送请求  get/post
 get     http.get()
 post    http.post()
 */
//发送get方式的请求
http.get('http://www.baidu.com',function (res) {

    //声明一个字符串，接收响应的数据
    var html='';
    //数据响应的事件
    res.on('data',function (chunk) {
        //chunk  小的数据块

        // console.log(chunk);
        // console.log('数据正在响应...');
        html+=chunk;
    })
    //响应结束的方法
    res.on('end',function () {
       /* console.log('数据传输完毕...');*/
       console.log(html);
    })
})

/*借助http模块和fs模块，实现网络爬虫
*
* 抓取新闻类数据
* 实现图片下载
*
* */
