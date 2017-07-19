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
	ycgwcsl() 
	//回到顶部 
	function hddb(){ 
		//回到顶部
		$(window).scroll(function(){    
            $('#fhdb_yc').click(function(){
                $('body,html').animate({"scrollTop":0},1)
     			return false;
            }) 
        })
	}
	hddb();
	//多条件筛选
	function dtjsx(){ 
		//选中filter下的所有a标签，为其添加hover方法，该方法有两个参数，分别是鼠标移上和移开所执行的函数。  
		var i = 0;
		var class_dt;
        $("#filter ul li a").hover(  
            function () {  
                $(this).addClass("seling");  
            },  
            function () {  
                $(this).removeClass("seling");  
            }  
        ); 
    	$("#filter ul li a").each(function(index,a){

			$(a).attr('index',index); 
    	})        
        //为filter下的所有a标签添加单击事件   
        $("#filter ul li a").click(function () {  
			i++; 
			name ='name'+i;  
			console.log(name);
			$(this).parents(".dxx_div_2").attr(name,name);
        	$(this).parents(".dxx_div_2").css({'display':'none'});
            $(this).parents("dl").children("dd").each(function () {  
                $('a',this).removeClass("seled");  
            });  
  
            $(this).attr("class", "seled");  
   
        	$('#dongtai_dtj').html(RetSelecteds()); 
	    	var dtdcjlen = $('#dongtai_dtj>span').length;
	        $('#dongtai_dtj>span').click(function(){  
	        	//console.log(dtdcjlen);
	        	if(dtdcjlen==1){  
		        	$('#dongtai_dtj span').remove(); 
		        	$('#qcsx').css({'display':'none'});
		        	$("#filter ul li a").removeClass("seled");
	        		$("#filter>div").css({'display':'block'});
	        	}
	        	console.log(name);
	        	$("#filter>div["+name+"="+name+"]").css({'display':'block'});
	        	$(this).remove(); 
	        	$("#filter ul li a").removeClass("seled");  
	        	console.log(name); 
	        	$("#dongtai_dtj>span").removeAttr(name);
	        	$("#filter>div").removeAttr(name); 
	        	console.log(name);
	        }) 
	        $('#qcsx').click(function(){ 
	        	$('#dongtai_dtj span').remove(); 
	        	$('#qcsx').css({'display':'none'});
	        	$("#filter ul li a").removeClass("seled");  
	        	$("#filter .dxx_div_2").css({'display':'block'});
	        }) 
			$('#qcsx').css({'display':'inline-block'});
        });    
	    function RetSelecteds() {  
	        var result = "";   
	        $("#filter a[class='seled']").each(function () {     
	        	var leiming = $(this).parents(".dxx_div_2").children(".dxx_div_2_div").children().text();  
	            result += '<span name'+i+'='+'name'+i+'>'+'<b>'+leiming+'</b>'+'<em>'+$(this).html()+'</em>'+'<i></i>'+'</span>'; 
	        });  
	        return result;  
	    }
	    $("#dt_gengdu").click(function(){
		    $(".gdxx_div_yinc").slideDown("slow");
		    $("#dt_gengdu").hide();
		    $("#dt_shouqi").show();
		 });
	    $("#dt_shouqi").click(function(){
		    $(".gdxx_div_yinc").slideUp("slow");
		    $("#dt_shouqi").hide();
		    $("#dt_gengdu").show();
		 });

	  }
	dtjsx();

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
