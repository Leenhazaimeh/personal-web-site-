// 'use strict'

$(document).ready(function () {
    $(window).scroll(function () {
        // stick nav on scroll 
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })
    // ############################################################################

    // slide-up 
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing  scroll on  
        $('html').css("scrollBehavior", "auto");
    });

    // ############################################################################

    $('.navbar .menu li a').click(function () {
        // applying scroll on again  
        $('html').css("scrollBehavior", "smooth");
    });


// ############################################################################
    // toggle menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ############################################################################

    // typing text animation 
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer","Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // ############################################################################

    //  carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});