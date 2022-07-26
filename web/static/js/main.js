$(document).ready(function(){
	var altura = $('.nav-item').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.nav-item').addClass('menu-fixed');
		} else {
			$('.nav-item').removeClass('menu-fixed');
		}
	});

});