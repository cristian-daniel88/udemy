require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');





const main = async() => {
    console.log('hola mundo');

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB()

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

      // fue comentado para que no se borre la base de datos
      // guardarDB(tareas.listadoArr)
     
      await pausa()
      
    } while (opt !== '0');
    
    
}


main();