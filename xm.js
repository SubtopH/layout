//导航下拉菜单部分
			$('.sousuo .zhong1 .navhz .navxl')
			//设置下拉菜单的宽度和body宽度一样
			.width($('body').width())
			//设置下拉菜单左边定位是父级左边距
			.css('left',-$('.navhz').offset().left);
			//移入导航盒子下拉出现
				$('.sousuo .zhong1 .nav').mouseenter(function(){
						$('.navxl').stop().animate({height:230},300).addClass('b');
					});
			//移出导航盒子下拉收起
				$('.sousuo .zhong1 .nav').mouseleave(function(){
						$('.navxl').stop().animate({height:0},200).removeClass('b');
					});
			//移入a标签时
			$('.sousuo .zhong1 .nav .nava').mouseenter(function(){
			//	获得移入序号
				var c =$(this).index();
					$('.sousuo .zhong1 .navhz .navxl .navxlzhong').eq(c).stop().show().siblings('.navxlzhong').hide();
			});	
	
//导航菜单结束	
	
	
//	搜索框区域效果
//	input获得焦点时,用focus方法
	var x = $('input').focus(function(){
//		下拉菜单显示
		$('.sshz .ssxl').show();
//		输入框文字隐藏
		$('.sshz .mr').css('opacity',0);
//		边框变为橘黄色
		$('.sshz').css('border','#ff6700 solid 1px');
		$('.sshz input').css('border-right','#ff6700 solid 1px')
	})
//	input失去焦点时,用blur方法
	$("input").blur(function(){
//		下拉菜单隐藏
  			$('.sshz .ssxl').hide();
  			$('.sshz .mr').css('opacity',1);
  			$('.sshz').css('border','#e0e0e0 solid 1px');
			$('.sshz input').css('border-right','#e0e0e0 solid 1px')
	});
//搜索框区域结束


//广告区域BANNER
		//定时切换
		var s=0;
//		设置方法
		 function r(){
			s++;
//			判断s范围
			s=s==5?0:s;
//			banner显示隐藏
			$('.guanghz .guangzhong a').eq(s).fadeIn(1000).siblings('a').fadeOut(1000);
//			按键样式变化
			$('.guanghz .guangzhong ul li').eq(s).css('background','rgba(255,255,255,0.5)').siblings('li').css('background','rgba(0,0,0,0.3)');
		};
//		2000毫秒定时器
		var times = setInterval(r,4000);
		
		
		
		
//移入时清除定时器
		$('.guanghz .guangzhong a .banner').mouseover(function(){
			clearInterval(times);
		});
		
		
//移入左右按键清除定时器
		$('.guanghz .guangzhong .jianyou').mouseover(function(){
			clearInterval(times);
		});
		$('.guanghz .guangzhong .jianzuo').mouseover(function(){
			clearInterval(times);
		});
		
		
//移入底部按钮按键清除定时器
		$('.guanghz .guangzhong ul').mouseover(function(){
			clearInterval(times);
		});
//移出图片时恢复定时器
		$('.guanghz .guangzhong a .banner').mouseleave(function(){
			times = setInterval(r,4000);
		});
//移出左右按键时恢复定时器
		$('.guanghz .guangzhong .jianyou').mouseleave(function(){
			times = setInterval(r,4000);
		});
		$('.guanghz .guangzhong .jianzuo').mouseleave(function(){
			times = setInterval(r,4000);
		});
		
//点击底部按键切换图片
		$('.guanghz .guangzhong ul li').click(function(){
//			获得点击序号
			 s = $(this).index();
//			 banner和按键切换样式
			$('.guanghz .guangzhong a').eq(s).fadeIn(200).siblings('a').fadeOut(200);
			$('.guanghz .guangzhong ul li').eq(s).css('background','rgba(255,255,255,0.5)').siblings('li').css('background','rgba(0,0,0,0.3)');
		})
