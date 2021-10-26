const empleados = [
    {
        id: 1,
        nombre: 'Javi'
    },
    {
        id: 2,
        nombre: 'Alba'
    },
    {
        id: 3,
        nombre: 'Noa'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id, callback) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) 
            ? resolve(empleado) 
            : reject(`No existe empleado con el id ${id}`);
    });
}

const getSalario = (id, callback) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario) 
            ? resolve(salario) 
            : reject(`No existe salario con el id ${id}`);
    });
}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado: ${empleado} tiene un salario de: ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 2;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN!')
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL!')
        console.log(err)
    });