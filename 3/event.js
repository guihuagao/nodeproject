/**
 * Created by DELL on 2017/7/3.
 */
/*
Buffer
fs模块

events 事件模块，监听，处理
 */

//加载events模块
var event=require('events');

//实例化监听对象
var em=new event.EventEmitter();
//console.log(em);

//设置监听的事件
em.on('listen',function (one,two) {
    console.log(one+'和'+two+'监听事件');
});

//手动触发事件
em.emit('listen','张三','李四');


//设置监听一次性事件
em.once('once',function () {
console.log('一次性事件');
});
em.emit('once');//只输出一次

//移除监听事件
function removeEvent() {
    console.log('第一次触发');
};

//设置监听事件
em.on('memeda',removeEvent);
em.emit('memeda');//触发一次

em.addListener('memeda',function () {
    console.log('第二次触发');
})

//将事件监听移除
em.removeListener('memeda',removeEvent); //移除了第一次触发的监听器
//触发
em.emit('memeda'); //触发两次