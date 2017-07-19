/**
 * Created by DELL on 2017/7/17.
 */
//index.js 专门的路由模块，处理相关的路由

//加载模块
var express=require('express');

//创建路由对象
var router=express.Router();

//挂载路由到router身上
//匹配根路由
router.get('/',function (req,res) {
   res.render('index');
});


//向外暴露路由对象
module.exports=router;

