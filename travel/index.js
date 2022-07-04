function assessment() {
    console.log('Вёрстка валидная +10 \nВёрстка семантическая +20 \nВёрстка соответствует макету +48 \nТребования к css +12 \nИнтерактивность, реализуемая через css +20 \n')
}
assessment()


const menu = document.getElementById('menu');
const menuItems = document.getElementsByClassName('link-header');
const shadowBody = document.getElementById('shadow');
function toggleMenu() {
menu.classList.toggle('active')
shadowBody.classList.toggle('active')
}

burger.onclick = toggleMenu;
closeButton.onclick = toggleMenu;
shadow.onclick = toggleMenu;
for (let i=0; i < menuItems.length; i++) {
    menuItems[i].onclick = toggleMenu;
}
