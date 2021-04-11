const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la Tabla en Consola'
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b ) ){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                } )   
                .argv;


module.exports = argv;