import './styles.css'

const time = document.querySelector('.time');
const greeting = document.getElementById('greeting')
const date = new Date();
let currentTime = date.toLocaleTimeString();
const day = document.querySelector('.date');

function updateTime() {
    const currentDate = new Date();

    showGreeting(currentDate);
    showDay(currentDate)

    currentTime = currentDate.toLocaleTimeString();
    showTime();
    setTimeout(updateTime, 1000);
}

function showTime() {
    time.textContent = new Date().toLocaleTimeString();
}

updateTime()


function getTimeOfDay(hour) {
    if (hour >= 6 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else if (hour >= 18 && hour < 24) {
        return 'evening';
    } else if (hour >= 0 && hour < 6) {
        return 'night';
    }
}

function showGreeting(date) {
    const hour = date.getHours();
    const timeOfDay = getTimeOfDay(hour);
    greeting.textContent = `Good ${timeOfDay}`
}

function showDay(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDay = date.toLocaleDateString('en-US', options);
    day.textContent = currentDay;
}


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
