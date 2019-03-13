$(function ($) {
	/*
		轮播图
	*/

	var mySwiper = new Swiper ('.swiper-carrousel', {
		//初始化页面索引
    initialSlide: 1,
	 	//自动播放
    autoplay: {
	    delay: 2000,
	    stopOnLastSlide: false,
	    disableOnInteraction: false,
  	},
	  loop: true, 
	  // 分页器
	  pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	    dynamicBullets: true,
	  }
	});

	/*
		新品轮播图
	*/
	var swiper = new Swiper('.swiper-new', {
    slidesPerView: 3,
    spaceBetween: 5,
    slidesPerGroup: 3,
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination-new',
      clickable: true,
    }
  });


	/*
		文字分类轮播
	*/
	var swiperText = new Swiper('.text-nav', {
    slidesPerView: 3,
    spaceBetween: -1,
    slidesPerGroup: 3,
    loop: true
  });

})