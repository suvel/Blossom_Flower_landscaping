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


    // Project Highlight: rendered from data/project-highlights.json
    var make = function (tag, className, attrs) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        for (var key in attrs || {}) node.setAttribute(key, attrs[key]);
        return node;
    };
    var navButton = function (dir, label, icon) {
        var btn = make('button', 'btn btn-primary btn-lg-square rounded-circle video-nav video-' + dir, { type: 'button', 'aria-label': label });
        btn.appendChild(make('i', 'bi ' + icon));
        return btn;
    };
    var mediaCard = function (item) {
        var card = make('button', 'video-card rounded overflow-hidden shadow', { type: 'button' });
        if (item.type === 'video') {
            card.setAttribute('aria-label', 'Play video');
            var video = make('video', null, { src: item.src + '#t=0.1', preload: 'metadata' });
            video.muted = true;
            video.playsInline = true;
            card.appendChild(video);
            var play = make('span', 'video-play');
            play.appendChild(make('i', 'bi bi-play-fill'));
            card.appendChild(play);
        } else {
            card.setAttribute('aria-label', 'View photo');
            card.appendChild(make('img', null, { src: item.src, alt: item.alt || '', loading: 'lazy' }));
        }
        return card;
    };
    var projectBlock = function (project) {
        var block = make('div', 'project-highlight mb-5 wow fadeInUp', { 'data-wow-delay': '0.1s' });
        var title = make('h3', 'mb-2');
        title.textContent = project.title;
        var desc = make('p', 'mb-4');
        desc.textContent = project.description || '';
        if (project.link) {
            var link = make('a', null, { href: project.link.href });
            link.textContent = project.link.text;
            desc.append(' ', link);
        }
        var wrap = make('div', 'position-relative');
        var scroller = make('div', 'video-scroller');
        (project.media || []).forEach(function (item) { scroller.appendChild(mediaCard(item)); });
        wrap.append(scroller, navButton('prev', 'Previous media', 'bi-chevron-left'), navButton('next', 'Next media', 'bi-chevron-right'));
        block.append(title, desc, wrap);
        return block;
    };
    var highlights = document.getElementById('project-highlights');
    if (highlights) {
        fetch('data/project-highlights.json')
            .then(function (res) { return res.json(); })
            .then(function (projects) { highlights.replaceChildren.apply(highlights, projects.map(projectBlock)); })
            .catch(function (err) { console.error('Could not load project highlights', err); });
    }

    // Video scroller
    var scrollVideos = function (scroller, direction) {
        var card = scroller.querySelector('.video-card');
        if (!card) return;
        var gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
        scroller.scrollBy({ left: direction * (card.offsetWidth + gap) });
    };
    // Delegated, since the scrollers are rendered after page load
    $(document).on('click', '.video-prev, .video-next', function () {
        var scroller = $(this).closest('.position-relative').find('.video-scroller')[0];
        scrollVideos(scroller, $(this).hasClass('video-prev') ? -1 : 1);
    });

    // Clicking a thumbnail opens it enlarged in the media modal
    var mediaModal = document.getElementById('media-modal');
    if (mediaModal) {
        var mediaBody = mediaModal.querySelector('.media-modal-body');
        $(document).on('click', '.video-card', function () {
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

