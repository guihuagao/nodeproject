$(function(){ 
	//右侧购物车数量移入
	function ycgwcsl(){
		$('#gwc_sl_2').mouseover(function(){
			$('#gwc_xtp').addClass('yc_cd_xiang_1_gwc_sub_ico');
		}).mouseout(function(){
			$('#gwc_xtp').removeClass('yc_cd_xiang_1_gwc_sub_ico');
		})
		$('#hy_sl_2').mouseover(function(){
			$('#hy_xtp').addClass('yc_cd_xiang_1_gwc_sub_ico');
		}).mouseout(function(){
			$('#hy_xtp').removeClass('yc_cd_xiang_1_gwc_sub_ico');
		})
	}
	ycgwcsl(); 
	//购物车下猜你喜欢轮播图 
	function gwc_xia_cnxh(){
		 //定义定时器的标志
		 var run;
		 //定义轮播图函数
		 function autoRun(){
			//防止定时器叠加
			if(run){
				return;
			}
			//定时器
			run = setInterval(function(){
				//下一张显示
				//console.log($('.active').next());
				var nextLi = $('.active_li_2').next();//图片li
				var nextNumLi = $('.activenum_2').next();//圆点lii
				//console.log(nextLi);
				if(nextLi.length==0){
					nextLi = $('#imglist_2 li:first');
				}
				if(nextNumLi.length==0){
					nextNumLi = $('#listnum_2 a:first');
				}
				//当前具有class='active'元素移除属性
				$('.active_li_2').removeAttr('class');
				//圆点消失
				$('.activenum_2').removeAttr('class');
				//设置下一张
				nextLi.attr('class','active_li_2');
				nextNumLi.attr('class','activenum_2');
			},2000)
		 }
		 //调用函数
		 autoRun();
		 //鼠标移入移出事件
		 $('#lun_2').mouseover(function(){
			//停止定时器
			clearInterval(run);
			//清空标志
			run = undefined;
			//显示左右箭头
			$('#left_2').css('display','block');
			$('#right_2').css('display','block');
		 }).mouseout(function(){
			//再次调用函数
			autoRun();
			$('#left_2').css('display','none');
			$('#right_2').css('display','none');
		 })
		 //实现圆点切换
		 $('#listnum_2 a').each(function(index,a){
			//该位置的li是原生的js对象，使用JQuery的方法必须是JQuery对象
			//原生对象如何转为JQuery对象
			$(a).attr('index',index);
		 });
		 $('#listnum_2 a').mouseover(function(){
			//获取当前的索引值
			//console.log($(this).attr('index'));
			var index = $(this).attr('index');
			//之前的隐藏
			$('.active_li_2').removeAttr('class');
			$('.activenum_2').removeAttr('class');
			//对应的设置图片li的显示/圆点的显示
			$('#imglist_2 li').eq(index).attr('class','active_li_2');
			$('#listnum_2 a').eq(index).attr('class','activenum_2');
		 });
		 //右箭头的单击事件
		 $('#right_2').click(function(){
			//具有class='active'就是显示的元素
			var nextLi = $('.active_li_2').next();
			var nextNumLi = $('.activenum_2').next();
			//临界点判断
			if(nextLi.length==0){
				nextLi = $('#imglist_2 li:first');
			}
			if(nextNumLi.length==0){
				nextNumLi = $('#listnum_2 a:first');
			}
			//当前自身移除类名
			$('.active_li_2').removeAttr('class');
			$('.activenum_2').removeAttr('class');
			//设置类名
			nextLi.attr('class','active_li_2');
			nextNumLi.attr('class','activenum_2');
		 });
		 //左箭头的单击事件
		 $('#left_2').click(function(){
			//具有class='active'就是显示的元素
			var prevLi = $('.active_li_2').prev();
			var prevNumLi = $('.activenum_2').prev();
			//临界点判断
			if(prevLi.length==0){
				prevLi = $('#imglist_2 li:last');
			}
			if(prevNumLi.length==0){
				prevNumLi = $('#listnum_2 a:last');
			}
			//当前自身移除类名
			$('.active_li_2').removeAttr('class');
			$('.activenum_2').removeAttr('class');
			//设置类名
			prevLi.attr('class','active_li_2');
			prevNumLi.attr('class','activenum_2');
		 });
	}
	gwc_xia_cnxh()
	  
})   
function gwc(){
	/*
		定义购物车数据列表
	*/
	var shopcar = {
		// 定义京东自营
		1:{
			typename : '京东自营',
			isChecked : true,
			goodslist : {
				// 每一件商品
				101:{
					isChecked:true,
					goodsimg:'./static/imgs/1.jpg',
					goodstitle:'贾斯汀比伯 Justin Bieber：目标 Purpose （豪华版）(CD) 单曲Where ',
					goodsprice:99,
					goodsnum:1
				}, 
				102:{
					isChecked:true,
					goodsimg:'./static/imgs/1.jpg',
					goodstitle:'贾斯汀比伯 Justin Bieber：目标 Purpose （豪华版）(CD) 单曲Where ',
					goodsprice:99,
					goodsnum:1
				},
				103:{
					isChecked:true,
					goodsimg:'./static/imgs/1.jpg',
					goodstitle:'贾斯汀比伯 Justin Bieber：目标 Purpose （豪华版）(CD) 单曲Where ',
					goodsprice:99,
					goodsnum:1
				}
			}
		}
	};

	// 获取商品列表的元素
	var goodsList= document.getElementById('goodslist');
	var checkedNum = document.getElementById('checkedNum');
	var totalmoney = document.getElementById('totalmoney');

	/**
	* 定义生成商品列表的函数 createGoodsList()
	*/
function createGoodsList(){
		// 拼接字符串 -- 遍历shopcar
		var str = '';		// 声明空字符串
		for(var i in shopcar){
			// JS中以换行符作为系统指令结束符
			str += '<div class="type jd">\
						<div class="typeid" typeindex='+i+'></div>\
						<div class="typeall">\
							<input class="typecheck input_6" '+(shopcar[i].isChecked?'checked':'')+' type="checkbox">'+shopcar[i]['typename']+'\
						</div>';

			// 遍历当前大类别的中每一件商品
			var list = shopcar[i]['goodslist'];
			for(var j in list){
				str += '<div class="list">\
							<div class="listid" listindex="'+j+'"></div>\
							<div class="goodsdetails">\
								<div class="goodscheck">\
									<input '+(list[j].isChecked?'checked':'')+' class="goodscheckinput input_6" type="checkbox">\
								</div>\
								<div class="goodsdes">\
									<img src="'+list[j]['goodsimg']+'" alt="">\
									<div class="des">'+list[j]['goodstitle']+'</div>\
								</div>\
								<div class="goodsprice">\
									￥'+list[j]['goodsprice'].toFixed(2)+'\
								</div>\
								<div class="goodsnum">\
									<span class="jian">-</span>\
									<input type="text" value="'+list[j]['goodsnum']+'">\
									<span class="jia">+</span>\
								</div>\
								<div class="goodsxiaoji">\
									￥'+(list[j].goodsprice * list[j].goodsnum).toFixed(2)+'\
								</div>\
								<div class="goodsdelete">\
									删除\
								</div>\
							</div>\
						</div>';
			}
			
			str += '</div>';
		}

		// 设置html代码
		goodsList.innerHTML = str;

		
		// 删除按钮
		$('.goodsdelete').click(function(){ 

			var type_list = $(this).parents('.type').find('.list');
			var type_list_length = type_list.length;
 			console.log(type_list_length);
			if (type_list_length == 1) {
				$(this).parents('.type').remove();
			} 
			$(this).parents('.list').remove(); 
		}); 



		// 获取所有的+ 
		var jias = document.getElementsByClassName('jia');
		for(var i=0;i<jias.length;i++){
			jias[i].onclick = function(){
				// 知道我当前商品的索引
				var listIndex = this.parentNode.parentNode.previousElementSibling.getAttribute('listindex');
				// 知道我当前所属类别的索引
				var typeIndex = this.parentNode.parentNode.parentNode.parentNode.firstElementChild.getAttribute('typeindex');
				// console.log(typeIndex);

				// 当前商品选中
				shopcar[typeIndex]['goodslist'][listIndex].isChecked = true;

				// 对应的商品数量++
				shopcar[typeIndex]['goodslist'][listIndex]['goodsnum']++;

				// 页面重构
				createGoodsList();
				// 重新计算总价
				countTotal();
			}
		}

		// 获取所有的 - 
		var jians = document.getElementsByClassName('jian');
		for(var i=0;i<jians.length;i++){
			jians[i].onclick = function(){
				var listIndex = this.parentNode.parentNode.previousElementSibling.getAttribute('listindex');
				// 知道我当前所属类别的索引
				var typeIndex = this.parentNode.parentNode.parentNode.parentNode.firstElementChild.getAttribute('typeindex');
				// console.log(typeIndex);

				// 当前商品选中
				shopcar[typeIndex]['goodslist'][listIndex].isChecked = true;
				// 对应的商品数量--
				if(shopcar[typeIndex]['goodslist'][listIndex]['goodsnum']>1){
					shopcar[typeIndex]['goodslist'][listIndex]['goodsnum']--;
				}
				

				// 页面重构
				createGoodsList();
				// 重新计算总价
				countTotal();
			}
		}

		// 获取所有的多选框
		var goodsCheckInputs = document.getElementsByClassName('goodscheckinput');
		for(var i in goodsCheckInputs){
			goodsCheckInputs[i].onclick = function(){
				// console.log(this.checked);
				var listIndex = this.parentNode.parentNode.previousElementSibling.getAttribute('listindex');
				// 知道我当前所属类别的索引
				var typeIndex = this.parentNode.parentNode.parentNode.parentNode.firstElementChild.getAttribute('typeindex');

				// 输出当前的商品
				// console.log(shopcar[typeIndex]['goodslist'][listIndex]);
				shopcar[typeIndex]['goodslist'][listIndex].isChecked = this.checked;

				// 每一次单击时检测我所在的大类别下的所有的商品是否是选中的
				for(var i in shopcar[typeIndex]['goodslist']){
					if(shopcar[typeIndex]['goodslist'][i].isChecked==false){
						// 父级处于false状态
						shopcar[typeIndex].isChecked = false;

						// 重置程序
						break
					}else{
						shopcar[typeIndex].isChecked = true;
					}
				}

				// 页面重构
				createGoodsList();
				// 重新计算总价
				countTotal();
			}
		}

		// 获取商品类别多选框
		var typeCheckInputs = document.getElementsByClassName('typecheck'); 
		var jdcheckbox = document.getElementsByClassName('jdcheckbox'); 
		// console.log(typeCheckInputs);
		for(var i in typeCheckInputs){
			typeCheckInputs[i].onclick = function(){
				// console.log(this.checked);
				// 知道自己是谁
				var typeIndex = this.parentNode.previousElementSibling.getAttribute('typeindex');
				// console.log(typeIndex);

				// 自身发生改变
				shopcar[typeIndex].isChecked = this.checked;

				// 遍历该类别下的所有的商品
				for(var j in shopcar[typeIndex]['goodslist']){
					shopcar[typeIndex]['goodslist'][j].isChecked = this.checked;
				}

				// 页面重构
				createGoodsList();
				// 重新计算总价
				countTotal();
			}
		} 



	}

	var goodsCheckInputs = document.getElementsByClassName('goodscheckinput');
	var typeCheckInputs = document.getElementsByClassName('typecheck'); 
	var jdcheckbox = document.getElementsByClassName('jdcheckbox'); 	
	jdcheckbox[0].onclick = function(){
		console.log(1);
		if(!jdcheckbox[0].checked == true){
			typeCheckInputs[0].checked = false;
			goodsCheckInputs[0].checked = false;
			goodsCheckInputs[1].checked = false;
			goodsCheckInputs[2].checked = false;
		}else{
			typeCheckInputs[0].checked = true;
			goodsCheckInputs[0].checked = true;
			goodsCheckInputs[1].checked = true;
			goodsCheckInputs[2].checked = true;
		}
	}
	// 调用函数
	createGoodsList();

	// 调用计算总价的函数
	countTotal();

	/**
	* 定义计算商品总数和总价的函数 countTotal()
	*/
	function countTotal(){
		// 计算选择商品总数
		var num = 0;
		var totalMoneyNumber = 0;
		// 遍历shopcar
		for(var i in shopcar){
			// console.log(shopcar[i]);
			var list = shopcar[i]['goodslist'];
			for(var j in list){
				// 如果当前商品是被选中的，计数1
				if(list[j].isChecked){
					
					// 计算数量
					num += list[j].goodsnum;

					// 计算总价
					totalMoneyNumber += list[j].goodsprice * list[j].goodsnum;
				}
			}
		}

		// 设置
		checkedNum.innerHTML = num;
		totalmoney.innerHTML = '总价：¥'+totalMoneyNumber.toFixed(2);
	}
}  
 //回到顶部 
	function hddb(){ 
		//回到顶部
		$(window).scroll(function(){ 
			var iTop_xd = $(window).scrollTop();  
			if(iTop_xd>=$('#goodslist').offset().top){ 
				$('#xidi_id').removeClass('xidi'); 
			}else{ 
				$('#xidi_id').addClass('xidi'); 
			}
			$('#fhdb_yc').click(function(){ 
		        $('body,html').animate({ scrollTop:0},1); 
     			return false;
            })      
        })
	}
	hddb();