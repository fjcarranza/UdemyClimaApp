const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');
const { requiresArg, describe, argv } = require("yargs");
const { getClima } = require('./clima/clima');

let ciudad = argv.d;

const getInfo = async(ciudad) => {

    try {
        const coord = await lugar.getLugarLatLong(ciudad);
        const tempe = await clima.getClima(coord.lat, coord.lng);
        return `El temperatura para la ciudad de ${tempe.city} es de: ${tempe.temp}.`

    } catch (e) {
        return `No se pudo sacar la temperatura para la ciudad de ${ciudad}.`

    }
}

getInfo(ciudad)
    .then(console.log)
    .catch(console.log)