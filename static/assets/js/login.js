$(function ($) {
	/*
		登录与注册切换事件
	*/

	var $login = $(".login");
	var $register = $(".register");
	var $loginInner = $(".login-inner");
	var $registerInner = $(".register-inner");

	$login.on("click", function () {
		$(this).css({
			"backgroundColor": "#000",
			"color": "#fff"
		});
		$register.css({
			"backgroundColor": "#fff",
			"color": "#212121"
		});
		$loginInner.show();
		$registerInner.hide();
	})

	$register.on("click", function () {
		$(this).css({
			"backgroundColor": "#000",
			"color": "#fff"
		});
		$login.css({
			"backgroundColor": "#fff",
			"color": "#212121"
		});
		$registerInner.show();
		$loginInner.hide();
	})
})