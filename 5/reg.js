/**
 * Created by DELL on 2017/7/11.
 */
// 演示正则表达式的使用

// 定义字符串
var str = "<ul id=\"picLists\"><li><a href='http://tu.hanhande.com/scy/7045079.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110226_9742.jpg' curindex='1' width='100'/></a></li><li><a href='http://tu.hanhande.com/scy/7045079.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110227_7147.jpg'  width='100' class='selectpic' curindex='2' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_3.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110228_8845.jpg' width='100' curindex='3' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_4.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110229_5466.jpg' width='100' curindex='4' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_5.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110230_3782.jpg' width='100' curindex='5' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_6.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110231_1127.jpg' width='100' curindex='6' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_7.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110232_8858.jpg' width='100' curindex='7' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_8.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110233_1939.jpg' width='100' curindex='8' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_9.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110234_5706.jpg' width='100' curindex='9' text='' /></a></li><li><a href='http://tu.hanhande.com/scy/7045079_10.shtml'><img src='http://www.hanhande.com/upload/170512/4182591_110235_7092.jpg' width='100' curindex='10' text='' /></a></li></ul>";

// 设置正则
var imgReg = /<img.*?src='(.*?)'.*?\/>/g;

// 执行正则匹配

/*
 使用正则表达式进行exec()匹配时，如果有匹配的数据，在结果中返回；如果没有匹配的数据结果是null
 */

// 定义包含图片url地址的数组
var imgArr = [];

// 返回的结果中对应的索引index=1位置是要的imgUrl
do{
    var imgRes = imgReg.exec(str);
    // console.log(imgRes);

    // 如果有匹配的数据，输出当前图片的url地址
    if(imgRes){
        // console.log(imgRes[1])

        // 将图片的地址压入到指定的数组中
        imgArr.push(imgRes[1]);
    }
}while(imgRes);

console.log(imgArr);
