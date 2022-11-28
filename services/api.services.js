import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if(!token) {
        throw new Error(`Don't set API key, please set API key with -t [API_KEY]`)
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });

    return data;
};


export { getWeather };

//a8dfd6893291dff38720b0ecfa2e28d8
