$(function(){

    //To style navigation in tab-content

    $('.tab-content__link').click(function(){
        $('.tab-content__link').removeClass('active');
        $(this).addClass('active');
    });

    //Slick slider

    $('.slick__inner').slick();

    //Books-nav menu

    $('.books-nav__menu').click(function(){
        $('.books-nav__hide-menu').toggleClass('menu-hide');
    });
});