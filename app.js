const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion) //getLugarLatLng devuelve una promesa por ser async
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log); //obtener datos en caso de error


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);