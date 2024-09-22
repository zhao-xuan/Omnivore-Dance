(function($){
	'use strict';

	$(window).on('load', function() { 
		/*------------------
			Preloder
		--------------------*/
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
	});



	/*------------------
		Navigation
	--------------------*/
	var header_height = $('.intro-section').innerHeight();

	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > header_height) {
			$('#navigation-toggle').addClass('sticky');
		}else{
			$('#navigation-toggle').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('#navigation-toggle').on('click', function(event) {
		$('.nav-section').addClass('active');
		event.preventDefault();
	});

	$('.close-nav').on('click', function(event) {
		$('.nav-section').removeClass('active');
		event.preventDefault();
	});

	$('.menu-list').onePageNav({
		easing: 'swing'
	});

	/*------------------
		Service Section
	--------------------*/
	$(".service-section").on('touchstart', function(event) {
		$(".service-content").attr();
		$(".service-content").attr("opacity", "1.0");
		$(".service-icon").attr("opacity", "0");
	})

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Popup
	--------------------*/
	$('.portfolio-item').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 500,
	});



	/*------------------
		Isotope Filter
	--------------------*/
	var $container = $('.isotope_items');
	$container.isotope();

	$('.portfolio-filter li').on("click", function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");				 
		var selector = $(this).attr('data-filter');
		$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});

	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();

})(jQuery);
