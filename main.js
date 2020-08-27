$(document).ready(function(){
    // $("body").hide(0).delay(100).fadeIn(3500)
    ScrollReveal().reveal('header', {duration: 3500});
    ScrollReveal().reveal('.about', {duration: 3500});
    ScrollReveal().reveal('.services', {duration: 3500});
    ScrollReveal().reveal('.portfolio', {duration: 3500});
    ScrollReveal().reveal('.portfolio-item', {duration: 3500});
    ScrollReveal().reveal('.experience', {duration: 3500});
    ScrollReveal().reveal('.contact', {duration: 3500});
});

$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // AOS.init({
    //     easing: 'ease',
    //     duration: 2000,
    //     once: true
    // });
})