/**
 * Created by DELL on 2017/6/22.
 */
// File System 文件系统模块

// 加载模块
var fs = require('fs');

// console.log(fs);

// 按套路出牌！

// 目录相关的函数

/*
 // fs.mkdir()	// make directory 创建目录
 fs.mkdir('./qin',function(err){
 console.log(err);
 });
 */

/*
 // fs.rmdir() // remove directory 删除目录
 fs.rmdir('./memeda',function(err){
 // console.log(err);

 if(err){
 // 有错误

 // 判断错误标记
 if(err.code=='ENOENT'){
 console.log('所给文件路径不存在...');
 }
 }else{
 // 说明没有错误
 console.log('恭喜你，执行成功....');
 }
 });
 */

// fs.readdir() 读取目录，返回该目录下所有的文件和目录的名称
fs.readdir('./demo',function(err,data){
    // err值为null，表示没有错误
    console.log(err);

    // data 返回的包含了文件名和目录名
    console.log(data);
})