$(function (){

    //Carousel

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

    //Burger


    $('.nav-toggle').click(function() {
        $('.nav').toggleClass('active');
    });
    
});