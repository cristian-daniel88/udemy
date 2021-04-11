
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')
            

console.clear();

console.log( argv );










// rainbow es un color

crearArchivo( argv.b, argv.l, argv.h )
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado') )
   .catch(err => console.log(err))

