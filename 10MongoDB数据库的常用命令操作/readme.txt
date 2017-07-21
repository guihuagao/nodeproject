--- 向cook数组中插入一条数据
> db.stu.update({username:'猪八戒'},{$push:{cook:'蛋炒饭'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

---- 查询username:猪八戒
> db.stu.find({username:'猪八戒'})
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "age" : 120, "sex" : "妖", "class" : "高老庄", "c
ook" : [ "宫保鸡丁", "鱼香肉丝", "水煮鱼", "水煮肉", "一盆米饭", "蛋炒饭" ] }

--- 又向数组cook中插入一个值
> db.stu.update({username:'猪八戒'},{$push:{cook:'蛋炒饭'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.stu.find({username:'猪八戒'})              
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "age" : 120, "sex" : "妖", "class" : "高老庄", "c
ook" : [ "宫保鸡丁", "鱼香肉丝", "水煮鱼", "水煮肉", "一盆米饭", "蛋炒饭", "蛋炒饭" ] }
>

---- $addToSet 如果不存在，插入；存在的不操作
> db.stu.update({username:'猪八戒'},{$addToSet:{cook:'水煮鱼'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })

--- 查询
> db.stu.find({username:'猪八戒'})          
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "age" : 120, "sex" : "妖", "class" : "高老庄", "c
ook" : [ "宫保鸡丁", "鱼香肉丝", "水煮鱼", "水煮肉", "一盆米饭", "蛋炒饭", "蛋炒饭" ] }
>


--- 删除数组中的值 $pull
> db.stu.update({username:'猪八戒'},{$pull:{cook:'蛋炒饭'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

--- 操作符 $pop 删除数组末尾的值 {cook:1} 末尾删除 {cook:-1}开头删除
> db.stu.update({username:'猪八戒'},{$pop:{cook:1}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

--- 将数组的值压入到cook中 ,结合$push和$each
--- ['排骨米饭','梅菜扣肉']
> db.stu.update({username:'猪八戒'},{$push:{cook:{$each:['梅菜扣肉','排骨米饭']}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> 

--- $rename 重命名
> db.stu.update({username:'多闻天王'},{$rename:{jineng:'power'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.stu.find({username:'多闻天王'})                         '}})
{ "_id" : ObjectId("5924366a85e8713e6ce83e09"), "username" : "多闻天王", "age" : 110, "sex" : "男", "class" : "南天门",
"power" : "闻一闻" }
>


--- 更新 update multi 允许多选
> db.stu.update({sex:'男'},{$set:{age:60}},{multi:true})
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 4 })
>

--- 执行更新时，所给条件不存在，upsert:true 会自动创建数据
> db.stu.update({username:'观音姐姐'},{$set:{age:19,class:'南海'}},{upsert:true})
WriteResult({
        "nMatched" : 0,
        "nUpserted" : 1,
        "nModified" : 0,
        "_id" : ObjectId("59257b203a1e99207375650e")
})
>

--- 删除remove

--- 删除集合中的所有的数据
> db.teacher.remove({})
WriteResult({ "nRemoved" : 2 })
>

--- 删除集合
> db.teacher.drop()
true
>

--- 删除数据库
> use demo			-- 切换到对应的数据
switched to db demo
> db
demo

--- 删除数据库
> db.dropDatabase()
{ "dropped" : "demo", "ok" : 1 }
>

--- 查询，默认查询所有的字段

--- {username:1,sex:1} 查询只显示username/sex字段
--- {cook:0}	不要cook字段，其他的都要
> db.stu.find({},{username:1,sex:1})
{ "_id" : ObjectId("59242dad85e8713e6ce83e01"), "username" : "孙悟空", "sex" : "男" }
{ "_id" : ObjectId("59242e5985e8713e6ce83e02"), "username" : "唐僧", "sex" : "男" }
{ "_id" : ObjectId("59242e6d85e8713e6ce83e03"), "username" : "蜘蛛精", "sex" : "女" }
{ "_id" : ObjectId("592433d985e8713e6ce83e05"), "username" : "白晶晶", "sex" : "女" }
{ "_id" : ObjectId("592435d385e8713e6ce83e07"), "username" : "增长天王", "sex" : "男" }
{ "_id" : ObjectId("5924366a85e8713e6ce83e08"), "username" : "持国天王", "sex" : "男" }
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "sex" : "妖" }
{ "_id" : ObjectId("5924366a85e8713e6ce83e09"), "username" : "多闻天王", "sex" : "男" }
{ "_id" : ObjectId("59257b203a1e99207375650e"), "username" : "观音姐姐" }
>

--- 排序 sort()
 
--- sort({age:1}) 升序
--- sort({age:-1}) 降序
 > db.stu.find({},{username:1,age:1}).sort({age:-1})
{ "_id" : ObjectId("592434a485e8713e6ce83e06"), "username" : "猪八戒", "age" : 120 }
{ "_id" : ObjectId("59242dad85e8713e6ce83e01"), "username" : "孙悟空", "age" : 60 }
{ "_id" : ObjectId("59242e5985e8713e6ce83e02"), "username" : "唐僧", "age" : 60 }
{ "_id" : ObjectId("5924366a85e8713e6ce83e09"), "username" : "多闻天王", "age" : 60 }
{ "_id" : ObjectId("592435d385e8713e6ce83e07"), "username" : "增长天王", "age" : 60 }
{ "_id" : ObjectId("5924366a85e8713e6ce83e08"), "username" : "持国天王", "age" : 60 }
{ "_id" : ObjectId("59257b203a1e99207375650e"), "username" : "观音姐姐", "age" : 19 }
{ "_id" : ObjectId("59242e6d85e8713e6ce83e03"), "username" : "蜘蛛精", "age" : 18 }
{ "_id" : ObjectId("592433d985e8713e6ce83e05"), "username" : "白晶晶", "age" : 18 }
>

--- 成绩表：
	html 
	css
	js
	按照成绩进行排序：
		先按html的成绩降序排列，再按照js的程序降序排列
	sort({html:-1,js:-1})

> db.score.find({}).sort({html:-1,js:-1})
{ "_id" : ObjectId("59257e221a4b4efe1d7929de"), "username" : "唐僧", "html" : 90, "css" : 100, "js" : 110 }
{ "_id" : ObjectId("59257e161a4b4efe1d7929dd"), "username" : "孙悟空", "html" : 90, "css" : 100, "js" : 10 }
{ "_id" : ObjectId("59257e361a4b4efe1d7929df"), "username" : "沙僧", "html" : 75, "css" : 100, "js" : 110 }
>

/*
	分页：
		定义每页显示的条数 pageSzie  = 4
		数据条数总数 total	= 9

		总页数：Math.ceil(total/pageSize)

		页数
			page 

		第一页		skip(0).limit(4)
		第二页		skip(4).limit(4)
		第三页		skip(8).limit(4)

		第page页	skip(偏移量是如何设置的).limit()
			// 偏移量的计算 pageOffset = (page-1)*pageSize

		第page页	skip(pageOffset).limit(pageSize)
*/


--- limit() 限制查询
> db.stu.find().limit(4)
{ "_id" : ObjectId("59242dad85e8713e6ce83e01"), "username" : "孙悟空", "age" : 60, "sex" : "男", "class" : "花果山" }
{ "_id" : ObjectId("59242e5985e8713e6ce83e02"), "username" : "唐僧", "age" : 60, "sex" : "男", "class" : "大唐" }
{ "_id" : ObjectId("59242e6d85e8713e6ce83e03"), "username" : "蜘蛛精", "age" : 18, "sex" : "女", "class" : "盘丝洞" }
{ "_id" : ObjectId("592433d985e8713e6ce83e05"), "username" : "白晶晶", "age" : 18, "sex" : "女", "class" : "白骨洞" }
>

--- skip() 跳过，偏移



--- 创建账户 

--- 必须创建数据库admin
> db.createUser({
	// 账户
... user : 'huxiaoshuai',

	// 密码
... pwd : 'memeda',

	// 角色权限
... roles:[
... {
	// 角色 __system 系统管理员
... role:'__system',

	// 对哪个数据库生效
... db : 'admin'
... }
... ]
... })
Successfully added user: {
        "user" : "huxiaoshuai",
        "roles" : [
                {
                        "role" : "__system",
                        "db" : "admin"
                }
        ]
}
>

--- 手动开启权限验证
C:\Users\Administrator>mongod --dbpath=c:/data/db --auth

--- 验证自己的身份(必须切换到自己有权限的数据库)
use admin

--- 验证权限
> db.auth('huxiaoshuai','memeda')
1
>

--- 在school数据库创建一个huge账户，有只读的权限
> db.createUser({
... user : 'huge',
... pwd : 'qin',
... roles:[
... {role:'read',db:'school'}
... ]
... })
Successfully added user: {
        "user" : "huge",
        "roles" : [
                {
                        "role" : "read",
                        "db" : "school"
                }
        ]
}
>

--- 创建账户的权限
> db.createUser({
... user : 'yixiu',
... pwd : 'gejigeji',
... roles:[
... {role:'readWrite',db:'school'}
... ]
... })
Successfully added user: {
        "user" : "yixiu",
        "roles" : [
                {
                        "role" : "readWrite",
                        "db" : "school"
                }
        ]
}


--- 尝试在admin数据库创建一个账户，同时
	对admin数据库有超级管理员权限
	对school数据库有读写权限

--- 删除用户时，一定要记得在所在的数据库位置
> db.dropUser('huge')
true
>

--- 创建用户时，一定要对应的数据库位置进行创建
	school 数据库的账户，一定要use school








