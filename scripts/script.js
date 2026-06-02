const menuBtn = document.querySelector('.menu_btn')
const menuIcon = document.querySelector('.icon-menu')
const closeIcon = document.querySelector('.icon-close')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {

    menu.classList.toggle('active')

    menuIcon.classList.toggle('active-icon')
    closeIcon.classList.toggle('active-icon')

})

new Splide('.splide', {
    type: 'slide',
    rewind: true,
    autoplay: true,
    interval: 2000,

    perPage: 3,
    focus: 'center',
    gap: '1rem',
    padding: '15%',
    drag: true,
    snap: true,
    updateOnMove: true,
    waitForTransition: true,

    breakpoints: {

        768: {
            perPage: 1,
            padding: '10%',
        },

        480: {
            perPage: 1.001,
        }

    }

}).mount()