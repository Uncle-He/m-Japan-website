$(function ($) {
	// headerfix高度获取
	getHeaderfix();
	
	//当窗口发生改变时获取headerfix高度
	$(window).resize(function () {
		var headerfix = $(".headerfix");
		var distance = $(".distance");
		distance.css("marginTop", headerfix.height() + "px");
	});

	// 顶部侧边菜单栏
	var isSpread = false;
	topMenu(isSpread);

	// 顶部侧边菜单栏子元素展开与关闭的图标变化
	topMenuIcon();

	// 返回顶部按钮
	backTop();
	
	// 搜索按钮点击事件
	searchClick();

	/* 倒计时 */
	downTime(); 
})
var getHeaderfix = function () {
	var headerfix = $(".headerfix");
	var distance = $(".distance");
	distance.css("marginTop", headerfix.height() + "px");
};

var topMenu = function (isSpread) {
	console.log(isSpread);
	var $body = $('body');
	var $topMenuBtn = $(".menu > a");
	var $topMenu = $(".top-menu");
	var $mask = $(".mask");
	var $close = $(".mask > .menu-close");
	
	$topMenuBtn.on("click", function () {
		$topMenu.animate({left: "0"});
		$mask.fadeIn();
		isSpread = true;
		affixScrollY(isSpread);
	})

	$mask.on("click", function () {
		$topMenu.animate({left: "-=1000px"});
		$mask.fadeOut();
		isSpread = false;
		affixScrollY(isSpread);
	})

	$close.on("click", function () {
		$mask.fadeOut();
		$topMenu.animate({left: "-=1000px"});
		isSpread = false;
		affixScrollY(isSpread);
	})

	var affixScrollY = function (isSpread) {
		if (isSpread) {
			$body.css("overflowY", "hidden");
		} else {
			$body.css("overflowY", "auto");
		}
	}
};

var topMenuIcon = function () {
	var $as = $(".panel-title > a");
	$as.on("click", function () {
		var $span = $(this).children("span").eq(0);

		if ($span.hasClass("plus")) {
			$span.removeClass("plus").addClass("minus");
		} else {
			$span.removeClass("minus").addClass("plus");
		}
	})
};

var backTop = function () {
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
};

var searchClick = function () {
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
};

var downTime = function () {
	//预定时间
	var time = 2 * 60 * 60;
	var spans = $(".down-time span");

	var timer = setInterval(function () {
		time--;
		// 格式化时间
		var h = Math.floor(time / 3600);
		var m = Math.floor(time % 3600 / 60);
		var s = time % 60;

		spans[0].innerHTML = Math.floor(h / 10);
		spans[1].innerHTML = h % 10;
		spans[2].innerHTML = Math.floor(m / 10);
		spans[3].innerHTML = m % 10;
		spans[4].innerHTML = Math.floor(s / 10);
		spans[5].innerHTML = s % 10;

		if (time <= 0) {
			clearInterval(timer);
		}
	},1000);
}