$(document).ready(function() {
	//Анимация цифр в блоке преимущества
	var show = true;
	var countbox = '.advanses_number';
	$(window).on("scroll load resize", function(){
		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $(countbox).outerHeight();

		if(w_top + 930 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$('.advanses_number .row .number').spincrement({
				thousandSeparator: "",
				duration: 3000
			});

			show = false;
		}
	});	
	//Большой слайдер на главной
	$('.top_slider .content_slider').bxSlider({
		mode: 'fade',
		controls: false
	});

	//Новая коллекция -  на главной
	$('.views_colection .content_colection').bxSlider({
		 pager: false,
		 slideWidth: 319,
		 moveSlides: 1,
		 slideMargin: 1,
		 minSlides: 1,
		 maxSlides: 6
	});
	
	//Фотогалерея -  на главной
	$('.gallery .content_gallery').bxSlider({
		pager: false,
		slideWidth: 336,
		moveSlides: 1,
		slideMargin: 1,
		minSlides: 1,
		maxSlides: 6
	});	
	

	
});
