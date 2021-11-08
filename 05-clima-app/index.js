const { inquirerMenu, leerInput, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    const busquedas = new Busquedas();
    let opcion;

    do {
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
 
                // Buscar los lugares

                // Seleccionar el lugar

                // Clima

                // Mostrar resultados
                // console.clear();
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
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