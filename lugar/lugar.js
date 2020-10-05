const axios = require('axios').default;

const getLugarLatLong = async(ciudad) => {
    const encoderUrl = encodeURI(ciudad);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+%22${encoderUrl}%22?json=1`,
    });

    const resp = await instance.get();

    dir = resp.data.standard.city;
    lat = resp.data.latt;
    lng = resp.data.longt;
    return {
        dir,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLong
}