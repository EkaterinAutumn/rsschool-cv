import './owfont-master/css/owfont-regular.css';
import './styles.css';
import {getTimeDay} from './clock.module.js';
import {greeting} from './greeting.module.js';
import {fetchWeather} from './weather.module.js';
import {getQuotes} from './quotes.module.js';
import {getMusic} from './pleer.module.js';
import {getPhoto} from './slider.module.js';



getPhoto();
greeting();
getTimeDay();
fetchWeather();
getQuotes();
getMusic();

console.log('Часы и календарь +15 \nПриветствие +10 \nСмена фонового изображения +20 \nВиджет погоды +15 \nВиджет цитата дня +10 \nАудиоплеер +15 \nИтого 85, остальные пункты не делала');
