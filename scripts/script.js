// Abrir menu responsivo
let menu_btn = document.querySelector('.menu_btn')
let bars = document.querySelector(".fa-solid")
let closeBtn = document.querySelector(".close")
let menu = document.querySelector('.menu')
closeBtn.style.display = "none"
menu.style.display = "none"


menu_btn.addEventListener("click", () => {
    if (bars.style.display === "none") {
        bars.style.display = "block"
        closeBtn.style.display = "none"
        menu.style.display = "none"
        
    } else {
        bars.style.display = "none"
        closeBtn.style.display = "block"
        menu.style.display = "block"
    }

})