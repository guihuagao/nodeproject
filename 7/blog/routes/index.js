var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    //定义要分配的数据
    var data={
        title:'百度',
        weburl:'www.baidu.com',
        sex:2,
        age:100,
        //分配对象
        user:{
            name:'腾讯',
            year:'2017',
            class:'11'
        },
        //普通的数组
        stars:['刘亦菲','杨洋','吴亦凡','张艺兴'],

        //关于描述用户的数组
        users:[
            //第一个用户
            {
                name:'刘亦菲',
                sex:'2',
                age:'18'
            },
            {
                name:'杨洋',
                sex:'1',
                age:'20'
            },
            {
                name:'吴亦凡',
                sex:'1',
                age:'13'
            },
            {
                name:'张艺兴',
                sex:'3',
                age:'28'
            },


        ]
    };


  res.render('index', data);
});

//约定一个注册路由
router.get('/reg',function (req,res) {
    //响应注册页面
    res.render('reg');
});

//定义专门处理提交的用户数据的路由，将数据存储到数据库中
router.post('/doReg',function (req,res) {
   /*
    获取用户提交的数据
    post方式的数据     req.body
    get方式的数据      req.query

     */
   console.log(req.body);
   res.send('数据已经收到啦');
});
/*
定义路由时，一定要和客户端的请求方式一致
  接收用户传输的数据
  get   req.query
  post  req.body

 */
//专门接收get方式访问的数据
router.get('/doReg',function (req,res) {
    console.log(req.query);

    res.send('数据已经收到啦');
});

//匹配话题路由  /topic/58eee565a92d341e48cfe7fc
router.get('/topic/:id',function (req,res) {
    //:id 占位符
    //req.params  获取特殊方式传递的参数
    console.log(req.params)
    res.send('欢迎查看话题详情');
});

//显示所有的用户信息的路由
router.get('/list',function (req,res) {
    //模拟用户数据
    //关于描述用户的数组
    var users=[
        {
            _id:'1',
            name:'刘亦菲',
            sex:'2',
            age:'18'
        },
        {
            _id:'2',
            name:'杨洋',
            sex:'1',
            age:'20'
        },
        {
            _id:'3',
            name:'吴亦凡',
            sex:'1',
            age:'13'
        },
        {
            _id:'4',
            name:'张艺兴',
            sex:'3',
            age:'28'
        },

    ];
    //分配模板
    res.render('list',{users:users});

});

//删除数据
router.get('/delete',function (req,res) {
    //删除谁
    var con={
       _id:req.query._id
    }
    //响应一个数组
    var users=[
        {
            uname:'张三',
            age:20
        },
        {
            uname:'李四',
            age:23
        },
    ]

   //响应数据
    res.send(users);
});
//删除数据
router.post('/delete',function (req,res) {
    //删除谁
    var con={
        _id:req.body._id
    }

    //响应数据
    res.send(con);
});


module.exports = router;
