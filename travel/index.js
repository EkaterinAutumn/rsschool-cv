function assessment() {
    console.log('Вёрстка соответствует макету. Ширина экрана 390px +48 \nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22')
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
