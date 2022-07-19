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
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = toggleMenu;
}

const popupLogin = document.getElementById('popup-login');
const popupRegistration = document.getElementById('popup-registration');
const register = document.getElementById('register');
const popUpBody = document.querySelector('.popup-body')
const popUpBodyTwo = document.querySelector('.popup-body-2')
const signInButton = document.getElementById('sign-in-button');
const signUpButton = document.getElementById('sign-up-button');

function openLogin() {
    popupLogin.classList.add('popup-active')
}

function closeLogin() {
    popupLogin.classList.remove('popup-active')
}

function openLoginMob() {
    popupLogin.classList.add('popup-active');
    menu.classList.toggle('active')
    shadowBody.classList.toggle('active')
}

function openRegistration() {
    popupRegistration.classList.add('popup-active')
    closeLogin()
}

function closeRegistrationAndOpenLogin() {
    popupRegistration.classList.remove('popup-active')
    openLogin()
}

function closeRegistration() {
    popupRegistration.classList.remove('popup-active')
}

login.onclick = openLogin;
account.onclick = openLoginMob;
register.onclick = openRegistration;
signup.onclick = closeRegistrationAndOpenLogin;

document.onclick = function (e) {
    let target = e.target;
    if (target == popUpBodyTwo) {
        closeRegistration();
    } else if (target == popUpBody) {
        closeLogin();
    };
}

function signInForm() {
    let emailValue = document.getElementById('email-input').value;
    let passValue = document.getElementById('password-input').value;

    if (!emailValue) {
        alert('Add your E-mail');
    } else if (!passValue) {
        alert('Add your Password');
    } else {
        alert(`E-mail: ${emailValue} \nPassword: ${passValue}`);
    }
}


function signUpForm() {
    let emailValueTwo = document.getElementById('email-reg').value;
    let passValueTwo = document.getElementById('password-reg').value;

    if (!emailValueTwo) {
        alert('Add your E-mail');
    } else if (!passValueTwo) {
        alert('Add your Password');
    } else {
        alert(`E-mail: ${emailValueTwo} \nPassword: ${passValueTwo}`);
    }
}

signInButton.onclick = signInForm;
signUpButton.onclick = signUpForm;



let photoContainer = document.getElementById('destinations');
let dotContainer = document.getElementById('dots');
let dotContainerMob = document.getElementById('dots-mob');
let vectorRight = document.getElementById('vector-right');
let vectorLeft = document.getElementById('vector-left');
let photoContainerMob = document.getElementById('items-mobile');

photoContainer.addEventListener('click', (event) => {
    let target = event.target;

    if (target.parentElement.classList.contains('courusel-item')) {
        let couruselItem = target.parentElement;

        let index = Array.prototype.indexOf.call(photoContainer.children, couruselItem)

        if (index == 0) {
            let lastElement = photoContainer.children[photoContainer.children.length - 1];
            let firstElement = photoContainer.children[0];
            let lastDot = dotContainer.children[dotContainer.children.length - 1];
            let firstDot = dotContainer.children[0];
            lastElement.after(firstElement);
            lastDot.after(firstDot);
        }

        if (index == 2) {
            let firstElement = photoContainer.children[photoContainer.children.length - 1];
            let lastElement = photoContainer.children[0];
            let firstDot = dotContainer.children[dotContainer.children.length - 1];
            let lastDot = dotContainer.children[0];
            lastElement.before(firstElement);
            lastDot.before(firstDot);
        }
    }
});

function goRight() {
    let firstElement = photoContainerMob.children[0];
    let lastElement = photoContainerMob.children[photoContainerMob.children.length - 1];
    let lastDot = dotContainerMob.children[dotContainerMob.children.length - 1];
    let firstDot = dotContainerMob.children[0];
    lastElement.after(firstElement);
    lastDot.after(firstDot);
}

function goLeft() {
    let firstElement = photoContainerMob.children[photoContainerMob.children.length - 1];
    let lastElement = photoContainerMob.children[0];
    let firstDot = dotContainerMob.children[dotContainerMob.children.length - 1];
    let lastDot = dotContainerMob.children[0];
    lastElement.before(firstElement);
    lastDot.before(firstDot);
}

vectorRight.onclick = goRight;
vectorLeft.onclick = goLeft;