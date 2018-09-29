(function(){
    'use strict';

    $("#home-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });

    $("#features-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    $("#team-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 2000);
    });

    $("#gallery-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 2000);
    });

    $("#pricing-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top
        }, 2000);
    });

    $("#partners-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#partners").offset().top
        }, 2000);
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });

    $("#header-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 2000);
    });
})();