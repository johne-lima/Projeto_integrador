const menuBtn = document.querySelector('.menu_btn')
const menuIcon = document.querySelector('.icon-menu')
const closeIcon = document.querySelector('.icon-close')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {

    menu.classList.toggle('active')

    menuIcon.classList.toggle('active-icon')
    closeIcon.classList.toggle('active-icon')

})

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

const form = document.querySelector('.formulario');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.querySelector('#nome').value;
        const servico = document.querySelector('#servico').value;
        const mensagem = document.querySelector('#mensagem').value;

        const texto = `*Solicitação de Orçamento*

👤 Nome: ${nome}
🪄 Serviço: ${servico}

📝 Mensagem: ${mensagem}`;

        const wpp = '5511960708547';
        const url = `https://wa.me/${wpp}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');
    });
}