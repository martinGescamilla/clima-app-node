const axios = require('axios');



const getLugarLatLong = async(direccion) => {

    let encondeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeUrl}&key=AIzaSyBLM0Z6sSTPIVn0UqDYhrekDSPvFnYUgao`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad');
    }


    let location = resp.data.results[0];
    let address = location.formatted_address;
    let latitud = location.geometry.location.lat;
    let longitud = location.geometry.location.lng;



    return {
        direccion: address,
        lat: latitud,
        long: longitud
    }
}

module.exports = {
    getLugarLatLong
}