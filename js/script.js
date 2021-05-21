$(document).ready(function(){
	$(".menu ul li:nth-child(1) a").click(function(){
		$("html, body").animate({scrollTop : $("#cont_01 article:nth-child(1)").offset().top}, 1000);
		return false;
	});

	$(".menu ul li:nth-child(2) a").click(function(){
		$("html, body").animate({scrollTop : $("#cont_01 article:nth-child(2)").offset().top}, 1000);
		return false;
	});

	$(".menu ul li:nth-child(3) a").click(function(){
		$("html, body").animate({scrollTop : $("#cont_02 article:nth-child(1)").offset().top}, 1000);
		return false;
	});

	$(".menu ul li:nth-child(4) a").click(function(){
		$("html, body").animate({scrollTop : $("#cont_02 article:nth-child(2)").offset().top}, 1000);
		return false;
	});

	$("header .logo a").click(function(){
		$("html, body").animate({scrollTop : 0}, 1000);
		return false;
	});

	//animate() 효과 : 움직이는 동적인 모션을 부여
	//scrollTop : 스크롤바의 상단 위치를 가리킴
	//offset().top : 브라우저 상단으로부터 얼마나 떨어져 있는가에 대한 측정값

	//한줄 주석
	/*
	여러줄 주석
	여러줄 주석
	*/


});