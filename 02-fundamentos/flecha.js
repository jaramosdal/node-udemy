// function sumar(a, b){
//     return a + b;
// }

const sumar = (a, b = 10) => a + b;
const saludar = () => 'Hola mundo';

console.log(sumar(5, 10));
console.log(saludar());