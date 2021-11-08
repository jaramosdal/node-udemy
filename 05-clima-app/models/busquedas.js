const axios = require('axios');

class Busquedas {
    constructor() {
        // leer DB si existe

        this.historial = ['Tegucigalpa', 'Madrid', 'San José'];
    }

    async ciudad(lugar) {

        try {
            // petición http
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madried.json?limit=5&language=es&access_token=pk.eyJ1IjoiamFyYW1vc2RhbCIsImEiOiJja3ZyMnZjYW0yNnpkMzJrbDg3MnMzeWNlIn0.4hxaQJU-7bteLNGHcI8c3w');
            console.log(resp.data);
        } catch (error) {
            return [];
        }

    }
}

module.exports = Busquedas;