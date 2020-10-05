const axios = require('axios').default;

const getClima = async(lat, lng) => {
    const key = '2b4f7257ec001dc96c858168fc31e2e0';

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`,
    });

    const resp = await instance.get();

    city = resp.data.name;
    temp = resp.data.main.temp;
    return {
        city,
        temp
    }
}


module.exports = {
    getClima
}