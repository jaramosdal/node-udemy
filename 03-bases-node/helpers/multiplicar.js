const fs = require('fs');

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

const crearArchivo = async (base = 5, listar = false) => {

    try {

        let salida = '';
    
        for (let index = 1; index <= 10; index++) {
            salida += `${base} x ${index} = ${base* index}\n`;
        }
        
        if(listar){
            console.log("================");
            console.log(`Tabla del: ${base}`);
            console.log("================");
            console.log(salida);
        }
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}