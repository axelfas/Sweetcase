const toggleMenuElement = document.querySelector('#toggle-menu')
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', ()=> {
    console.log("toggleMenuElement")
    mainMenuElement.classList.toggle('main-menu--show')
})