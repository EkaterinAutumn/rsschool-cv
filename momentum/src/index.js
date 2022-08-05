import './owfont-master/css/owfont-regular.css';
import './styles.css';
import {getTimeDay} from './clock.module.js';
import {greeting} from './greeting.module.js';
import {fetchWeather} from './weather.module.js'

greeting();
getTimeDay();
fetchWeather();