require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { 
    inquirerMenu, 
    pausa, 
    leerInput 
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        // Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        // Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opción
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr)
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== '0') await pausa();
    } while (opt !== '0');

}

main();