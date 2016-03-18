$(document).ready(function() {
    var mobile = false;

    Modernizr.addTest('isios', function() {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false
    });

    Modernizr.addTest('isandroid', function() {
        return navigator.userAgent.match(/Android/i);
    });
    if (!Modernizr.isandroid) {
        window.sr = ScrollReveal({ origin: 'bottom' });
        sr.reveal('.title', { duration: 2000, origin: 'left', distance: '100px' });
        sr.reveal('.reveal-right', { duration: 1600, origin: 'right', distance: '40px' });
        sr.reveal('.reveal-left', { duration: 1600, origin: 'left', distance: '40px' });
    }
    if (Modernizr.isandroid) {
        mobile = true;
        $('.title').css('visibility', 'visible');
    }

    if (Modernizr.isios) {
        mobile = true;
        $('.banner').css('background-size', '800px auto');
    }
    
    if(Modernizr.isios || Modernizr.isandroid){
        $('.text-container').css('margin', '25px');
    };

    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning the object
        $window = $(window);
        $(window).scroll(function() {
            if (!mobile) {
                var yPos = -($window.scrollTop() / $bgobj.data('speed') * 2);

                var coords = '50% ' + yPos + 'px';
                $bgobj.css({ backgroundPosition: coords });
            }


        });
    });
});
