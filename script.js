const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('.main-menu')
menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show')
})