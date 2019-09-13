const axios = require('axios'); //definimos objeto para peticion http axios

const getClima = async(lat, lon) => {

    const resp = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=529f5cbed83f7ebf28ec94514a202631`);

    return resp.data.main.temp;
}

module.exports = {

    getClima
}