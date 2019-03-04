$(function ($) {
	/* 
		顶部侧边菜单栏
	*/
	var $topMenuBtn = $(".menu > a");
	var $topMenu = $(".top-menu");
	var $mask = $(".mask");
	var $close = $(".mask > .menu-close");
	
	$topMenuBtn.on("click", function () {
		$topMenu.animate({left: "0"});
		$mask.fadeIn();
	})

	$mask.on("click", function () {
		$topMenu.animate({left: "-=1000px"});
		$mask.fadeOut();
	})

	$close.on("click", function () {
		$mask.fadeOut();
		$topMenu.animate({left: "-=1000px"});
	})

	/* 
		顶部侧边菜单栏子元素展开与关闭的图标变化
	*/

	var $as = $(".panel-title > a");

	$as.on("click", function () {
		var $span = $(this).children("span").eq(0);

		if ($span.hasClass("plus")) {
			$span.removeClass("plus").addClass("minus");
		} else {
			$span.removeClass("minus").addClass("plus");
		}
	})

	/* 
		返回顶部按钮
	*/
	var $top = $(".top");
 
	$(window).scroll(function () {

		if ($(window).scrollTop() >= 400) {
			$top.fadeIn();
		} else {
			$top.fadeOut();
		}

	})

	$top.on("click", function () {
		$(window).scrollTop(0);
	})

	/*
		搜索按钮点击事件
	*/

	var $search = $(".search > a");
	var $searchOn = $(".keyword");
	var $headerWrap = $(".header-wrap");
	var $kwCancel = $(".kw-cancel");

	$search.on("click", function () {
		$headerWrap.hide();
		$searchOn.show();
	})

	$kwCancel.on("click", function () {
		$searchOn.hide();
		$headerWrap.show();
	})


})