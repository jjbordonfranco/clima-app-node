const axios = require('axios'); //definimos objeto para peticion http axios


const getLugarLatLng = async(dir) => {



    const encodedUrl = encodeURI(dir); //convierte datos en seguros, sustituyendo los espacios por caracteres

    //configuracion header para peticion http axios. mismos valores que para Postman [url y header]
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'x-rapidapi-key': '1413015d3fmshfa8588051043257p1348bbjsncce16b0045c0' }
    });

    //Ejecución petición HTTP AXIOS
    const resp = await instance.get(); //se asigna valor cuando haya respuesta

    if (resp.data.Results.length === 0) { //debemos verificar que hay datos
        throw new Error(`No hay resultados para ${dir}`); //Si hay error se para el pgm aqui
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    // instance.get()  //al ser una promesa podemos utilizar await
    // .then(resp => { //petición correcta
    //     // console.log(resp.data); //si ponemos (resp) sale toda la informacion. (resp.data) muestra info de datos unicamente
    //     console.log(resp.data.Results[0]); //"Results" porque así lo llama el servicio. Tras comprobarlo en peticion anterior.obtenemos 1er resultado únicamente
    // })
    // .catch(err => { //error en peticion
    //     console.log('ERR!!!', err);
    // });

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}