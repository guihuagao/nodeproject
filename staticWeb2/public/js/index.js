$(function(){
	//顶部图片点击隐藏开始
	$('#db_TP_GB').click(function(){ 
		$('.header_tp').eq(0).fadeOut();
	})
	//顶部图片点击隐藏结束
	//轮播图
	function lbtRun(){
		var i=0;
  		var timer=null;
		for (var j = 0; j < $('#imglist li').length; j++) { //创建圆点
			$('#listnum ul').append('<li></li>')
		}
 		 $('#listnum ul li').first().addClass('activenum'); //给第一个圆点添加样式
 
  		var firstimg=$('#imglist li').first().clone(); //复制第一张图片
  		$('#imglist').append(firstimg).width($('#imglist li').length*($('#imglist img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
 
 
		// 下一个按钮
  		$('#right').click(function(){
  		 i++;
		if (i==$('#imglist li').length) {
		i=1; //这里不是i=0
		$('#imglist').css({left:0}); //保证无缝轮播，设置left值
		};
 
		$('#imglist').stop().animate({left:-i*790},300);
			if (i==$('#imglist li').length-1) {  //设置小圆点指示
				$('#listnum ul li').eq(0).addClass('activenum').siblings().removeClass('activenum');
			}else{
				$('#listnum ul li').eq(i).addClass('activenum').siblings().removeClass('activenum');
			}

		})
 
		// 上一个按钮
		$('#left').click(function(){
			i--;
			if (i==-1) {
				i=$('#imglist li').length-2;
				$('#imglist').css({left:-($('#imglist li').length-1)*790});
			}
			$('#imglist').stop().animate({left:-i*790},300);
			$('#listnum ul li').eq(i).addClass('activenum').siblings().removeClass('activenum');
		})
 
		//设置按钮的显示和隐藏
		$('#lun').hover(function(){
				$('#right').show();
				$('#left').show();
			},function(){
				$('#left').hide();
				$('#right').hide();
		})
 
		//鼠标划入圆点
		$('#listnum ul li').mouseover(function(){ 
			clearInterval(timer);
			timer = undefined;
			i = $(this).index();
			$('#imglist').stop().animate({left:-i*790},1000);
			$('#listnum ul li').eq(i).addClass('activenum').siblings().removeClass('activenum');
		})

		//定时器自动播放
		timer=setInterval(function(){ 
			i++;
			if (i==$('#imglist li').length) {
				i=1;
				$('#imglist').css({left:0});
			} 
			$('#imglist').stop().animate({left:-i*790},1000);
			if (i==$('#imglist li').length-1) { 
				$('#listnum ul li').eq(0).addClass('activenum').siblings().removeClass('activenum');
			}else{
				$('#listnum ul li').eq(i).addClass('activenum').siblings().removeClass('activenum');
			}
		},2000)
 
		//鼠标移入，暂停自动播放，移出，开始自动播放
		$('#lun').hover(function(){ 
			clearInterval(timer);
			timer = undefined;
		},function(){
		timer=setInterval(function(){
			i++;
			if (i==$('#imglist li').length) {
				i=1;
				$('#imglist').css({left:0});
			}; 
			$('#imglist').stop().animate({left:-i*790},1000);
					if (i==$('#imglist li').length-1) { 
						$('#listnum ul li').eq(0).addClass('activenum').siblings().removeClass('activenum');
						}else{
						$('#listnum ul li').eq(i).addClass('activenum').siblings().removeClass('activenum');
					}
				},2000)
			}) 
	}
	lbtRun();
	//楼层 
	function louceng(){
		var oNav = $('#zcdh_div');//导航壳 
		var ONav2 = $('#zcdh_div_div'); 
		var aNav = oNav.find('a');//导航
		var aDiv = $('#main_DH .widget');//楼层 
		var oTop = $('#goTop'); 
		var isClick = false;
		//回到顶部
		$(window).scroll(function(){   
		     var winH = $(window).height();//可视窗口高度
		     var iTop = $(window).scrollTop();//鼠标滚动的距离
		     
			if(isClick){
				return;
			}
		     if(iTop>=$('#LC_DH_YC').height()){ 
                    ONav2.fadeIn(); 
                 //鼠标滑动式改变  
                 
                 aDiv.each(function(){
                 	
					if(isClick){
						return;
					}

                    if(winH+iTop - $(this).offset().top>winH/2){
                        aNav.removeClass('active333');
                        aNav.eq($(this).index()).addClass('active333');

                    }
                 })
                 }else{
                    ONav2.fadeOut(); 
                 }
            })
            //点击top回到顶部
            oTop.click(function(){
                $('body,html').animate({"scrollTop":0},500)
            })
            $('#fhdb_yc').click(function(){
                $('body,html').animate({"scrollTop":0},500)
            })
            //点击回到当前楼层
            aNav.click(function(){
            	//切换标志
            	isClick = true;
                var t = aDiv.eq($(this).index()).offset().top-40;
                
                $('body,html').animate({"scrollTop":t},500);
                $(this).addClass('active333').siblings().removeClass('active333');  
                
				var ttt =  aDiv.eq($(this).index()).offset().top - 40 - $(window).scrollTop();
				var step = 0;
	            console.log(ttt);

				var run = setInterval(function(){
		            if(step>=ttt && ttt>=0){ 
							isClick = false; 
							clearInterval(run);
					}
					if(step<=ttt && ttt<=0){ 
							isClick = false; 
							clearInterval(run);
					}  
					if(ttt<0){ 
						step -= 10;
					}else{ 
						step += 10;
					}
				},1)
            }) 
	}
	louceng();
	//京东 搜索条 吸顶
	function xiding(){
		$(window).scroll(function(){
			var iTop = $(window).scrollTop();
			//console.log($('#jdms'));
			if(iTop>=$('#jdms').offset().top){ 
				$('#search').slideDown();
				$('#search_input').slideDown();
			}else{ 
				$('#search').fadeOut();
				$('#search_input').fadeOut();
			}
		})
	}
	xiding();
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
	ycgwcsl()
})
window.onload = function(){ 
	//菜单二级联动
	function erji(){
		/*
		 设置左侧菜单开始
		*/

		// 获取元素
		var menu = document.getElementById('list_div_cd');
		// console.log(menu);
		var lis = menu.children[0].children;
		var content = document.getElementById('list_div_cd2');
		// console.log(content);
		var ctt = content.children;
		//console.log(ctt);
		//声明变量
		var index = 0;
		//console.log(lis);
		// 鼠标移入移出事件
		for(var i=0;i<lis.length;i++){
			// 添加标志 
			lis[i].index = i;
			// console.log(lis[i]);
			lis[i].onmouseover = function(){
				// 改变背景颜色
				lis[this.index].style.background = '#999395'; 
				 // 显示
				ctt[this.index].style.display='block';
				content.style.display='block';
				
			}
			lis[i].onmouseout = function(){ 
				lis[this.index].style.background = ''; 
				// 隐藏
				ctt[this.index].style.display='none'; 
				content.style.display='none';
			}
		}
		// 鼠际移入移出ctt
		for(var j=0;j<ctt.length;j++){ 
			ctt[j].index = j;
			ctt[j].onmouseover = function(){ 
				lis[this.index].style.background = '#999395'; 
				this.style.display='block';
				content.style.display='block';
			}
			ctt[j].onmouseout = function(){ 
				lis[this.index].style.background = ''; 
				this.style.display = 'none';
				content.style.display='none';
			}
		}

		/*
		 设置左侧菜单结束
		*/ 
	}
	erji()
	//遮罩层
	function zzc(){
		// 获取登录按钮
		var logBtn = document.getElementById('log');
		var login = document.getElementById('login');
		var bg = document.getElementById('bg');
		var close = document.getElementById('close');
		logBtn.onclick = function(){
			// 调用函数
			setLoginMiddle();

			// 显示蒙版
			bg.style.display = 'block';
			// 设置宽度和高度 
		} 

		// 定义当前的窗口可视区域的宽度/高度
		var cW;
		var cH;

		/**
		* 定义login登录框居中显示
		*/ 
		function setLoginMiddle(){
			// 判断当前可视区域的宽度和高度
			cW = document.documentElement.clientWidth;
			cH = document.documentElement.clientHeight;

			// 元素显示
			login.style.display = 'block';

			// 计算元素的left和top的值
			// console.log(login.offsetWidth);
			var newLeft = (cW - login.offsetWidth)/2;
			var newTop = (cH-login.offsetHeight)/2;
			// console.log(newLeft);
			// console.log(newTop);



			// 赋值操作
			login.style.top = newTop+'px';
			login.style.left = newLeft + 'px';
		}


		/*
			1. 鼠标按下可以移动登录框
			2. 单击关闭按钮使登录框消失
			3. 显示登录框时显示蒙版
		*/

		// 鼠标是否在login元素上按下的标志
		var isDown;

		// 按下时鼠标距离login元素的左上角的值
		var chaLeft;
		var chaTop;

		// 1. 鼠标按下可以移动登录框
		window.onmousemove = function(e){
			// 判断鼠标是否已经在login身上按下
			if(!isDown){
				// 终止程序，不再向下执行
				return;
			}

			// 当前鼠标的位置
			var newLeft = e.clientX - chaLeft;
			var newTop = e.clientY - chaTop;

			// 最小值
			if(newLeft<=0){
				newLeft = 0;
			}
			if(newTop<=0){
				newTop = 0;
			}
			if(newLeft>=(cW-login.offsetWidth)){
				newLeft = cW-login.offsetWidth;
			}
			if(newTop>=(cH-login.offsetHeight)){
				newTop = cH-login.offsetHeight;
			}

			// 赋值
			login.style.top = newTop+'px';
			login.style.left = newLeft+'px';
		}

		
		login.onmousedown = function(e){
			// 按下修改标志
			isDown = true;

			// 获取鼠标按下时刻与login元素的左上角的偏移值
			chaLeft = e.clientX - login.offsetLeft;
			chaTop = e.clientY - login.offsetTop;
		}

		// 鼠标抬起
		login.onmouseup = function(){
			isDown = false;
		}

		// 关闭按钮
		close.onclick = function(){
			login.style.display = 'none';
			bg.style.display = 'none';
		}
	}
	zzc();
}
