/**
 * Created by DELL on 2017/7/4.
 */
//url解析url地址
//完整地址
var urlStr='http://www.baidu.com:80/user/index.html?id=1&isvip=1#top';

//加载模块

var url=require('url');

//执行parse()解析
var urlObj=url.parse(urlStr);
/*Url {
    protocol: 'http:',               协议
        slashes: true,
        auth: null,                  权限
        host: 'www.baidu.com:80',    域名地址和端口号
        port: '80',                  端口号
        hostname: 'www.baidu.com',   主机地址，主机名称
        hash: '#top',                锚点
        search: '?id=1&isvip=1',     查询，以？开头后面+参数
        query: 'id=1&isvip=1',       表示查询、传递的参数
         pathname: '/user/index.html', 路径和文件名
        path: '/user/index.html?id=1&isvip=1',  多一个参数
        href: 'http://www.baidu.com:80/user/index.html?id=1&isvip=1#top' 当前路径
        }

        */
//获取url地址传递的参数
//执行parse()解析，第一个参数传值为true，自动query:{id:'1',isvip:'1'}
var urlObj1=url.parse(urlStr,true);

console.log(urlObj);
console.log(urlObj1);
console.log(urlObj1.query.isvip);


//url.format()  格式化url对象，返回url地址
var strFormat={
    protocol:'https',
    port:'8080',
    hostname:'www.jd.com',
    pathname:'/demo/test.html',
    query:{
        id:10
    }
};

var urlFormat=url.format(strFormat);
console.log(urlFormat);/*https://www.jd.com:8080/demo/test.html?id=10*/

//url.resolve()  解析路径，相对前一个路径
var newUrl=url.resolve('/user/meme','./test');
console.log(newUrl);/*/user/test*/