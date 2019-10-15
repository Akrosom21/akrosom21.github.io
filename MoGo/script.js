$(function() {

	// Burger 

	$(".nav-toggle").click(function(){
		$(".header__nav").toggleClass("active");
	});

	// Sticky menu

   	var stickyNavTop = $('.about').offset().top;  	
   	var stickyNav = function(){
		var scrollTop = $(window).scrollTop(); 
		if (scrollTop > stickyNavTop) { 
		    $('.header').addClass('sticky');
		} else {
		    $('.header').removeClass('sticky'); 
		}
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});

	// Accordion

	$(".item-header_first").click(function(){
		$(".accordion-item_first").toggleClass("active");
	});

	$(".item-header_second").click(function(){
		$(".accordion-item_second").toggleClass("active");
	});

	$(".item-header_third").click(function(){
		$(".accordion-item_third").toggleClass("active");
	});

	//Slick-slider

	$('.slick-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

});