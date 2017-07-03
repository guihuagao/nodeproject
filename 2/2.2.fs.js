/**
 * Created by DELL on 2017/7/3.
 */
//递归创建目录是否可行

var fs=require('fs');
/*
报错no such file or directory, mkdir

fs.mkdir('./test/aa',function (err) {
console.log(err);
})
 */

/*
如果用户打算递归创建目录
./test/demo/a

1.判断./test目录是否存在
   存在：判断test/demo目录是否存在

   不存在，先创建test目录，再创建demo目录，再创建a目录



fs.mkdir('./test',function (err) {
    console.log(err);
})

 */

/*
  流：流操作保证每次读取数据时对服务器没有压力
      fs.readFile()将数据一次性读入内存中
 */

/*
可读流：
  data    表示数据正在传输
  end     表示数据传输完毕
  error   数据读取失败了


var rs= fs.createReadStream('./rw.txt');

//on()  监听事件

//定义空字符串
var newData='';

rs.on('data',function (chunk) {

    newData+=chunk;

    console.log('数据正在读取');
});


rs.on('end',function () {
    console.log('数据传输完成');
    console.log(newData);
});


rs.on('error',function () {
    console.log('数据读取有误');
});

 */


/*
//创建可写流

var ws=fs.createWriteStream('./rw.txt');
ws.write('这是要写入的内容');

//表示写入完毕
ws.end();

//监听事件
ws.on('finish',function () {
    console.log('数据已经写入完毕');
});
    
//监听是否发生错误
ws.on('error',function () {
    console.log('数据发生错误');
});
*/

/*
//使用可读流和可写流实现大文件复制，借助管道流

var rs=fs.createReadStream('./rw.txt');
var ws=fs.createWriteStream('./demo.txt');

//使用管道方法写入数据
rs.pipe(ws);

//监听方法
ws.on('finish',function () {
    console.log('数据已经传输完毕');
});
*/

//借助可读，可写流，管道方法，zlib模块进行文件的压缩处理

var rs=fs.createReadStream('./demo.txt');
//压缩文件的命名一定要保留原文件的扩展名
var ws=fs.createWriteStream('./demo.txt.rar');
//引入压缩zlib模块
var zlib=require('zlib');
var gzip=zlib.createGzip();

//执行压缩
rs.pipe(gzip).pipe(ws);








