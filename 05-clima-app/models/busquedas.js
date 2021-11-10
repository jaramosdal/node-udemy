const fs = require('fs');
const axios = require('axios');

class Busquedas {
    constructor() {
        // leer DB si existe

        this.historial = [];
        this.dbPath = './db/database.json'
        this.leerDB();
    }

    get historialCapitalizado(){
        return this.historial.map(h => {
            let palabras = h.split(', ');
            palabras = palabras.map(word => word[0].toUpperCase() + word.substring(1));
            return palabras.join(', ');
        })
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limite': 5,
            'language': 'es'
        };
    }

    get paramsWeather(){
        return {
            'appid': process.env.OPENWEATHER,
            'units': 'metric',
            'lang': 'es'
        };
    }

    async ciudad(lugar) {

        try {
            // petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();


            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));
        } catch (error) {
            return [];
        }

    }

    async climaLugar(lat, lon) {

        try {
            // petición http
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsWeather, lat, lon }
            });

            const resp = await instance.get();
            const { weather, main } = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            };
        } catch (error) {
            return [];
        }

    }

    agregarHistorial(lugar = ''){
        // Prevenir duplicados
        if (this.historial.includes(lugar.toLowerCase())) {
            return;
        }

        this.historial.unshift(lugar.toLowerCase());
        
        this.historial = this.historial.splice(0, 5);

        // Grabar en DB
        this.guardarDB();
    }

    guardarDB(){
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    leerDB(){
        if (!fs.existsSync(this.dbPath)) return;
    
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
    
        this.historial = data.historial;
    }
}

module.exports = Busquedas;