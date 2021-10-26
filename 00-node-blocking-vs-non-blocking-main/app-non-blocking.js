const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

users.forEach(user => getUsuario( user, ( usuario ) => {
    console.log(`Usuario ${usuario}:`, usuario );

    if(user === 20){
        console.timeEnd('inicio');
    }
}))

console.log('Fin de programa');