'use strict';

const overlaymenu = {
    init: function () {
        const button = document.getElementById('hamburger-btn');
        const menu = document.querySelector('.header__nav');
        const overlay = document.getElementById('mobile-menu__overlay');
        if (!button || !menu || !overlay) return;

        function setOpen(open) {
            button.classList.toggle('opened', open);
            button.setAttribute('aria-expanded', String(open));
            menu.classList.toggle('mobile', open);
            overlay.classList.toggle('opened', open);
        }
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
        button.setAttribute('aria-label', 'Меню');
        button.setAttribute('aria-expanded', 'false');
        button.addEventListener('click', () => setOpen(!button.classList.contains('opened')));
        button.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                button.click();
            }
        });
        overlay.addEventListener('click', () => setOpen(false));
        menu.addEventListener('click', function (event) {
            if (event.target.closest('[data-scroll-to]')) setOpen(false);
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && button.classList.contains('opened')) {
                setOpen(false);
                button.focus();
            }
        });
    }
};
