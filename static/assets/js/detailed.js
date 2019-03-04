$(function ($) {
	/*
		产品详情页轮播图
	*/

	var swiper = new Swiper('.swiper-detailed', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    //滑到最后一个隐藏前进按钮
	 //  on: {
	 //    slideChangeTransitionEnd: function(){
	 //      if(this.isEnd){
	 //        this.navigation.$nextEl.css('display','none');
	 //      }else{
	 //        this.navigation.$nextEl.css('display','block');  
	 //      }
	 //    },
		// },
	})

	/*
		详情页颜色选择
	*/
	var $labels = $(".select-color > label");
	$labels.on("click", function () {
		$(this).addClass("select").siblings().removeClass("select");
	})

	/*
		详情页购物数量
	*/

	var $minus = $(".shopping-number > .down");
	var $plus = $(".shopping-number > .up");
	var $shoppingNumber = $(".shopping-number > .num > input");

	$minus.on("click", function () {
		if ($shoppingNumber.val() == 1) {
			return;
		}

		$minusNum = $shoppingNumber.val();
		$minusNum--;
		$shoppingNumber.val($minusNum);
	})

	$plus.on("click", function () {
		$plusNum = $shoppingNumber.val();
		$plusNum++;
		$shoppingNumber.val($plusNum);
	})

	/*
		相关产品轮播图
	*/

	var swiperCorrelation = new Swiper('.correlation-pro', {
    slidesPerView: 3,
    spaceBetween: 4,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination-correlation',
      clickable: true,
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    }
  })

  /*
		说明和评论
  */
  var $illustrate = $(".option-title .illustrate");
  var $commentNum = $(".option-title .comment-num");
  var $correlationWrap = $(".correlation-wrap");
  var $productLabor = $(".pro-labor");
  $commentNum.on("click", function () {
  	$(this).addClass("active").siblings().removeClass("active");
  	$productLabor.hide();
  	$correlationWrap.show();
  })

  $illustrate.on("click", function () {
  	$(this).addClass("active").siblings().removeClass("active");
  	$productLabor.show();
  	$correlationWrap.hide();
  })

  /*
		评论内容
  */
  var $correlation = $(".correlation-wrap .correlation");
  var $comment = $(".correlation-wrap .comment");
  var $commentary = $(".commentary");
  var $correlationProWrap = $(".correlation-pro-wrap");
  var $todayTop = $(".today-top");
  $comment.on("click", function () {
  	$(this).addClass("selected");
  	$correlation.removeClass("selected");
  	$commentary.show();
  	$correlationProWrap.hide();
  	$todayTop.hide();
  })
  
  $correlation.on("click", function () {
  	$(this).addClass("selected");
  	$comment.removeClass("selected");
  	$commentary.hide();
  	$correlationProWrap.show();
  	$todayTop.show();
  })

  /*
		五星好评
  */
  var $starsPrev = $(".stars");
  var $stars = $(".stars > span");
  var $starsInput = $(".stars input:hidden");
  
  $stars.on("click", function () {
  	$(this).addClass("opt").prevAll("span").addClass("opt");
  	$(this).nextAll("span").removeClass("opt");
  	$starsInput.val($starsPrev.find("span[class*='opt']").length);
  })

})