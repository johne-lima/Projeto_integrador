const splide = new Splide('.splide', {
    rewind: true,
    autoplay: true,
    interval: 2000,

    perPage: 2,
    focus: 'center',
    gap: '1rem',
    padding: '15%',

    drag: true,
    snap: true,
    updateOnMove: true,
    waitForTransition: true,

    breakpoints: {
        768: {
            perPage: 2,
            padding: '10%',
        },

        500: {
            perPage: 1,
            padding: '5%',
        }
    }
});

splide.mount();

document.querySelectorAll('.splide__slide').forEach((slide, index) => {
    slide.style.cursor = 'pointer';

    slide.addEventListener('click', () => {
        splide.go(index);
    });
});

document.querySelectorAll('.splide__slide').forEach(slide => {
    slide.addEventListener('click', () => {
        splide.go(Number(slide.dataset.slide));
    });
});