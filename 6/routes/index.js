/**
 * Created by DELL on 2017/7/13.
 */

/*
  index.js是一个路由模块，专门处理 /,/login,/reg 类似的路由

 */
//创建路由对象
var express=require('express');
var router=express.Router();

//设置约定的路由
router.get('/',function (req,res) {
    res.render('index');
});

//设置列表页路由
router.get('/list',function (req,res) {
    //设置响应
    res.send('<h3>欢迎到列表页</h3>')
});

//向外暴露
module.exports=router;