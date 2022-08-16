export function greeting() {

const input = document.getElementById('input')

function setNameInLocalStorage() {
    localStorage.setItem('name', input.value);
}
window.addEventListener('beforeunload', setNameInLocalStorage)

function getNameInLocalStorage() {
    if (localStorage.getItem('name')) {
        input.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getNameInLocalStorage)
}