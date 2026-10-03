'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const sections = Array.from(document.querySelectorAll('.section'));
    const content = document.querySelector('.maincontent');
    const wrapper = document.querySelector('.wrapper');
    const dots = document.querySelectorAll('.dot-scroll__item');
    let inScroll = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) content.style.transition = 'none';

    function performTransition(index) {
        if (inScroll || !Number.isInteger(index) || index < 0 || index >= sections.length) return;
        if (sections[index].classList.contains('active')) return;
        inScroll = true;
        wrapper.scrollTop = 0;
        content.style.transform = 'translateY(' + (index * -100) + '%)';
        sections.forEach((section, i) => section.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        window.setTimeout(() => { inScroll = false; }, reducedMotion.matches ? 0 : 1000);
    }

    function scrollBySection(step) {
        performTransition(sections.findIndex(section => section.classList.contains('active')) + step);
    }

    function isInteractive(target) {
        return target.closest('input, textarea, select, button, [contenteditable]:not([contenteditable="false"]), #map') ||
            document.querySelector('#hamburger-btn.opened');
    }

    wrapper.addEventListener('wheel', function (event) {
        if (event.ctrlKey || isInteractive(event.target) || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        event.preventDefault();
        scrollBySection(event.deltaY > 0 ? 1 : -1);
    }, {passive: false});

    document.addEventListener('keydown', function (event) {
        if (isInteractive(event.target) || event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            scrollBySection(event.key === 'ArrowDown' ? 1 : -1);
        }
    });

    document.querySelectorAll('[data-scroll-to]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            performTransition(Number(event.currentTarget.dataset.scrollTo));
        });
    });

    // Native touch events work on touchscreens without guessing the device from its user agent.
    let gesture = null;
    wrapper.addEventListener('touchstart', function (event) {
        gesture = event.touches.length === 1 && !isInteractive(event.target)
            ? {x: event.touches[0].clientX, y: event.touches[0].clientY} : null;
    }, {passive: true});
    wrapper.addEventListener('touchmove', function (event) {
        if (event.touches.length !== 1) { gesture = null; return; }
        if (!gesture) return;
        const dx = event.touches[0].clientX - gesture.x;
        const dy = event.touches[0].clientY - gesture.y;
        if (Math.abs(dy) > Math.abs(dx) && event.cancelable) event.preventDefault();
    }, {passive: false});
    wrapper.addEventListener('touchend', function (event) {
        if (!gesture) return;
        const dx = event.changedTouches[0].clientX - gesture.x;
        const dy = event.changedTouches[0].clientY - gesture.y;
        gesture = null;
        if (Math.abs(dy) >= 50 && Math.abs(dy) > Math.abs(dx)) scrollBySection(dy < 0 ? 1 : -1);
    });
    wrapper.addEventListener('touchcancel', function () { gesture = null; });

    document.querySelectorAll('.team-acco__item').forEach(function (item) {
        item.addEventListener('click', function () {
            const open = !item.classList.contains('active');
            item.parentElement.querySelectorAll('.team-acco__item').forEach(other => {
                other.classList.toggle('active', other === item && open);
            });
        });
    });
    slider.init();
    overlaymenu.init();
});