//点击左右按键切换
		$('.guanghz .guangzhong .jianyou').click(function(){
//			有按键时,序号++
			s++
			s=s==5?0:s;
//			样式变化
			$('.guanghz .guangzhong a').eq(s).stop().fadeIn(200).siblings('a').fadeOut(200);
			$('.guanghz .guangzhong ul li').eq(s).css('background','rgba(255,255,255,0.5)').siblings('li').css('background','rgba(0,0,0,0.3)');
			
		})
		$('.guanghz .guangzhong .jianzuo').click(function(){
//			做按键时,序号--
			s--
			s=s==-1?4:s;
//			样式变化
			$('.guanghz .guangzhong a').eq(s).stop().fadeIn(200).siblings('a').fadeOut(200);
			$('.guanghz .guangzhong ul li').eq(s).css('background','rgba(255,255,255,0.5)').siblings('li').css('background','rgba(0,0,0,0.3)');
			
		})


	
	//广告区域左边菜单移入效果
	$('.guanghz .guangzhong .zuo .zhu').mouseenter(function(){
		var c = $(this).index();
		$('.guanghz .guangzhong .zuo .zuoxl').eq(c).show().siblings('.zuoxl').hide();
	})
	//移出效果
	$('.guanghz .guangzhong .zuo .zuoxl').mouseleave(function(){
		
		$('.guanghz .guangzhong .zuo .zuoxl').hide();
	});
	$('.guanghz .guangzhong').mouseleave(function(){
		
		$('.guanghz .guangzhong .zuo .zuoxl').hide();
	});
	//广告区域结束



//闪购交互效果
//全局变量
var c=0
//点击右侧
$('.zyyou i').click(function(){
//	点击序号
	c++;
//	判断点击次数范围
	c=c==3?2:c;
//	计算移动宽度
	x=c*-992;
//	判断移动宽度范围
	x=x==-1984?-1240:x;
//	产品展示盒子向左移动
	$('.shangou2 .gouyou .gouyouhz').animate({left:x},300);
//		如果c不等于0
		if(c!=0){
//			左箭头深色，代表可以点击
			$('.shangou .zy .zyzuo i').css('color','#b0b0b0');
		}
//		如果c等于2时
		if(c==2){
//			右箭头浅色,代表不能点击
			$('.shangou .zy .zyyou i').css('color','#e0e0e0');
		}
	
})

//点击右侧--同--点击左侧
$('.zyzuo i').click(function(){
//	点击序号
	c--;
//	判断序号范围
	c=c==-1?0:c;
//	计算新移动距离,当前距离加上992
	y=c*(x+992);
//	产品盒子向右移动
	$('.shangou2 .gouyou .gouyouhz').animate({left:y},300);
//		如果c不等于2时
		if(c!=2){
//			右箭头为深色,可以点击
			$('.shangou .zy .zyyou i').css('color','#b0b0b0');
		}
//		如果c等于0时
		if(c==0){
//			左侧箭头为浅色,代表不可以点击
			$('.shangou .zy .zyzuo i').css('color','#e0e0e0');
		}
})




//左右箭头移入效果

//移入左箭头
$('.shangou .zy .zyzuo i').hover(function(){
//	如果c不等于0,代表可以点击
		if(c!=0){
//			可以点击情况下,移入时颜色为橘黄色加粗
			$('.shangou .zy .zyzuo i').css({'color':'#ff6700','font-weight':1000});
		}
},function(){
//	移出时
	//	如果c不等于0,代表可以点击
	if(c!=0){
//		取消橘黄色
		$('.shangou .zy .zyzuo i').css('color','#b0b0b0');
	}
});

//移入右箭头
$('.shangou .zy .zyyou i').hover(function(){
//		如果c不等于2，代表可以点击
		if(c!=2){
//			可以点击情况下,移入时颜色为橘黄色加粗
			$('.shangou .zy .zyyou i').css({'color':'#ff6700','font-weight':1000});
		}
},function(){
//	移出时
//	如果不等于2
	if(c!=2){
//		恢复颜色
		$('.shangou .zy .zyyou i').css('color','#b0b0b0');
	}
})

