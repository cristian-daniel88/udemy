require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');





const main = async() => {
    

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
     //cargar tareas
     tareas.cargarTareasFromArray(tareasDB)
  
    }

    

    do {

      opt = await  inquirerMenu();
      
      switch (opt) {
        
        case '1':

          const desc = await leerInput('Descripcion:');
          tareas.crearTarea(desc)

          break;

        case '2':

          // console.log(tareas.listadoArr);

           tareas.listadoCompleto();

          break;

        default:
          break;
      }

      
      guardarDB(tareas.listadoArr)
     
      await pausa()
      
    } while (opt !== '0');
    
    
}


main();