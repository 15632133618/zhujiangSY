$('.listnav .nLi').hover(function(){
	$(this).find('.sub').css('display','block');
},function(){
	$(this).find('.sub').css('display','none');
})
// 教学动态tab
// $('ul.news_tabhd li').bind('mouseenter',function () {
// 	 var i = $(this).index();
// 	 var newsTap = $('div.news_tabbd').find('span.fix');
// 	 $('ul.news_tabhd li').removeClass('news_tabon');
// 	 $(this).addClass('news_tabon');
// 	 newsTap.removeClass('newstab_show');
// 	 newsTap.eq(i).addClass('newstab_show');
// });
$('ul.news_tabhd li').bind('mouseenter',function () {
	 var i = $(this).index();
	 var newsTap = $('div.news_tabbd').find('span.fix');
	 $('ul.news_tabhd li').removeClass('news_tabon');
	 $(this).addClass('news_tabon');
	 newsTap.removeClass('newstab_show');
	 newsTap.eq(i).addClass('newstab_show');
});
// 顶部大图滚动
$(function(){
	var imgW=$('.big_con img').width();

	var x=1;//图片下标
	var n=0;//数字下标
	var time=null;
	var fir=$('.big_con img:first').clone();
	var lst=$('.big_con img:last').clone();
	$('.big_con').append(fir);                    //最后添加第一张图，最前面添加最后一张图
	$('.big_con').prepend(lst);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

	$('.big_inner').scrollLeft($('.big_con img').width());   //初始位置
	$('.big_list li').click(function(){
		clearInterval(time);
		n=$('.big_list li').index(this);
		x=n+1;
		$('.big_list li').eq(n).addClass('xiabiao').siblings().removeClass('xiabiao');
		$('.big_inner').stop().animate({scrollLeft:imgW*x});
		move();
	})
	function move(){
		time=setInterval(function(){
			x++;
			if (x>=$('.big_con img').length) {
				x=2;
				$('.big_inner').scrollLeft(imgW);
			};
			n++;
			if (n>=$('.big_list li').length) {
				n=0;
			};
			$('.big_inner').stop().animate({scrollLeft:imgW*x});
			$('.big_list li').eq(n).addClass('xiabiao').siblings().removeClass('xiabiao');
		},2000)
	}
	move();
})
// tab部分大图滚动
$(function(){
	var imgW=$('.news_con1 a').width();

	var x=1;//图片下标
	var n=0;//数字下标
	var time=null;
	var fir=$('.news_con1 a:first').clone();
	var lst=$('.news_con1 a:last').clone();
	$('.news_con1').append(fir);                    //最后添加第一张图，最前面添加最后一张图
	$('.news_con1').prepend(lst);

	$('.news_inner1').scrollLeft($('.news_con1 a').width());   //初始位置
	$('.news_list1 li').click(function(){
		clearInterval(time);
		n=$('.news_list1 li').index(this);
		x=n+1;
		$('.news_list1 li').eq(n).addClass('on1').siblings().removeClass('on1');
		$('.news_inner1').stop().animate({scrollLeft:imgW*x});
		move();
	})
	function move(){
		time=setInterval(function(){
			x++;
			if (x>=$('.news_con1 a').length) {

				x=2;
				$('.news_inner1').scrollLeft(imgW);
			};
			n++;
			if (n>=$('.news_list1 li').length) {
				n=0;
			};
			$('.news_inner1').stop().animate({scrollLeft:imgW*x});
			$('.news_list1 li').eq(n).addClass('on1').siblings().removeClass('on1');
		},2000)
	}
	move();
})
$(function(){
	var imgW=$('.news_con2 a').width();

	var x=1;//图片下标
	var n=0;//数字下标
	var time1=null;
	var fir=$('.news_con2 a:first').clone();
	var lst=$('.news_con2 a:last').clone();
	$('.news_con2').append(fir);                    //最后添加第一张图，最前面添加最后一张图
	$('.news_con2').prepend(lst);

	$('.news_inner2').scrollLeft($('.news_con2 a').width());   //初始位置
	$('.news_list2 li').click(function(){
		clearInterval(time1);
		n=$('.news_list2 li').index(this);
		x=n+1;
		$('.news_list2 li').eq(n).addClass('on1').siblings().removeClass('on1');
		$('.news_inner2').stop().animate({scrollLeft:imgW*x});
		move();
	})
	function move(){
		time1=setInterval(function(){
			x++;
			if (x>=$('.news_con2 a').length) {

				x=2;
				$('.news_inner2').scrollLeft(imgW);
			};
			n++;
			if (n>=$('.news_list2 li').length) {
				n=0;
			};
			$('.news_inner2').stop().animate({scrollLeft:imgW*x});
			$('.news_list2 li').eq(n).addClass('on1').siblings().removeClass('on1');
		},2000)
	}
	move();
})
// 教育教研tab
$('.teachingtab_tit a').bind('mouseenter',function () {
	 var b = $(this).index();
	 var teachingTap = $('.teachingtab_con').find('span');
	 $('.teachingtab_tit a').removeClass('select');
	 $(this).addClass('select');
	 teachingTap.removeClass('show');
	 teachingTap.eq(b).addClass('show');
});
// 百叶窗效果
$('.baiye_con1 li:nth-child(odd)').click(function(){
	var c=$(this).index();
	$('.baiye_con1 li:nth-child(even)').stop().animate({'width':'0px'},0);
	$('.baiye_con1 li:nth-child(odd)').css('display','block');
	$('.baiye_con1 li').eq(c).css('display','none');
	$('.baiye_con1 li').eq(c+1).stop().animate({'width':'585px'},0);
})
$('.baiye_con2 li:nth-child(odd)').click(function(){
	var c=$(this).index();
	$('.baiye_con2 li:nth-child(even)').stop().animate({'width':'0px'},0);
	$('.baiye_con2 li:nth-child(odd)').css('display','block');
	$('.baiye_con2 li').eq(c).css('display','none');
	$('.baiye_con2 li').eq(c+1).stop().animate({'width':'585px'},0);
})
$('.baiye_con3 li:nth-child(odd)').click(function(){
	var c=$(this).index();
	$('.baiye_con3 li:nth-child(even)').stop().animate({'width':'0px'},0);
	$('.baiye_con3 li:nth-child(odd)').css('display','block');
	$('.baiye_con3 li').eq(c).css('display','none');
	$('.baiye_con3 li').eq(c+1).stop().animate({'width':'585px'},0);
})
// 教师风采
$('.mientab_tit a').bind('mouseenter',function () {
	 var f= $(this).index();

	 var mienTap = $('.mientab_con').find('span');
	 $('.mientab_tit a').removeClass('select');
	 $(this).addClass('select');
	 mienTap.removeClass('show');
	 mienTap.eq(f).addClass('show');
});
// 教师风采滚动
$(function(){
	var imgW=$('.sr_miencon .sr_miengun').width();
	var x=1;//图片下标
	var fir=$('.sr_miencon .sr_miengun:first').clone();
	var lst=$('.sr_miencon .sr_miengun:last').clone();
	$('.sr_miencon').append(fir);                    //最后添加第一张图，最前面添加最后一张图
	$('.sr_miencon').prepend(lst);
	var a=$('.sr_miengun');
	$('.sr_mieninner').scrollLeft($('.sr_miencon .sr_miengun').width());   //初始位置
	$('.btn1').click(function(){
		x++;
		if (x>=5) {
			x=2;
			$('.sr_mieninner').scrollLeft(imgW);
		};
		$('.sr_mieninner').stop().animate({scrollLeft:imgW*x});
	})

	$('.btn2').click(function(){
		x--;
		if (x<=0) {
			x=2;
			$('.sr_mieninner').scrollLeft(imgW*(x+1));
		};
		$('.sr_mieninner').stop().animate({scrollLeft:imgW*x});
	})
})	