//倒计时效果

//变量时间差,总毫秒
var zongshi = 7892154;
//创建时分秒计算函数
function run(){
//	计算小时
	var shi = parseInt(zongshi/(60*60*1000));
//	计算剩余分
	newshi = zongshi%(60*60*1000);
//	计算分
	var fen = parseInt(newshi/(60*1000));
//	计算剩余秒
	newshi = zongshi%(60*1000);
//	计算秒
	var miao = parseInt(newshi/1000);
//	写入对应布局中显示利用html()写入
	$('.dshz .bianshi').eq(0).html(shi);
	$('.dshz .bianshi').eq(1).html(fen);
	$('.dshz .bianshi').eq(2).html(miao);
}
//页面加载时先运行一次时间显示,不运营会等一秒后显示
run();
//1000毫秒定时器
setInterval(function(){
//	每隔一秒时间减少1秒,1秒等于1000毫秒
	zongshi=zongshi-1000;
//	在计算新的函数
	run();
},1000);
//倒计时效果结束








//家电右边切换效果
//移入标题右边菜单
$('.jiadian .jiabiao ul li').mouseenter(function(){
//	获取移入的序号
	var c = $(this).index();
//	显示对应序号的产品信息,隐藏其它信息
	$('.jiadian .jianei .jiayou .fenye').eq(c).show().siblings('.fenye').hide();
//	被移入的菜单添加class  f （橘黄色，鼠标样式）.其它菜单取消f
	$(this).addClass('f').siblings().removeClass('f');
//	改变当前移入元素下边框元素
	$(this).css('border-bottom-color','#ff6700').siblings().css('border-bottom-color','#f5f5f5');
	
})




//推荐区域效果
//设置总变量
var t = 0;
//点击右侧时
$('.tuijian .tuib .zy .zyyou i').click(function(){
//	点击序号
	t++;
//	设置序号范围
	t=t==4?3:t;
//	计算移动距离
	var j = t*-1242;
//	赋值给元素
	$('.tuijian .tuijianhz .chz').animate({left:j});
//	点击右侧按键,s不等于0时,代表左侧可以点击,所以左侧为深色
	
	if(t!=0){
		$('.tuijian .tuib .zy .zyzuo i').css('color','#b0b0b0');
	}
//	点击右侧按键,s等于3时,代表右侧不可以点击,所以左侧为浅色
	if(t==3){
		$('.tuijian .tuib .zy .zyyou i').css('color','#e0e0e0');
	}
	
	
})
//点击左侧
$('.tuijian .tuib .zy .zyzuo i').click(function(){
//	点击序号
	t--;
//	设置序号范围
	t=t==-1?0:t;
//	计算移动距离
	var j = t*-1242;
//	赋值给元素
	$('.tuijian .tuijianhz .chz').animate({left:j});
//	点击左侧按键,s不等于3时,右侧可以点击,为深色
	if(t!=3){
		$('.tuijian .tuib .zy .zyyou i').css('color','#b0b0b0');
	}
//	点击左侧按键,s等于0时,左侧可以点击,为浅色
	if(t==0){
		$('.tuijian .tuib .zy .zyzuo i').css('color','#e0e0e0');
	};
	
})


//移入时效果
$('.tuijian .tuib .zy .zyyou i').hover(function(){
//	条件s不等于3时有移入效果
	if(t!=3){
		$('.tuijian .tuib .zy .zyyou i').css('color','#ff6700');
	}

},function(){
	if(t!=3){
		$('.tuijian .tuib .zy .zyyou i').css('color','#b0b0b0');
	}
	
})
	
	
$('.tuijian .tuib .zy .zyzuo i').hover(function(){
//	条件s不等于时有移入效果
	if(t!=0){
		$('.tuijian .tuib .zy .zyzuo i').css('color','#ff6700');
	}

},function(){
	if(t!=0){
		$('.tuijian .tuib .zy .zyzuo i').css('color','#b0b0b0');
	}
	
})	

