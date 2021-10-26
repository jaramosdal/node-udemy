// Las const son más ligeras que los let.
// Si va a ser const, USAR const

let nombreCambiante = 'Nombre';
const nombre = 'Wolverine';

if(true){
    nombreCambiante = 'Otro Nombre';
    const nombre = 'Magneto';
}

console.log(nombreCambiante);
console.log(nombre);