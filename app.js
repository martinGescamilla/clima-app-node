const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLong(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.long);
        return `La temperatura en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return 'No se pudo determinar el clima en esa direccion';
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
// lugar.getLugarLatLong(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(9.9280, -84.0907)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));