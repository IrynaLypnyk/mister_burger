'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu-acco').forEach(function (accordion) {
        const items = Array.from(accordion.querySelectorAll('.menu-acco__item'));
        items.forEach(function (item) {
            const title = item.querySelector('.menu-acco__title-container');
            const content = item.querySelector('.menu-acco__dropdown-text');
            content.style.transition = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'none' : 'width 200ms ease';
            function setOpen(open) {
                item.classList.toggle('active', open);
                content.style.width = open ? '60vw' : '0';
            }
            title.addEventListener('click', function () {
                const open = !item.classList.contains('active');
                items.forEach(function (other) {
                    other.classList.remove('active');
                    other.querySelector('.menu-acco__dropdown-text').style.width = '0';
                });
                setOpen(open);
            });
            content.addEventListener('click', () => setOpen(false));
        });
    });
});
