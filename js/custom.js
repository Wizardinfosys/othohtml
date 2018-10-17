// !!!  menu onclick add body class in menu full screen open js !!!
jQuery('.navbar-toggle').click(function () {
    $(this).toggleClass('open');
});

// !!! custom reponsive menu !!!
jQuery(function ($) {

    $("header .navbar-nav, .nav-primary .navbar-nav, .nav-secondary .navbar-nav").addClass("responsive-menu");

   /* $(".navbar-toggle").click(function () {
        $("header .navbar-nav, .nav-primary .navbar-nav, .nav-secondary .navbar-nav").slideToggle();
    });*/

    $(window).resize(function () {
        if (window.innerWidth > 767) {
            $("header .navbar-nav, .nav-primary .navbar-nav, .nav-secondary .navbar-nav, nav .sub-menu").removeAttr("style");
            $(".responsive-menu > .menu-item").removeClass("menu-open");
        }
    });

    $(".menu-item-has-children").click(function (event) {
        if (event.target !== this)
            return;
        $(this).children().siblings(".sub-menu").slideToggle(function () {
            $(this).parent().toggleClass("menu-open");
        });
    });
});
