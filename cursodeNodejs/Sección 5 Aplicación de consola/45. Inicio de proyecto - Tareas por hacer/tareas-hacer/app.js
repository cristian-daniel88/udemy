require('colors');

const { monstrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    console.log('hola mundo');

    let opt = '';

    do {
      opt = await  monstrarMenu()
      console.log({opt})
      if (opt !== '0') await pausa()
    } while (opt !== '0');
    
    
}


main();