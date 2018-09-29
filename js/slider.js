;(function() {
    'use strict';

    $(document).ready(function(){
        $('.slider-home').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            speed: 1000,
        });
        $('.slider-partners').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            speed: 1000,
        });
    });
})();