1. 区分关系型数据库结构和非关系型数据库结构
	关系型							非关系型
	数据库系统	DataBase System				DataBase System
		数据库		DataBase					DataBase
			数据表		table				数据集合	collection
				记录、行 row 					文档		document
					列、字段 column/field			字段		field

2. 为了在任何一个位置都能执行mongod命令，将该命令所在的目录添加到系统的环境变量
	查找到mongod.exe文件所在的目录
		D:\Program Files\MongoDB\Server\3.4\bin

	右键我的电脑-->属性-->高级系统设置-->高级-->环境变量 path
	--> 将值进行存储，确定，保存退出

	如下信息，表明没有成功的将mongod文件所在的目录添加到环境变量中
	C:\Users\Administrator>mongod
	'mongod' 不是内部或外部命令，也不是可运行的程序
	或批处理文件。

	C:\Users\Administrator>

3. 启动mongodb服务器
	// 手动设置数据存储的目录
	data/db			用于存储数据的目录
	data/log		用于存储日志文件的目录

	// 启动服务器
	mongod --dbpath=c:/data/db --logpath=c:/data/log/mongodb.log

	在windows32位的操作系统下：第一次启动时需要设置数据存储引擎
		--storageEngine=mmapv1

	当日志文件中显示：
		waiting for connections on port 27017
		说明数据库服务器已经启动了

		默认：MongoDB服务器占用的是27017端口号
		如果访问：localhost:27017

4. 启动客户端连接数据库

C:\Users\DELL>mongo
MongoDB shell version v3.4.4
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.4
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
Server has startup warnings:
2017-07-18T23:49:11.777-0700 I CONTROL  [initandlisten]
2017-07-18T23:49:11.777-0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-07-18T23:49:11.778-0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-07-18T23:49:11.778-0700 I CONTROL  [initandlisten]
>   该符号说明已经连接上数据库了

--- 查看当前数据库系统的版本
> db.version()
3.4.4
>

--- 显示当前数据库系统下的所有数据库
> show dbs		--- 只能显示不为空的数据库
admin  0.000GB
local  0.000GB
>

--- 显示当前所在的数据
> db
test
>

--- 创建一个数据库/选择、切换数据库
> use school
switched to db school
>

--- 创建集合 stu，存储关于学员的信息
> db.createCollection('stu')
{ "ok" : 1 }
>

--- 查看当前数据库系统下所有的集合
> show collections
stu
system.indexes		---系统自动创建的，用于记录该数据库中所有的集合的索引
>



--- 插入一条数据
> db.stu.insert({username:'孙悟空',age:1000,sex:'男',class:'花果山'})
WriteResult({ "nInserted" : 1 })
>

--- 查询所有的数据
> db.stu.find()

--- _id 文档唯一性标志，不重复的，必须存在的
{ "_id" : ObjectId("59242dad85e8713e6ce83e01"), "username" : "孙悟空", "age" : 1000, "sex" : "男", "class" : "花果山" }
>

