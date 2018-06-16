const axios = require('axios');



const getClima = async(lat, long) => {

    let encondeLat = encodeURI(lat);
    let encondeLong = encodeURI(long);
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${encondeLat}&lon=${encondeLong}&units=metric&appid=44a0671652fb02668bd3fa1dcf51a533`)
    if (resp.code === 401) {
        throw new Error('No hay resultados para las coordenadas');
    }
    let temp = resp.data.main.temp;



    return temp
}


module.exports = {
    getClima
}