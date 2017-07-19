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
	//放大镜
	function fangdajing(){ 
		//设置show_fdj元素的mousemove
		$('#show_fdj').mousemove(function(e){
			//计算move元素的left和top值
			//e.pageX 相对于 文档左上角的水平偏移
			//e.pageY 相对于 文档左上角的垂直偏移
			var newLeft = e.pageX - $('#show_fdj').offset().left - $('#move_fdj').width()/2;
			var newTop = e.pageY - $('#show_fdj').offset().top - $('#move_fdj').height()/2;
			//水平方向的临界点判断
			if(newLeft<=0){
				newLeft = 0;
			}
			if(newLeft>=$('#show_fdj').width()-$('#move_fdj').width()){
				newLeft = $('#show_fdj').width()-$('#move_fdj').width();
			}
			//垂直方向的临界点判断
			if(newTop<=0){
				newTop = 0;
			}
			if(newTop>=$('#show_fdj').height()-$('#move_fdj').height()){
				newTop = $('#show_fdj').height()-$('#move_fdj').height();
			}
			//比例
			//newLeft / show_fdj.width = bigImg.left / bigImg.width
			var bigImg = $('#big_fdj img');
			var newBigLeft = newLeft * bigImg.width() / $('#show_fdj').width();
			var newBigTop = newTop * bigImg.height() / $('#show_fdj').height();
			//赋值操作
			$('#move_fdj').css({
				left:newLeft,
				top:newTop
			})
			//给大图进行赋值
			bigImg.css({
				left : -newBigLeft,
				top : -newBigTop
			})
			
		}).mouseover(function(){
			//让move显示
			$('#move_fdj').css('display','block');
			//show_fdj() 让元素显示
			$('#move_fdj').show();
			$('#big_fdj').show(); 
		}).mouseout(function(){ 
			$('#move_fdj').hide();
			$('#big_fdj').hide(); 
		})
		//图片列表的单击事件
		$('#imglist a img').click(function(){
			//获取当前图片的地址
			$('#small img').attr('src',$(this).attr('src'));
			$('#big_fdj img').attr('src',$(this).attr('src'));
		}) 
	}
	fangdajing();
	//款式
	function kuans(){ 
		var $menu_li = $(".sp_ps_xq_zc .kexuan"); 
		$menu_li.click(function(){ 
			$(this).addClass("yh").siblings().removeClass("yh");
		}) 
	}
	kuans();
	//回到顶部 
	function hddb(){ 
		//回到顶部
		$(window).scroll(function(){     
			$('#fhdb_yc').click(function(){ 
		        $('body,html').animate({ scrollTop:0},1); 
     			return false;
            })   
        })
	}
	hddb(); 
	//商品评论商品详情选项卡
	function spplxxk(){ 
		var $spplxxk = $(".shangpinjs-l a"); 
		$spplxxk.click(function(){ 
			$(this).addClass("shangpinred") //当前<li>高亮 
			.siblings().removeClass("shangpinred"); //去掉其它同辈<li>的高亮 
			var index = $spplxxk.index( $(this) ); //找到<li>子节点的索引 
			$(".spxqy_div_plxxk > div") //索引为N的DIV显示出来 
			.eq(index).show() 
			.siblings().hide();  
			$("html,body").animate({scrollTop:$(".spzhpx").offset().top-1},10); 
		}) 
	}
	spplxxk();
	//商品评论商品详情选项卡 好中差
	function spplxxk_hzc(){ 
		var $spplxxk = $(".filter-list .filter-li"); 
		$spplxxk.click(function(){ 
			$(this).addClass("current") //当前<li>高亮 
			.siblings().removeClass("current"); //去掉其它同辈<li>的高亮 
			var index = $spplxxk.index( $(this) ); //找到<li>子节点的索引 
			$(".tab-con .comment_div_pj") //索引为N的DIV显示出来 
			.eq(index).show() 
			.siblings().hide();   
		}) 
	}
	spplxxk_hzc();

	//商品详情页 吸顶
	function xiding(){
		$(window).scroll(function(){
			var iTop_pl = $(window).scrollTop(); 
			if(iTop_pl>=$('.ggybz').offset().top){ 
				$('#shangpinjs').addClass('shangpinjs_xd'); 
			}else{  
				$('#shangpinjs').removeClass('shangpinjs_xd'); 
			}
			if(iTop_pl>=$('.ggybz').offset().top){ 
				$('.popbox-inner .mt').addClass('shangpinjs_xd_2'); 
			}else{  
				$('.popbox-inner .mt').removeClass('shangpinjs_xd_2'); 
			}
		})
	}
	xiding();
	// jquery ajax 请求  
	function getList(){
		$.ajax({
			type:'post',
			url :"./php/1.php",
			data:{
			getFunction:1
		},success:function(data,status){  
			$('#infolist').html(''); 
			$str = '';  
			$.each(data.list,function(i,val){ 
			
	    	$str = $str + '<div class="comment-item" >';
	    	$str = $str + '<div class="user-column">';
	    	$str = $str + '<div class="user-info">';
	    	$str = $str + '<img src="'+val.img+'" width="25" height="25" class="avatar">'+val.name;
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '<div class="user-level">';                            		 
	    	$str = $str + '<span style="color:#666666">'+val.dengj+'</span>'+val.diz;                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '<div class="comment-column J-comment-column">';                            		 
	    	$str = $str + '<div class="comment-star '+val.pldj+'"></div>';                            		 
	    	$str = $str + '<p class="comment-con">'+val.plnr+'</p>';                            		 
	    	$str = $str + '<div class="pic-list J-pic-list">';                            		 
	    	$str = $str + '<a class="J-thumb-img"><img src="'+val.shaiTimg+'" width="48" height="48"></a>';                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '<div class="J-pic-view-wrap clearfix"></div>';                            		 
	    	$str = $str + '<div class="comment-message">';                            		 
	    	$str = $str + '<div class="order-info">';                            		 
	    	$str = $str + '<span>'+val.yansKs+'</span>';                            		 
	    	$str = $str + '<span>'+val.banbKs+'</span>';                            		 
	    	$str = $str + '<span>'+val.pjtime+'</span>';                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '<div class="comment-op">';                            		 
	    	$str = $str + '<a class="J-nice"><i class="sprite-praise"></i>'+val.dianz+'</a>';                            		 
	    	$str = $str + '<a><i class="sprite-comment"></i>'+val.pingl+'</a>';                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '</div>';                            		 
	    	$str = $str + '</div>';          
	    	$str = $str + '</div>'; 
        
		}); 
		$('#infolist').append($str);
		if(data.list == "" || data.list.length < 0 || data.list == "undefined"){
			$('#infolist').html('不可能');
		}
		},error:function(data,statsu){
			alert("发送请求失败！");
		}
		});
	}
	function getList1(){
		$.ajax({
			type:'post',
			url :"./php/2.php",
			data:{
			getFunction:1
		},success:function(data,status){   
			$('#infolist1').html(''); 
			$str3 = '';  
			$.each(data.list,function(i,val){ 
			
	    	$str3 = $str3 + '<div class="comment-item" >';
	    	$str3 = $str3 + '<div class="user-column">';
	    	$str3 = $str3 + '<div class="user-info">';
	    	$str3 = $str3 + '<img src="'+val.img+'" width="25" height="25" class="avatar">'+val.name;
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '<div class="user-level">';                            		 
	    	$str3 = $str3 + '<span style="color:#666666">'+val.dengj+'</span>'+val.diz;                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '<div class="comment-column J-comment-column">';                            		 
	    	$str3 = $str3 + '<div class="comment-star '+val.pldj+'"></div>';                            		 
	    	$str3 = $str3 + '<p class="comment-con">'+val.plnr+'</p>';                            		 
	    	$str3 = $str3 + '<div class="pic-list J-pic-list">';                            		 
	    	$str3 = $str3 + '<a class="J-thumb-img"><img src="'+val.shaiTimg+'" width="48" height="48"></a>';                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '<div class="J-pic-view-wrap clearfix"></div>';                            		 
	    	$str3 = $str3 + '<div class="comment-message">';                            		 
	    	$str3 = $str3 + '<div class="order-info">';                            		 
	    	$str3 = $str3 + '<span>'+val.yansKs+'</span>';                            		 
	    	$str3 = $str3 + '<span>'+val.banbKs+'</span>';                            		 
	    	$str3 = $str3 + '<span>'+val.pjtime+'</span>';                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '<div class="comment-op">';                            		 
	    	$str3 = $str3 + '<a class="J-nice"><i class="sprite-praise"></i>'+val.dianz+'</a>';                            		 
	    	$str3 = $str3 + '<a><i class="sprite-comment"></i>'+val.pingl+'</a>';                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '</div>';                            		 
	    	$str3 = $str3 + '</div>';          
	    	$str3 = $str3 + '</div>'; 
	    
		}); 
		$('#infolist_1').append($str3);
		if(data.list == "" || data.list.length < 0 || data.list == "undefined"){
			$('#infolist1').html('不可能');
		}
		},error:function(data,statsu){
			alert("发送请求失败！");
		}
		});
	}
	function getList2(){
		$.ajax({
			type:'post',
			url :"./php/3.php",
			data:{
			getFunction:1
		},success:function(data,status){   
			$('#infolist_2').html(''); 
			$str2 = '';  
			$.each(data.list,function(i,val){ 
			 

        	$str2 = $str2 + '<div class="comment-item" >';
        	$str2 = $str2 + '<div class="user-column">';
        	$str2 = $str2 + '<div class="user-info">';
        	$str2 = $str2 + '<img src="'+val.img+'" width="25" height="25" class="avatar">'+val.name;
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '<div class="user-level">';                            		 
        	$str2 = $str2 + '<span style="color:#666666">'+val.dengj+'</span>'+val.diz;                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '<div class="comment-column J-comment-column">';                            		 
        	$str2 = $str2 + '<div class="comment-star '+val.pldj+'"></div>';                            		 
        	$str2 = $str2 + '<p class="comment-con">'+val.plnr+'</p>';                            		 
        	$str2 = $str2 + '<div class="pic-list J-pic-list">';                            		 
        	$str2 = $str2 + '<a class="J-thumb-img"><img src="'+val.shaiTimg+'" width="48" height="48"></a>';                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '<div class="J-pic-view-wrap clearfix"></div>';                            		 
        	$str2 = $str2 + '<div class="comment-message">';                            		 
        	$str2 = $str2 + '<div class="order-info">';                            		 
        	$str2 = $str2 + '<span>'+val.yansKs+'</span>';                            		 
        	$str2 = $str2 + '<span>'+val.banbKs+'</span>';                            		 
        	$str2 = $str2 + '<span>'+val.pjtime+'</span>';                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '<div class="comment-op">';                            		 
        	$str2 = $str2 + '<a class="J-nice"><i class="sprite-praise"></i>'+val.dianz+'</a>';                            		 
        	$str2 = $str2 + '<a><i class="sprite-comment"></i>'+val.pingl+'</a>';                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '</div>';                            		 
        	$str2 = $str2 + '</div>';          
        	$str2 = $str2 + '</div>';           
		});  
		$('#infolist_2').append($str2); 
		if(data.list == "" || data.list.length < 0 || data.list == "undefined"){
			$('#infolist_2').html('不可能');
		}
		},error:function(data,statsu){
			alert("发送请求失败！");
		}
		});
	}
	function getList3(){
		$.ajax({
			type:'post',
			url :"./php/4.php",
			data:{
			getFunction:1
		},success:function(data,status){   
			$('#infolist_3').html('');
			$str1 = '';  
			$.each(data.list,function(i,val){  

        	$str1 = $str1 + '<div class="comment-item" >';
        	$str1 = $str1 + '<div class="user-column">';
        	$str1 = $str1 + '<div class="user-info">';
        	$str1 = $str1 + '<img src="'+val.img+'" width="25" height="25" class="avatar">'+val.name;
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '<div class="user-level">';                            		 
        	$str1 = $str1 + '<span style="color:#666666">'+val.dengj+'</span>'+val.diz;                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '<div class="comment-column J-comment-column">';                            		 
        	$str1 = $str1 + '<div class="comment-star '+val.pldj+'"></div>';                            		 
        	$str1 = $str1 + '<p class="comment-con">'+val.plnr+'</p>';                            		 
        	$str1 = $str1 + '<div class="pic-list J-pic-list">';                            		 
        	$str1 = $str1 + '<a class="J-thumb-img"><img src="'+val.shaiTimg+'" width="48" height="48"></a>';                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '<div class="J-pic-view-wrap clearfix"></div>';                            		 
        	$str1 = $str1 + '<div class="comment-message">';                            		 
        	$str1 = $str1 + '<div class="order-info">';                            		 
        	$str1 = $str1 + '<span>'+val.yansKs+'</span>';                            		 
        	$str1 = $str1 + '<span>'+val.banbKs+'</span>';                            		 
        	$str1 = $str1 + '<span>'+val.pjtime+'</span>';                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '<div class="comment-op">';                            		 
        	$str1 = $str1 + '<a class="J-nice"><i class="sprite-praise"></i>'+val.dianz+'</a>';                            		 
        	$str1 = $str1 + '<a><i class="sprite-comment"></i>'+val.pingl+'</a>';                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '</div>';                            		 
        	$str1 = $str1 + '</div>';          
        	$str1 = $str1 + '</div>';     
		}); 
		$('#infolist_3').append($str1); 
		if(data.list == "" || data.list.length < 0 || data.list == "undefined"){
			$('#infolist_3').html('不可能');
		}
		},error:function(data,statsu){
			alert("发送请求失败！");
		}
		});
	} 
	getList();
	getList1();
	getList2();
	getList3();
})
//购物车抛物线
$(function($){
	$.extend($.fn,{
		shoping:function(options){
			var self=this,
				$shop=$('.J-shoping'),
				$title=$('.J-shoping-title'),
				$body=$('.J-shoping-body'),
				$num=$('.J-shoping-num'),
				$close=$('.J-shoping-close');
			var S={
				init:function(){
					$title.bind('click',this.clickOnTitle);
					$close.live('click',this.removeList);
					$(self).data('click',true).live('click',this.addShoping);
					$(document).bind('click',S.slideBoxMini);
					$body.bind('click',this.clickOnBody);
				},
				clickOnBody:function(e){
					if(!$(e.target).hasClass('J-shoping-close')){
						e.stopPropagation(); //阻止冒泡	
					};
				},
				addShoping:function(e){
					e.stopPropagation();
					var $target=$(e.target),
						id=$target.attr('id'),
						dis=$target.data('click'),
					    x = $target.offset().left + 30,
						y = $target.offset().top + 10,
						X = $shop.offset().left+$shop.width()/2-$target.width()/2+10,
						Y = $shop.offset().top;  
					if(dis){
						if ($('#floatOrder').length <= 0) {
							$('body').append('<div id="floatOrder"><img src="./static/img/57ad8846N64ac3c79.jpg" width="50" height="50" /></div');
						};
						var $obj=$('#floatOrder');
						if(!$obj.is(':animated')){
							$obj.css({'left': x,'top': y}).animate({'left': X-50,'top':Y+250,},500,function() {
								$obj.stop(false, false).animate({'opacity':0},500,function(){
									$obj.fadeOut(300,function(){
										$obj.remove();	
										$target.data('click',false).addClass('dis-click');
										var l=$('.J-shoping-list').length,
										num=Number($num.text());  
										$num.text(num+1);
									});
								});
							});	
						};
					};
				},
				clickOnTitle:function(e){
					e.stopPropagation();
					var length=$('.J-shoping-list').length;	
					if(length>0){
						if(!$shop.hasClass('J-shoping-small')){
							$body.slideToggle();	
						}else{
							$('.J-shoping-mx').hide();
							$('.J-shoping-px').show();
							$shop.animate({'width':289},100,function(){
								$shop.removeClass('J-shoping-small');
								$body.slideDown();
							});
						};
					};
				},
				
				removeList:function(e){
					e.stopPropagation();
					var $target=$(e.target),
						$parent=$target.parents('.J-shoping-list'),
						id=$parent.attr('data-id');
					$parent.addClass('J-shoping-list-remove').fadeOut(300,function(){
						$('#'+id).data('click',true).removeClass('dis-click');
						$parent.remove();
						S.hideBody();
						if(options&&options.callback){
							options.callback($(self));	
						};	
					});	
				},
				hideBody:function(){
					var length=$('.J-shoping-list').length;	
					$num.text(length);
					if(length==0){
						$('.J-shoping-px,.J-shoping-body').hide();
						$('.J-shoping-mx').show();
						$shop.animate({'width':119},100,function(){
							$shop.addClass('J-shoping-small');
						});	
					};
				}
			};
			S.init(); 
		}
	});	
}); 
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
				lis[this.index].style.background = '#f7f7f7';  
				lis[this.index].setAttribute('class','lb_div_ul_li_span');   
				 // 显示
				ctt[this.index].style.display='block';
				content.style.display='block';
				
			}
			lis[i].onmouseout = function(){ 
				lis[this.index].style.background = '';   
				lis[this.index].removeAttribute('class');   
				// 隐藏
				ctt[this.index].style.display='none'; 
				content.style.display='none';
			}
		}
		// 鼠际移入移出ctt
		for(var j=0;j<ctt.length;j++){ 
			ctt[j].index = j;
			ctt[j].onmouseover = function(){ 
				lis[this.index].style.background = '#f7f7f7';  
				lis[this.index].setAttribute('class','lb_div_ul_li_span');   
				this.style.display='block';
				content.style.display='block';
			}
			ctt[j].onmouseout = function(){ 
				lis[this.index].style.background = ''; 
				lis[this.index].removeAttribute('class'); 
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
