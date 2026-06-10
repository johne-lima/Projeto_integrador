const menuBtn = document.querySelector('.menu_btn')
const menuIcon = document.querySelector('.icon-menu')
const closeIcon = document.querySelector('.icon-close')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {

    menu.classList.toggle('active')

    menuIcon.classList.toggle('active-icon')
    closeIcon.classList.toggle('active-icon')

})

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