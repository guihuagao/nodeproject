/**
 * Created by DELL on 2017/7/11.
 */
//该模块实现下载图片

//定义图片的url地址
var imgUrl='http://www.itxdl.cn/uploadfile/2017/0622/20170622111118717.jpg';

//使用http模块发送请求，获取图片响应的数据

var http=require('http');
var fs=require('fs');
var path=require('path');

/*
定义下载图片的函数  downloadImg()
@param  string imgUrl  图片对应的url地址
@param  string  savePath  图片存储的路径
 */
function downloadImg(imgUrl,savePath) {
    //发送请求
    http.get(imgUrl,function (res) {

        //定义变量，接收数据
        var imgData='';
        //读取图片是，二进制的数据设置编码格式
        res.setEncoding('binary');

        //监听数据传输
        res.on('data',function (chunk) {
            imgData+=chunk;
        })
        //监听数据传输完毕
        res.on('end',function () {
            //console.log('数据传输完毕...');
            //imgData拼接完成之后，将数据写入到本地文件中

            //指定图片存储的路径
            //savePath

            //图片的名称保存
            var filename=path.basename(imgUrl);

            fs.writeFile(path.join(savePath,filename),imgData,'binary',function (err) {
                console.log(err);
            });
        })
    })
}
//假定有一个包含了很多个图片地址数组，一次性下载多个图片
//定义图片存储的路径
/*var savePath='./download';
var imgUrl='http://www.itxdl.cn/uploadfile/2017/0705/20170705013537243.jpg';
downloadImg(imgUrl,savePath);*/


//向外暴露方法
module.exports=downloadImg;
