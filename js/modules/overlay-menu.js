let overlaymenu = (function () {
    let init = function () {
        $("#hamburger-btn").on('click', function () {
            var elem = $('#hamburger-btn'),
                menu = $('.header__nav'),
                body = $('body');
            elem.toggleClass('opened');
            menu.toggleClass('mobile');
            body.css('overflow', 'hidden');

        });
    };

    return {
        init: init
    }
})();