require('colors');

const { inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');





const main = async() => {
    console.log('hola mundo');

    let opt = '';

    const tareas = new Tareas();

    do {

      opt = await  inquirerMenu();
      
      switch (opt) {
        
        case '1':

          const desc = await leerInput('Descripcion:');
          tareas.crearTarea(desc)

          break;

        case '2':

          console.log(tareas.listadoArr);
          break;

        default:
          break;
      }

     
      await pausa()
      
    } while (opt !== '0');
    
    
}


main();