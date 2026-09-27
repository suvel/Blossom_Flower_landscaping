(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Video scroller
    var scrollVideos = function (scroller, direction) {
        var card = scroller.querySelector('.video-card');
        var gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
        scroller.scrollBy({ left: direction * (card.offsetWidth + gap) });
    };
    $('.video-scroller').each(function () {
        var scroller = this;
        var wrap = $(scroller).parent();
        wrap.find('.video-prev').on('click', function () { scrollVideos(scroller, -1); });
        wrap.find('.video-next').on('click', function () { scrollVideos(scroller, 1); });
    });

    // Clicking a thumbnail opens it enlarged in the media modal
    var mediaModal = document.getElementById('media-modal');
    if (mediaModal) {
        var mediaBody = mediaModal.querySelector('.media-modal-body');
        $('.video-card').on('click', function () {
            var thumb = this.querySelector('video, img');
            var src = thumb.getAttribute('src').split('#')[0];
            var el;
            if (thumb.tagName === 'VIDEO') {
                el = document.createElement('video');
                el.controls = true;
                el.autoplay = true;
                el.playsInline = true;
            } else {
                el = document.createElement('img');
                el.alt = thumb.alt;
            }
            el.src = src;
            mediaBody.replaceChildren(el);
            (bootstrap.Modal.getInstance(mediaModal) || new bootstrap.Modal(mediaModal)).show();
        });
        // Removing the video stops playback; just hiding it would keep playing
        mediaModal.addEventListener('hidden.bs.modal', function () {
            mediaBody.replaceChildren();
        });
    }

})(jQuery);

