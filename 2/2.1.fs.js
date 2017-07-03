/**
 * Created by DELL on 2017/7/3.
 */
//直接读取文件 ----字符级别的读取

//加载模块
var fs=require('fs');
/*fs.open() 选择打开文件方式
    r   只读模式，不可写，文件不存在会报错
    r+  可读可写，以读为主，文件不存在时会报错
    w   可写不可读，文件不存在时自动创建
    w+  可写可读，以写为主，文件不存在时自动创建
    a   追加写，不可读，文件不存在时自动创建
    a+  可读可写，追加写，文件不存在自动创建
*/
fs.open('demo.txt','a+',function (err,fd) {
    console.log(err);
    //fd就是打开文件的标记
    console.log(fd);

    //定义buffer对象，用于存储数据
    var buf=Buffer.alloc(100);
    //fs.write()写入数据,从文件指针所在的位置开始写入
    fs.write(fd,'测试数据',function (err,data) {
        console.log(err);
        console.log(data);
    })
    /*fs.read()  读取内容
       fd   要读取的文件标志
       buf  用于存放数据的buffer对象
       0    从buf对象的0索引位置开始写入
       10   要写入10个字节的数据
       0    表示从fd文件中的0索引位置开始读取

    */
    fs.read(fd,buf,0,12,0,function (err) {
        console.log(buf.toString());
    });


    //关闭读取
    fs.close(fd,function () {
        console.log('用完了就要关闭');
    });
})