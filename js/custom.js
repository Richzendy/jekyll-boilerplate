(function($) {
    'use strict';

    /* Hide menu after click
    ----------------------------------------------*/
    $('.navbar-nav li a').click(function(event) {
        $('.in').collapse('hide');
    });

    /* Example of owl carousel
    ----------------------------------------------*/
    //$("#example-carousel").owlCarousel({
    //
    //    autoPlay: 5000, //Set AutoPlay to 5 seconds
    //
    //    items : 4,
    //    itemsDesktopSmall : [979,3],
    //    stopOnHover: true
    //
    //});

    /* Tooltip
    ----------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /* Lightbox
    ----------------------------------------------*/
    $('.image-link').magnificPopup({
        type: 'image'
    });

    /* Sticky menu
    ----------------------------------------------*/
    $(function() {
        //caches a jQuery object containing the header element
        var header = $(".navbar-default");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.addClass("navbar-scrolled navbar-fixed-top");

            } else {
                header.removeClass("navbar-scrolled navbar-fixed-top");
            }
        });
    });

})(jQuery);