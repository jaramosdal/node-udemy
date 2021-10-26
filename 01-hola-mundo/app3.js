console.log('Inicio de programa'); // 1 

// setTimeout: cuando pasa el tiempo establecido, se ejecuta y el resultado va a al stack de callbacks
setTimeout(() => {
    console.log('Primer timeout'); // 5
}, 3000);

setTimeout(() => {
    console.log('Segundo timeout'); // 3
}, 0);

setTimeout(() => {
    console.log('Tercer timeout'); // 4
}, 0);

console.log('Fin de programa'); // 2

// Todas estas instrucciones son no bloqueantes