-- 执行更新
> db.stu.update({username:'孙悟空'},{$set:{age:100}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>

--- 数据无价，且删且珍惜！！！

-- 执行删除！
> db.stu.remove({_id:ObjectId("59242eaa85e8713e6ce83e04")})
WriteResult({ "nRemoved" : 1 })
> db.stu.find()

--- 查询一条数据
> db.stu.findOne()
{
        "_id" : ObjectId("59242dad85e8713e6ce83e01"),
        "username" : "孙悟空",
        "age" : 100,
        "sex" : "男",
        "class" : "花果山"
}
>


==========================================
var data = {
	username : '张三',
	user : {
		uname : '李四',
		age : 100
	}
}

var json = {
	// 想要的json数据
	uname : '张三'
}


// 分配
res.render('index',{data:data})

// 前台
<%= data.username %>		张三

<%= data.user.uname %> 	李四

// 直接res.send()直接响应的数据
var data = {
	username : '张三'
}

// 直接响应数据给客户端
res.send(data);


即时性业务：socket
	即时聊天室
	淘宝的客服服务
==========================================

--- 插入一条数据
> db.stu.insert({
... username : '白晶晶',
... age : 18,
... sex : '女',
... class : '白骨洞'
... })
WriteResult({ "nInserted" : 1 })
>

--- 声明一个对象
> var user = {
... username : '猪八戒',
... age : 120,
... sex : '妖',
... class : '高老庄',
... cook : ['宫保鸡丁','鱼香肉丝','水煮鱼','水煮肉','一盆米饭']
... }

--- 输出显示
> user
{
        "username" : "猪八戒",
        "age" : 120,
        "sex" : "妖",
        "class" : "高老庄",
        "cook" : [
                "宫保鸡丁",
                "鱼香肉丝",
                "水煮鱼",
                "水煮肉",
                "一盆米饭"
        ]
}

--- 将变量user对应的数据插入
> db.stu.insert(user)
WriteResult({ "nInserted" : 1 })
>


--- 插入多条

-- 定义数组，包含了多条数据
> var users = [
... {
... username : '持国天王',
... age : 120,
... sex : '男',
... class : '南天门'
... },
... {
... username :'多闻天王',
... age : 110,
... sex : '男',
... class :'南天门'
... }]

-- 显示数组
> users
[
        {
                "username" : "持国天王",
                "age" : 120,
                "sex" : "男",
                "class" : "南天门"
        },
        {
                "username" : "多闻天王",
                "age" : 110,
                "sex" : "男",
                "class" : "南天门"
        }
]

--- 插入数组
> db.stu.insert(users)
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
>


--- db.stu.find() 查询所有的数据
--- db.stu.findOne() 查询一条

--- .pretty() 执行美化查询
> db.stu.find().pretty()
{
        "_id" : ObjectId("59242dad85e8713e6ce83e01"),
        "username" : "孙悟空",
        "age" : 100,
        "sex" : "男",
        "class" : "花果山"
}
{
        "_id" : ObjectId("59242e5985e8713e6ce83e02"),
        "username" : "唐僧",
        "age" : 20,
        "sex" : "男",
        "class" : "大唐"
}
{
        "_id" : ObjectId("59242e6d85e8713e6ce83e03"),
        "username" : "蜘蛛精",
        "age" : 18,
        "sex" : "女",
        "class" : "盘丝洞"
}
{
        "_id" : ObjectId("592433d985e8713e6ce83e05"),
        "username" : "白晶晶",
        "age" : 18,
        "sex" : "女",
        "class" : "白骨洞"
}
{
        "_id" : ObjectId("592434a485e8713e6ce83e06"),
        "username" : "猪八戒",
        "age" : 120,
        "sex" : "妖",
        "class" : "高老庄",
        "cook" : [
                "宫保鸡丁",
                "鱼香肉丝",
                "水煮鱼",
                "水煮肉",
                "一盆米饭"
        ]
}
{
        "_id" : ObjectId("592435d385e8713e6ce83e07"),
        "username" : "增长天王",
        "age" : 100,
        "sex" : "男",
        "class" : "南天门"
}
{
        "_id" : ObjectId("5924366a85e8713e6ce83e08"),
        "username" : "持国天王",
        "age" : 120,
        "sex" : "男",
        "class" : "南天门"
}
{
        "_id" : ObjectId("5924366a85e8713e6ce83e09"),
        "username" : "多闻天王",
        "age" : 110,
        "sex" : "男",
        "class" : "南天门"
}
>


--- 条件

--- 查询所有的男性
> db.stu.find({sex:'男'}).pretty()
{
        "_id" : ObjectId("59242dad85e8713e6ce83e01"),
        "username" : "孙悟空",
        "age" : 100,
        "sex" : "男",
        "class" : "花果山"
}
{
        "_id" : ObjectId("59242e5985e8713e6ce83e02"),
        "username" : "唐僧",
        "age" : 20,
        "sex" : "男",
        "class" : "大唐"
}
{
        "_id" : ObjectId("592435d385e8713e6ce83e07"),
        "username" : "增长天王",
        "age" : 100,
        "sex" : "男",
        "class" : "南天门"
}
{
        "_id" : ObjectId("5924366a85e8713e6ce83e08"),
        "username" : "持国天王",
        "age" : 120,
        "sex" : "男",
        "class" : "南天门"
}
{
        "_id" : ObjectId("5924366a85e8713e6ce83e09"),
        "username" : "多闻天王",
        "age" : 110,
        "sex" : "男",
        "class" : "南天门"
}
>

--- 查询年龄是20岁的男性
> db.stu.find({sex:'男',age:20}).pretty()
{
        "_id" : ObjectId("59242e5985e8713e6ce83e02"),
        "username" : "唐僧",
        "age" : 20,
        "sex" : "男",
        "class" : "大唐"
}

--- $and 操作符，表示 和、与
> db.stu.find({$and:[{age:20},{sex:'男'}]}).pretty()
{
        "_id" : ObjectId("59242e5985e8713e6ce83e02"),
        "username" : "唐僧",
        "age" : 20,
        "sex" : "男",
        "class" : "大唐"
}
>

--- 查询20岁或者是女的
> db.stu.find({$or:[{age:20},{sex:'女'}]}).pretty()
{
        "_id" : ObjectId("59242e5985e8713e6ce83e02"),
        "username" : "唐僧",
        "age" : 20,
        "sex" : "男",
        "class" : "大唐"
}
{
        "_id" : ObjectId("59242e6d85e8713e6ce83e03"),
        "username" : "蜘蛛精",
        "age" : 18,
        "sex" : "女",
        "class" : "盘丝洞"
}
{
        "_id" : ObjectId("592433d985e8713e6ce83e05"),
        "username" : "白晶晶",
        "age" : 18,
        "sex" : "女",
        "class" : "白骨洞"
}
>


--- 查询年龄>20 $gt
> db.stu.find({age:{$gt:20}}).pretty()
{
        "_id" : ObjectId("59242dad85e8713e6ce83e01"),
        "username" : "孙悟空",
        "age" : 100,
        "sex" : "男",
        "class" : "花果山"
}
{
        "_id" : ObjectId("592434a485e8713e6ce83e06"),
        "username" : "猪八戒",
        "age" : 120,
        "sex" : "妖",
        "class" : "高老庄",
        "cook" : [
                "宫保鸡丁",
                "鱼香肉丝",
                "水煮鱼",
                "水煮肉",
                "一盆米饭"
        ]
}
{
        "_id" : ObjectId("592435d385e8713e6ce83e07"),
        "username" : "增长天王",
        "age" : 100,
        "sex" : "男",
        "class" : "南天门"
}
{
        "_id" : ObjectId("5924366a85e8713e6ce83e08"),
        "username" : "持国天王",
        "age" : 120,
        "sex" : "男",
        "class" : "南天门"
}
{
        "_id" : ObjectId("5924366a85e8713e6ce83e09"),
        "username" : "多闻天王",
        "age" : 110,
        "sex" : "男",
        "class" : "南天门"
}
>

--- 查询年龄<20  $lt
> db.stu.find({age:{$lt:20}}).pretty()
{
        "_id" : ObjectId("59242e6d85e8713e6ce83e03"),
        "username" : "蜘蛛精",
        "age" : 18,
        "sex" : "女",
        "class" : "盘丝洞"
}
{
        "_id" : ObjectId("592433d985e8713e6ce83e05"),
        "username" : "白晶晶",
        "age" : 18,
        "sex" : "女",
        "class" : "白骨洞"
}
>

--- 等于
> db.stu.find({age:20})
{ "_id" : ObjectId("59242e5985e8713e6ce83e02"), "username" : "唐僧", "age" : 20, "sex" : "男", "class" : "大唐" }
>

--- $eq 等于 $equal
> db.stu.find({age:{$eq:20}})
{ "_id" : ObjectId("59242e5985e8713e6ce83e02"), "username" : "唐僧", "age" : 20, "sex" : "男", "class" : "大唐" }
>

/*
	大于		$gt
	小于		$lt
	等于		$eq
	大于等于	$gte
	小于等于	$lte
	不等于		$ne
*/

--- $ne 表示不等
> db.stu.find({sex:{$ne:'男'}})
{ "_id" : ObjectId("59242e6d85e8713e6ce83e03"), "username" : "蜘蛛精", "age" : 18, "sex" : "女", "class" : "盘丝洞" }
{ "_id" : ObjectId("592433d985e8713e6ce83e05"), "username" : "白晶晶", "age" : 18, "sex" : "女", "class" : "白骨洞" }
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "age" : 120, "sex" : "妖", "class" : "高老庄", "c
ook" : [ "宫保鸡丁", "鱼香肉丝", "水煮鱼", "水煮肉", "一盆米饭" ] }
>



--- $in 在某个范围
> db.stu.find({sex:{$in:['男','女']}}))
{ "_id" : ObjectId("59242dad85e8713e6ce83e01"), "username" : "孙悟空", "age" : 100, "sex" : "男", "class" : "花果山" }
{ "_id" : ObjectId("59242e5985e8713e6ce83e02"), "username" : "唐僧", "age" : 20, "sex" : "男", "class" : "大唐" }
{ "_id" : ObjectId("59242e6d85e8713e6ce83e03"), "username" : "蜘蛛精", "age" : 18, "sex" : "女", "class" : "盘丝洞" }
{ "_id" : ObjectId("592433d985e8713e6ce83e05"), "username" : "白晶晶", "age" : 18, "sex" : "女", "class" : "白骨洞" }
{ "_id" : ObjectId("592435d385e8713e6ce83e07"), "username" : "增长天王", "age" : 100, "sex" : "男", "class" : "南天门" }

{ "_id" : ObjectId("5924366a85e8713e6ce83e08"), "username" : "持国天王", "age" : 120, "sex" : "男", "class" : "南天门" }

{ "_id" : ObjectId("5924366a85e8713e6ce83e09"), "username" : "多闻天王", "age" : 110, "sex" : "男", "class" : "南天门" }
>

--- 查询条数
> db.stu.find().count()
8
>


--- $nin 不在某个范围
--- 查询既不是男的，也不是女的 -- 范围查询
> db.stu.find({sex:{$nin:['男','女']}})
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "age" : 120, "sex" : "妖", "class" : "高老庄", "c
ook" : [ "宫保鸡丁", "鱼香肉丝", "水煮鱼", "水煮肉", "一盆米饭" ] }
>

