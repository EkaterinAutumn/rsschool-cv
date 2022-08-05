export function fetchWeather() {

  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const city = document.querySelector('.city');

  async function getWeather() {
    const geoCode = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${geoCode}&lang=en&appid=7f8d87d7cf15aeb3d56bb0374f31bdb7&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${data.wind.speed}m/s`;
    humidity.textContent = `${data.main.humidity}%`;
  }

  function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
  }

  document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('keypress', setCity);






  const input = document.getElementById('inputweather')

  function setNameInLocalStorage() {
      localStorage.setItem('city', inputweather.value);
  }
  window.addEventListener('beforeunload', setNameInLocalStorage)
  
  function getNameInLocalStorage() {
      if (localStorage.getItem('city')) {
        inputweather.value = localStorage.getItem('city');
      }
  }
  window.addEventListener('load', getNameInLocalStorage)


















}