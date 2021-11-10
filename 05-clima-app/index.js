require('dotenv').config();

const { inquirerMenu, leerInput, pausa, listadoLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    const busquedas = new Busquedas();
    let opcion;

    do {
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                
                // Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                
                // Seleccionar el lugar
                const id = await listadoLugares(lugares);
                if (id === '0') continue;

                const lugarSeleccionado = lugares.find( l => l.id === id);
                
                // Guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre)
                
                // Clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                // Mostrar resultados
                // console.clear();
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad:', lugarSeleccionado.nombre.green);
                console.log('Lat:', lugarSeleccionado.lat);
                console.log('Lng:', lugarSeleccionado.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Cómo está el clima:', clima.desc.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {

                    const idx = `${i+1}`.green;
                    console.log(`${idx} ${lugar}`)
                })
            default:
                break;
        }


        if(opcion !== 0) await pausa();
    } while( opcion !== 0)
    
}

main();