let overlaymenu = (function () {
    let init = function () {
        $("#hamburger-btn").on('click', function () {
            var elem = $('#hamburger-btn'),
                menu = $('.header__nav'),
                body = $('body'),
                overlay = $("#mobile-menu__overlay");

            elem.toggleClass('opened');
            menu.toggleClass('mobile');
            overlay.toggleClass('opened');
            body.css('height', '100vh');

        });
        $("#mobile-menu__overlay").on('click', function () {
            var elem = $('#hamburger-btn'),
                menu = $('.header__nav'),
                body = $('body'),
                overlay = $("#mobile-menu__overlay");

            elem.toggleClass('opened');
            menu.toggleClass('mobile');
            overlay.toggleClass('opened');
            // body.css('overflow', 'hidden');
        });
    };

    return {
        init: init
    }
})();