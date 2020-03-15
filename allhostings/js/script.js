$(function(){
    
    // Company menu toggle
    $(document).mouseup(function (e){
		var div = $(".company");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
                $(".company").addClass('dn');
                $('.wrapper__inner').addClass('dn');
                $('.header__bottom').removeClass('df');
                $('.header__menu-btn').removeClass('rotate');
		}
    });

    $('.header__menu-btn').click(function(){
        $('.company').removeClass('dn');
         $(this).addClass('rotate');
         $('.wrapper__inner').removeClass('dn');
         $('.header__bottom').addClass('df');
    });

    

    //Burger menu

    $('.burger__inner').click(function() {
        $('.burger__menu').toggleClass('db');
        $('.wrapper__inner').toggleClass('dn');
    });

    $(document).mouseup(function (e){
		var div = $(".burger__menu");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
                $(".burger__menu").removeClass('db');
                $('.wrapper__inner').addClass('dn');
		}
    });

    // Month/year btn toggle

    $('.services-intro__btn-text').click(function() {
        $('.services-intro__btn-text').removeClass('services-intro__btn-text_active');
        $(this).addClass('services-intro__btn-text_active');
    });

    $('.lang-btn').click(function() {
        $('.lang-btn__inner').toggleClass('db');
        $(this).toggleClass('borders');
    });

    // $('.hover-menu').click(function() {
    //     event.preventDefault()
    //     $('.down-host').addClass('db');
    //     // $('.down-host_wp').removeClass('db');
    //     // $('.down-host_support').removeClass('db');
    // });
    // $('.hover-menu_wp').click(function() {
    //     event.preventDefault()
    //     $('.down-host_wp').addClass('db');
    //     // $('.down-host_support').removeClass('db');
    //     // $('.down-host').removeClass('db');
    // });
    // $('.hover-menu_support').click(function() {
    //     event.preventDefault()
    //     $('.down-host_support').addClass('db');
    //     // $('.down-host').removeClass('db');
    //     // $('.down-host_wp').removeClass('db');
    // });

    // $(document).mouseup(function (e){
		// var div = $(".down-host");
		// if (!div.is(e.target)
		//     && div.has(e.target).length === 0) {
    //             $(".down-host").removeClass('db');
		// }
    // });
    // $(document).mouseup(function (e){
		// var div = $(".down-host_wp");
		// if (!div.is(e.target)
		//     && div.has(e.target).length === 0) {
    //             $(".down-host_wp").removeClass('db');
		// }
    // });
    // $(document).mouseup(function (e){
		// var div = $(".down-host_support");
		// if (!div.is(e.target)
		//     && div.has(e.target).length === 0) {
    //             $(".down-host_support").removeClass('db');
		// }
    // });

    $('.hover-menu').click(function() {
          event.preventDefault();
      });
    $('.hover-menu_wp').click(function() {
          event.preventDefault();
      });
    $('.hover-menu_support').click(function() {
          event.preventDefault();
      });
    $('.footer__nav-link_title').click(function() {
          event.preventDefault();
      });
    $('.burger__menu-title').click(function() {
          event.preventDefault();
      });


    $('.per__year').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('179 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('100 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });
    $('.per__year').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(2) .services-intro__price').html('399 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(2) .services-intro__price').html('200 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });
    $('.per__year').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(3) .services-intro__price').html('599 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(3) .services-intro__price').html('500 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });


    $('.per__year-serv').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('99 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month-serv').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('80 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });
    $('.per__year-serv').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(2) .services-intro__price').html('159 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month-serv').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(2) .services-intro__price').html('100 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });
    $('.per__year-serv').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(3) .services-intro__price').html('499 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month-serv').click(function() {
      $('.services-intro__items .services-intro__item:nth-child(3) .services-intro__price').html('400 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });


    $('.per__year-res').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('399 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month-res').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('300 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });

    $('.per__year-free').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('399 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month-free').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('300 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });

    $('.per__year-gov').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('399 ₽ <span>в месяц</span><p>при оплате за год</p>');
      });

    $('.per__month-gov').click(function() {
      $('.services-intro__items .services-intro__item:first-child .services-intro__price').html('300 ₽ <span>в месяц</span><p>при оплате за месяц</p>');
      });

    //   let parent = $('body');
    //   let helper = $(parent).find('header__bottom');
    //   $(helper).css('display', 'none');
    //  // console.log(helper);


     if($("div").is(".gov-help")) {
      $('.header__bottom-link:nth-child(3)').addClass('header__bottom-link_active');
      // $('.header__bottom-link:nth-child(3)').css('border-bottom', '3px solid #1A2036');
      let help = $('.down-host_wp').children('.down-host__link:nth-child(2)');
      $(help).css('color', '#1A2036');
     }

     if($("div").is(".free-help")) {
      $('.header__bottom-link:nth-child(3)').addClass('header__bottom-link_active');
      // $('.header__bottom-link:nth-child(3)').css('border-bottom', '3px solid #1A2036');
      let help = $('.down-host_wp').children('.down-host__link:nth-child(3)');
      $(help).css('color', '#1A2036');
     }

     if($("div").is(".res-help")) {
      $('.header__bottom-link:nth-child(2)').addClass('header__bottom-link_active');
      // $('.header__bottom-link:nth-child(2)').css('border-bottom', '3px solid #1A2036');
      let help = $('.down-host').children('.down-host__link:nth-child(2)');
      $(help).css('color', '#1A2036');
     }

     if($("div").is(".wp-help")) {
      let help = $('.down-host_wp').children('.down-host__link:nth-child(1)');
      $(help).css('color', '#1A2036');
     }

     if($("div").is(".serv-help")) {
      let help = $('.down-host').children('.down-host__link:nth-child(1)');
      $(help).css('color', '#1A2036');
     }

     if($("div").is(".contacts-help")) {
      let help = $('.down-host_support').children('.down-host__link:nth-child(1)');
      $(help).css('color', '#1A2036');
     }
      

});