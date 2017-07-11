// 执行下载美女图片的功能

// 只要有对应的网址，就能将图片全部进行下载

// 定义当前的网址
var fileUrl = 'http://tu.hanhande.com/scy/7045190.shtml#p';

// 加载模块
var http = require('http');
var fs = require('fs');

// 加载自定义的下载图片模块
var downloadImg = require('./downloadImg');

// 发送请求
http.get(fileUrl,function(res){
    // 定义空字符串接收数据
    var html = '';

    // 监听数据传输
    res.on('data',function(chunk){
        html += chunk;
    })
    // 监听数据传输完毕
    res.on('end',function(){
        // fs.writeFile('./test.html',html,function(err){
        // 	console.log(err);
        // })

        // html字符串就是网页的代码

        // 将包含图片列表信息的字符串 <ul id="picLists">*</ul>
        var ulReg = /<ul id="picLists">(.*?)<\/ul>/;
        var ulRes = ulReg.exec(html);
        // console.log(ulRes[1]);

        // ulRes[1] 字符串中包含了所有的图片url地址
        var imgStr = ulRes[1];

        // 对imgStr再次执行正则匹配,获取每一个图片的url地址
        var imgReg = /<img.*?src='(.*?)'.*?\/>/g;

        // 获取每一个图片的url地址
        var imgArr = [];

        // 匹配
        do{
            var imgRes = imgReg.exec(imgStr);
            if(imgRes){
                // 将匹配的图片url地址压入到数组中
                imgArr.push(imgRes[1]);
            }
        }while(imgRes);

        // console.log(imgArr);

        // 针对包含所有图片地址的数组，调用下载图片的函数
        var savePath = './download';
        imgArr.forEach(function(imgUrl){
            downloadImg(imgUrl,savePath);
        })
    })
})

/*

 // 定义包含图片地址数据
 var imgArr = [
 'http://www.hanhande.com/upload/170512/4182591_110227_7147.jpg',
 'http://www.hanhande.com/upload/170512/4182591_110231_1127.jpg'
 ];

 // 加载下载图片模块
 var downloadImg = require('./downloadImg');

 // console.log(downloadImg);

 // 定义图片存储的路径
 var savePath = './downloads/';

 // 对每一个图片都要调用下载函数
 imgArr.forEach(function(imgUrl,index){
 // console.log(imgUrl);
 // console.log(index);
 downloadImg(imgUrl,savePath);
 });
 */