/**
 * Created by DELL on 2017/7/13.
 */

//加载模块
var express=require('express');
//创建路由对象
var router=express.Router();

//设置监听
router.get('/',function (req,res) {
    res.send('欢迎后台');
});
module.exports=router;