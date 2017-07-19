/**
 * Created by DELL on 2017/7/17.
 */
//专门的路由模块，处理和用户相关的路由

//加载模块，创建路由对象，向外暴露
var express=require('express');

//创建路由对象
var router=express.Router();

//挂载路由方法  --/user
router.get('/',function (req,res) {
   res.render('user');
});


//向外暴露
module.exports=router;