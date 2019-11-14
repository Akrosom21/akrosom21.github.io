$(function(){
    $('.slick-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                }
              },
            
          ]
    });

    $('.header__enter').click(function(){
        $(".enter").addClass("active");
        $(".main-menu").removeClass("active");
    })

    $(document).mouseup(function (e){
		var div = $(".enter");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
                $(".enter").removeClass("active");
		}
    });
    
    $('.header__reg').click(function(){
        $(".reg").addClass("active");
        $(".main-menu").removeClass("active");
    })

    $(document).mouseup(function (e){
		var div = $(".reg");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
                $(".reg").removeClass("active");
		}
    });
    
    $('.burger-menu').click(function(){
        $(".main-menu").addClass("active");
    })

    $(document).mouseup(function (e){
		var div = $(".main-menu");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
                $(".main-menu").removeClass("active");
		}
    });
});

