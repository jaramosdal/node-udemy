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
                const lugares = await busquedas.ciudad(termino);
                const id = await listadoLugares(lugares);
                const lugarSeleccionado = lugares.find( l => l.id === id);
                // Buscar los lugares

                // Seleccionar el lugar

                // Clima

                // Mostrar resultados
                // console.clear();
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad:', lugarSeleccionado.nombre);
                console.log('Lat:', lugarSeleccionado.lat);
                console.log('Lng:', lugarSeleccionado.lng);
                console.log('Temperatura:',);
                console.log('Mínima:',);
                console.log('Máxima:',);
                break;
        
            default:
                break;
        }


        if(opcion !== 0) await pausa();
    } while( opcion !== 0)
    
}

main();