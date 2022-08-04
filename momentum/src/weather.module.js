export function fetchWeather() {

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=en&appid=7f8d87d7cf15aeb3d56bb0374f31bdb7&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  }
  getWeather()




}