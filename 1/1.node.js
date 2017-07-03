/**
 * Created by DELL on 2017/6/22.
 */
/*
 Node.js就是一个解析JS的平台

 Node.js是一个新的语言吗？！ --- 不是
 Node.js帮我们搭建了一个解析JS的平台，搭建WEB服务器,采用编程语言就是JavaScript

*/


/*
 模块：功能的集合体、方法

 模块类型：
 系统模块：Node.js天生拥有，出门自带
 第三方模块：其他人写好的功能，喜欢，就拿过来用
 自定义模块：需要自己根据自己的需求，自定义模块
 */

// 系统模块的使用

// 文件系统模块 File System

// 加载模块
var fs = require('fs');

// console.log(fs);

// 按照规则进行方法的调用就OK了
fs.mkdir('../mumuda',function(err){
    /*
     err 接收的是错误信息
     null		就表示没有错误信息，执行成功
     */
    // console.log(err);

    if(err){
        // 判断是什么样的错误信息
        if(err.code=='EEXIST'){
            console.log('所要创建的目录已经存在了..');
        }else{
            console.log('数据异常，请重新尝试');
        }
    }else{
        // 成功了..
        console.log('目录创建成功,木木哒');
    }
});

// 认识第三方模块：其他人已经写好的模块，自己喜欢就调用

// 倒计时、格式化显示时间 2017年5月8日 20:53:18

// 相中模块 format-datetime，想使用该模块

/*
 1. 下载第三方模块 使用npm命令
 npm 包管理工具
 npm install 包名 下载该包
 执行：在当前目录下创建node_modules目录存放第三方的包
 */

// 2. 加载第三方包
var format = require('format-datetime');
// console.log(format);

// 3. 按照包所给的推荐使用方法，按需调用
var dateStr = format(new Date(),'yyyy年MM月dd日 HH:mm:ss');
console.log(dateStr);

// 自定义模块:系统模块无法做到，其他模块无法做到，使用不变时，自定义模块去使用！