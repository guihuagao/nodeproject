/**
 * Created by DELL on 2017/6/22.
 */
// Buffer Node.js中存放二进制数据的缓冲区

// 创建Buffer
var buf = Buffer.alloc(10);	// 声明一个空buf对象，字节长度为10
// console.log(buf);

// 存储数据
buf.fill('this is a test!');

// console.log(buf.toString());

// 使用Buffer.from()
var buf = Buffer.from('妹妹你坐船头，哥哥在岸上走');

/*
 默认使用UTF-8的编码模式，一个中文--3个字节
 */

// buf.length 返回的buf对象的字节长度
// console.log(buf.length);

// str.length 返回时str字符串的字符数
var str = '木木哒';
// console.log(str.length);


// Buffer.concat() 拼接buf对象
var buf1 = Buffer.from('abec');
var buf2 = Buffer.from('abec');
var newBuf = Buffer.concat([buf1,buf2]);
console.log(newBuf.toString());

/*
 Buffer.compare() 比较两个Buffer对象
 buf1 > buf2		1
 buf1 < buf2 	-1
 buf1 == buf2 	0
 */
var res = Buffer.compare(buf1,buf2);
console.log(res);

// 判断变量是否是buffer对象
var a = 10;

// 如果是返回就是布尔值true，否则返回布尔值false
var res = Buffer.isBuffer(a);
console.log(res);

// Buffer.byteLength() 获取buffer对象字节长度
var str = '如何形容前凸后翘：人还没有进来，胸已经进来；人已经走了，屁股还在...';
var buf = Buffer.from(str);

console.log(Buffer.byteLength(buf));
// .length 返回的就是字符串的字符数
console.log(str.length);


// 创建Buffer对象
var buf = Buffer.alloc(3,'abc');
// console.log(buf.toString());

// buf[index] 返回的对应索引位置存储的值
console.log(buf[0]);


/*
 Buffer 相当于 Math

 buf 	只是为单纯起的变量名
 */

// 声明buffer对象
var buf = Buffer.from('床前明月光，地上鞋两双！光脚丫子');

// indexOf() 正序查找，有结果返回对应的索引位置；没有结果返回-1
var res = buf.indexOf('你');		// -1 表示没有匹配的数据
var res = buf.indexOf('光');		// 12
console.log(res);

// lastIndexOf() 倒序查找，返回第一个符合条件的数据的索引，否则返回-1
var res = buf.lastIndexOf('光');
console.log(res);

// buf.compare()
var buf1 = Buffer.from('abcd');
var buf2 = Buffer.from('abcde');

// 允许指定开始比较的位置和结束的位置
var res = buf1.compare(buf2,0,4,0,4);
console.log(res);

// buf.slice() 截取
var buf = Buffer.from('memeda');
// var res = buf.slice(1);	// 从索引1位置开始截取，截取到末尾
var res = buf.slice(1,3);	// 从索引为1开始截取，到索引3位置结束 [1,3)
console.log(res.toString());

// buf.copy() 将数据copy另外一个buf对象中
var buf = Buffer.from('天王盖地虎');
var newBuf = Buffer.alloc(12,'abc');
console.log(newBuf.toString());

/*
 将buf中的数据复制到newBuf中
 buf.copy(newBuf,3,3,9);
 newBuf		要复制数据进入的buf对象
 3			表示在newBuf中要开始写入的位置
 3			表示buf中复制开始的位置
 9			表示buf中复制结束的位置
 */
buf.copy(newBuf,3,3,9);

console.log(buf.toString());
console.log(newBuf.toString());