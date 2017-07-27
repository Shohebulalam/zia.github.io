(function ($) {
    "use strict"

    jQuery(document).ready(function () {


        // responsive slides initialize //
        $(function () {
            $(".rslides").responsiveSlides();
        });
        // end // 

        //sticky header code

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.headerArea').addClass('headerFixed');
            } else {
                $('.headerArea').removeClass('headerFixed');
            }


        });

        //sticky header code end

        // counter number 

        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // counter number end

        // scroll top plugin

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollUp').fadeIn();
            } else {
                $('.scrollUp').fadeOut();
            }
        });
        $('.scrollUp').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        // scroll top plugin end





    });
})(jQuery);