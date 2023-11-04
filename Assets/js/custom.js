(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >100) {
                $(".header").css("position", "fixed");
                $(".header").css("top", "0");
                $(".mainheader").css("align-items", "center");
                $(".header").css("background", "rgba(44, 45, 55, 0.67)");
                $(".header").css("backdrop-filter", "blur( 5px )");
                $(".brand .logo").css("width", "150px");
                $(".brand .logo").css("background", "#fff");
                $(".nav-brand").css("width", "150px");
                $(".nav-brand").css("background", "#fff");
                $(".top-main ").css("display", "none");
                $(".headertop").css("display", "none");
                // $(".navbar-expand-lg .navbar-nav .dropdown-menu").css("margin-top", "22px");
                
            } else {
                $(".header").css("position", "relative");
                $(".header").css("top", "unset");
                $(".mainheader").css("align-items", "end");
                $(".header").css("background", "rgba( 255, 255, 255, 0.2)");
                $(".header").css("backdrop-filter", "blur( 0px )");
                $(".brand .logo").css("width", "245px");
                $(".brand .logo").css("background", "unset");
                $(".nav-brand").css("width", "220px");
                $(".nav-brand").css("background", "unset");
                $(".top-main ").css("display", "flex");
                $(".headertop").css("display", "block");
                // $(".navbar-expand-lg .navbar-nav .dropdown-menu").css("margin-top", "unset");
            }
        });
    }
})(jQuery);



var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
}

;