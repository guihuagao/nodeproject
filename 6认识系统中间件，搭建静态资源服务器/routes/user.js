/**
 * Created by DELL on 2017/7/13.
 */

/*
 user.js是一个路由模块，专门处理 /user/info,/user/edit 类似的路由

 */

//创建路由对象
var express=require('express');
//创建路由对象
var router=express.Router();

//监听路由 --- /user
router.get('/',function (req,res) {
    res.send('欢迎用户页');
});

//监听修改用户信息的路由
router.get('/list',function (req,res) {
    //设置响应状态码
   res.status(404).send('找不到');
//设置文档类型 res.type()

});



//监听getUserInfo用户信息的路由
router.get('/getUserInfo',function (req,res) {
   //定义用户信息
    var user={
        username:'张三',
        sex:'男'
    };
    //响应json对象
    res.send(user);

});

//向外暴露
module.exports=router;