//推荐结束



//内容区域开始
//轮播图开始
//点击左右时
//var n = 0;
////点击右侧
//$('.nei .neinei .neineihz .neiyou').click(function(){
////	点击左侧序号加加
//	n++;
////	判断序号范围
//	n=n==3?2:n;
////	计算移动距离
//	nl = n*-296;
////	设置元素移动距离left
//	$('.nei .neinei .neineihz .neineichz .neichz').animate({left:nl});
////	设置底部按键样式,默然选中样式class=n,
////				选中取消经过样式class=jing,
////				为选中样式取消n,添加经过样式jing;
//	$('.nei .neinei .neineihz ul li').eq(n).addClass('n').removeClass('jing').siblings('li').removeClass('n').addClass('jing');
//})
////点击左侧
//$('.nei .neinei .neineihz .neizuo').click(function(){
//	n--;
//	n=n==-1?0:n;
//	nl = n*-296;
//	$('.nei .neinei .neineihz .neineichz .neichz').animate({left:nl});
//	$('.nei .neinei .neineihz ul li').eq(n).addClass('n').removeClass('jing').siblings('li').removeClass('n').addClass('jing');
//})
//
////点击底部圆按键
//$('.nei .neinei .neineihz ul li').click(function(){
//	n = $(this).index();
//	nl = n*-296;
//	$('.nei .neinei .neineihz .neineichz .neichz').animate({left:nl});
//	$('.nei .neinei .neineihz ul li').eq(n).addClass('n').removeClass('jing').siblings('li').removeClass('n').addClass('jing');
//})












//移入元素时
//大元素序号
var hz
//移入时获得移入
$('.nei .neinei .neineihz').mouseenter(function(){
//	获得对应hz序号
	hz = $(this).index();
});		
//按键序号变量
		var n=[0,0,0,0];
//	点击右侧按键
		$('.nei .neinei .neineihz').find('.neiyou').click(function(){		
		//	根据对应序号，计算对应元素里底部按键个数
			z=$('.nei .neinei .neineihz').eq(hz).find('ul li').length
		//	点击左侧序号加加
			n[hz]++;
		//	根据底部按键个数，判断序号范围
			n[hz]=n[hz]==z?z-1:n[hz];
		//	计算移动距离
			nl = n[hz]*-296;
		//	设置对应hz元素移动距离left，
				$('.nei .neinei .neineihz').eq(hz).find('.neineichz .neichz').animate({left:nl},500);
				$('.nei .neinei .neineihz').eq(hz).find('ul li').eq(n[hz]).addClass('n').removeClass('jing').siblings('li').removeClass('n').addClass('jing');	
		})
//点击左侧按键
		$('.nei .neinei .neineihz').find('.neizuo').click(function(){
		n[hz]--;
		n[hz]=n[hz]==-1?0:n[hz];
		nl = n[hz]*-296;
				$('.nei .neinei .neineihz').eq(hz).find('.neineichz .neichz').animate({left:nl},500);
				$('.nei .neinei .neineihz').eq(hz).find('ul li').eq(n[hz]).addClass('n').removeClass('jing').siblings('li').removeClass('n').addClass('jing');
		});
		
		
		
		
//点击底部圆按键
	$('.nei .neinei .neineihz').find('ul li').click(function(){
	n[hz] = $(this).index();
	nl = n[hz]*-296;
				$('.nei .neinei .neineihz').eq(hz).find('.neineichz .neichz').animate({left:nl},500);
		
				$('.nei .neinei .neineihz').eq(hz).find('ul li').eq(n[hz]).addClass('n').removeClass('jing').siblings('li').removeClass('n').addClass('jing');
	
});


//推荐部分结束



//整个页面左侧固定菜单滚动条效果
$(window).scroll(function(){
	var top = $(document).scrollTop();
	if(top>800){
		$('.youce .youcedd').css('opacity',1);
	}else{
		$('.youce .youcedd').css('opacity',0);
	}
})

