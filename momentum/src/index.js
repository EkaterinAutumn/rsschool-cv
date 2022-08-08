import './owfont-master/css/owfont-regular.css';
import './styles.css';
import {getTimeDay} from './clock.module.js';
import {greeting} from './greeting.module.js';
import {fetchWeather} from './weather.module.js';
import {getQuotes} from './quotes.module.js';
import {getMusic} from './pleer.module.js';


greeting();
getTimeDay();
fetchWeather();
getQuotes();
getMusic();