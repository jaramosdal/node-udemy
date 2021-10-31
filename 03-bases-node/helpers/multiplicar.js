const fs = require('fs');
const colors = require('colors');
const { CLIENT_RENEG_LIMIT } = require('tls');

// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log("================")
//         console.log(`Tabla del: ${base}`)
//         console.log("================")
    
//         let salida = '';
    
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base* index}\n`;
//         }
    
//         console.log(salida);
    
//         fs.writeFile(`tabla-${base}.txt`, salida, err => {
//             err
//                 ? reject(err)
//                 : resolve(`tabla-${base}.txt`);
//         });
//     });
    
// }

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base* index}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base* index}\n`;
        }
        
        if(listar){
            console.log("================".green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log("================".green);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}