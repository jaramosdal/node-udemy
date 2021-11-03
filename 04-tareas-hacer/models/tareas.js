const Tarea = require('./tarea');

/**
 * _listado:
 *      { 'uuid-xxxxx-xxxxx-xxxxx': { id:xxxxx-xxxxx-xxxxx. desc:asd, completadoEn:20210810 } }
 */


class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;