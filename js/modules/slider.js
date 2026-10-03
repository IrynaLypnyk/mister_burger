'use strict';

const slider = {
    init: function () {
        document.querySelectorAll('.slider').forEach(function (container) {
            const slides = Array.from(container.querySelectorAll('.slider__item'));
            let moving = false;
            container.querySelectorAll('.slider__controls-btn').forEach(function (button) {
                button.addEventListener('click', async function (event) {
                    event.preventDefault();
                    if (moving || slides.length < 2) return;
                    moving = true;
                    const index = slides.findIndex(slide => slide.classList.contains('active'));
                    const direction = button.classList.contains('slider__controls-btn_next') ? 1 : -1;
                    const current = slides[index];
                    const next = slides[(index + direction + slides.length) % slides.length];
                    next.classList.add('inslide');
                    const options = {
                        duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 700,
                        easing: 'ease-in-out'
                    };
                    const outgoing = current.animate([
                        {transform: 'translateX(0)'},
                        {transform: 'translateX(' + (-direction * 100) + '%)'}
                    ], options);
                    const incoming = next.animate([
                        {transform: 'translateX(' + (direction * 100) + '%)'},
                        {transform: 'translateX(0)'}
                    ], options);
                    await Promise.allSettled([outgoing.finished, incoming.finished]);
                    current.classList.remove('active');
                    next.classList.remove('inslide');
                    next.classList.add('active');
                    moving = false;
                });
            });
        });
    }
};
