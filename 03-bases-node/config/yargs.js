const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            default: 5,
            describe: 'Es la base de la tabla de multiplicar'
        }, 
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla en consola'
        }, 
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'El el número hasta donde quieres la tabla'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

    module.exports = argv;