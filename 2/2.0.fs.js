/**
 * Created by DELL on 2017/6/22.
 */
// File System 文件系统模块

// 加载模块
var fs = require('fs');

// console.log(fs);

// 按套路出牌！

// 目录相关的函数


 // fs.mkdir()	// make directory 创建目录
 fs.mkdir('./qin',function(err){
 console.log(err);
 });  //创建qin目录



 // fs.rmdir() // remove directory 删除目录
 fs.rmdir('./memeda',function(err){
  console.log(err);

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


// fs.readdir() 读取目录，返回该目录下所有的文件和目录的名称
fs.readdir('./qin',function(err,data){
    // err值为null，表示没有错误
    console.log(err);

    // data 返回的包含了文件名和目录名
    console.log(data);
})

//文件相关操作
/*var data='这是一个即将被写入文件的文字';

fs.writeFile()
    将数据写入到文件中，如果文件不存在自动创建
    写入时首先将原有数据清空，再次写入


  在./write.txt文件中写入内容

  第一个参数  指定要写入数据的文件
  第二个参数  data只要写入的数据
  第三个参数  指定写入的模式、编码字符集
             {
             //写入模式为追加写
             flag:'a'
             }
  第四个参数  是callback回调函数

{flag:'a'}追加写


fs.writeFile('./write.txt',{flag:'a'},data,function (err) {
 console.log(err);

});*/

//另一种追加写的方法 fs.appendFile()

/*
fs.appendFile('./write.txt',data,function (err) {
    console.log(err);
})
*/

//读取文件内容
/*
fs.readFile('./write.txt',function (err,data) {
  //err 错误信息
    console.log(err);
    //data 代表了从文件中读取到的数据，是一个buffer对象
    console.log(data.toString());
    //将读取的数据写入到其他文件中
    fs.writeFile('./memeda',data,function (err) {
        console.log(err);
    })
})
*/

/*
//删除文件  fs.unlink()
fs.unlink('./memeda',function (err) {
    //console.log(err);
    //判断错误信息
    if(err){
     if(err.code=='ENOENT'){
      console.log('所给文件路径不存在');
     }else {
      console.log('数据异常，请重新尝试');
     }
    }else {
     //提示执行成功
        console.log('操作成功！！');
    }
});



//fs.rename重命名，剪切的效果
fs.rename('./write.txt','./rw.txt',function (err) {
    console.log(err);
})
 */

//判断文件路径是否存在
//定义文件
var filename='./demo';

fs.access(filename,function (err) {

    if(err&&err.code=='ENOENT'){
        console.log('所给文件路径是不存在的');
    }else {
     console.log('文件是存在的')
    }

});



