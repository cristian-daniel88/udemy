
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv

console.clear();



console.log(process.argv);
console.log( argv );

console.log('base: yargs', argv.base); 








// const base = 11;



// crearArchivo( base )
//    .then( nombreArchivo => console.log(nombreArchivo, 'Creado') )
//    .catch(err => console.log(err))

