
$(document).ready(function () {
    $('.navbar-nav li.nav-item a.nav-link').click(function(dudereally) {
        $('.navbar-nav li.active').removeClass('active');
        var $par = $(this).parent();
        $par.addClass('active');
    });
});


$(window).on("load",function() {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.30;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

        $('.fade-it').each(function() {
            
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            
            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {
                        transition: 'opacity 0.1s linear',
                        opacity: 1
                    } );

                } else {
                    $(this).css( {
                        transition: 'opacity 0.4s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    $('.fade-it').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});