// 教育之窗
$('.windtab_tit a').bind('mouseenter',function () {
	 var f= $(this).index();

	 var mienTap = $('.windtab_inner').find('span');
	 $('.windtab_tit a').removeClass('select');
	 $(this).addClass('select');
	 mienTap.removeClass('show');
	 mienTap.eq(f).addClass('show');
});
// 教育之窗滚动
$.fn.extend({
	tmdqh1:function (){
		var m=0;
		var $_this=$(this);
		$_this.find('.wind_btn1').click(function (){
			m--;
			if (m<0) {
				m=$_this.find('.windscr_con .windscr_gun').length-1;
			};
			bian();
		});
		$_this.find('.wind_btn2').click(function (){
			m++;
			if (m>=$_this.find('.windscr_con .windscr_gun').length) {
				m=0;
			};
			bian();
		});
		function bian(){
			$_this.find('.windscr_con .windscr_gun').eq(m).fadeIn().siblings().hide();
		}
	}
})
$(function (){
	$('#w1').tmdqh1();
	$('#w2').tmdqh1();
	$('#w3').tmdqh1();
})
// 诚雅少年
$('.youngtab_tit a').bind('mouseenter',function () {
	 var f= $(this).index();

	 var mienTap = $('.youngtab_inner').find('span');
	 $('.youngtab_tit a').removeClass('select');
	 $(this).addClass('select');
	 mienTap.removeClass('show');
	 mienTap.eq(f).addClass('show');
});
// 诚雅少年滚动
$.fn.extend({
	tmdqh2:function (){
		var m=0;
		var $_this=$(this);
		$_this.find('.young_btn1').click(function (){
			m--;
			if (m<0) {
				m=$_this.find('.youngscr_con .youngscr_gun').length-1;
			};
			bian();
		});
		$_this.find('.young_btn2').click(function (){
			m++;
			if (m>=$_this.find('.youngscr_con .youngscr_gun').length) {
				m=0;
			};
			bian();
		});
		function bian(){
			$_this.find('.youngscr_con .youngscr_gun').eq(m).fadeIn().siblings().hide();
		}
	}
})
$(function (){
	$('#y1').tmdqh2();
	$('#y2').tmdqh2();
})
// 校园风貌滚动
$.fn.extend({
	tmdqh3:function (){
		var l=0;
		var $_this=$(this);
		$_this.find('.scenery_btn1').click(function (){
			l--;
			if (l<0) {
				l=$_this.find('.sceneryscr_con span').length-1;
			
			};
			bian();
		});
		$_this.find('.scenery_btn2').click(function (){
			l++;
			if (l>=$_this.find('.sceneryscr_con span').length) {
				l=0;
			};
			bian();
		});
		function bian(){
			var sss=$('.sceneryscr_con span').length;
			$_this.find('.sceneryscr_con span').css('display','none');
			$_this.find('.sceneryscr_con span').eq(l).css('display','block');
		}
	}
})
$(function (){
	$('.sceneryscr_out').tmdqh3();
})


$('#right_bar a').hover(function (e) {
	$('#right_bar').children().css('background','');
	$(this).css('background','url(images/right_bar'+ ($(this).index()+1) +'.gif) center center no-repeat');
	($(this).index()==3) && $('.ewm').show();
},function () {
	$('#right_bar a').css('background','');
	$('.ewm').hide();
});
$('#right_bar span').click(function () {
        var speed=600;//滑动的速度
        $('body,html').animate({scrollTop: 0}, speed);
        return false;
 });
$('#right_bar a').eq(1).click(function(){
		var speed=600;//滑动的速度
        $('body,html').animate({scrollTop: 4500}, speed);
        return false;
})