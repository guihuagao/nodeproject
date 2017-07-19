var express = require('express');
var router = express.Router();


//设置all方法（一定要写在最前面）
router.all('/',function (req,res,next) {
  /*
   req 请求
   res 响应
   next 中间件处理对象，用于移交权限
   */
    console.log(111);

    //人为的声明变量isLogin一个是否登录的标志，true表示登录了，false表示没有登录
    var isLogin=false;
    //判断是否登录，未登录跳转到首页
    if(isLogin){
        next();
    }else{
      //跳转到首页
        res.redirect('/');
    }

    //移交权限给下一个
   /* next();*/
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  //前一个必须有next
  console.log('前一个');
  res.send('respond with a resource');

  //res.end()  自定义的http服务中res.end()表示结束
   // res.send()/res.render()都表示结束

},function (req,res,next) {
    //上一个函数处理完毕之后，交给下一个函数进行处理
    console.log('后一个');
});

//post
router.post('/',function (req,res) {
    console.log(333);
    res.send('我是post方式的路由');
});

module.exports = router;
