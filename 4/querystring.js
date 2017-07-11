/**
 * Created by DELL on 2017/7/4.
 */
//使用querystring模块，解析查询的字符串

var qs=require('querystring');

//?id=10&isvip=1
var paramStr='id=10&isvip=1';

var paramObj=qs.parse(paramStr);
console.log(paramObj);/*{ id: '10', isvip: '1' }*/

//将包含参数信息的对象，转为查询字符串
var obj={
    isvip:1,
    id:20
};
var newStr=qs.stringify(obj);
console.log(newStr);/*isvip=1&id=20*/


