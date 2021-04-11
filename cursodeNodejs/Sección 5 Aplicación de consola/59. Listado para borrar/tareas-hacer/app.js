require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList} = require('./helpers/inquirer');

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

        case '3': // listar completadas
          tareas.listarPendientesCompletadas(true);
          break;

        case '4': // listar pendientes
          tareas.listarPendientesCompletadas(false);
          break;
        
        case '5': // compleado | pendiente
          const ids = await mostrarListadoCheckList(tareas.listadoArr);
          console.log(ids)
          tareas.toggleCompletadas(ids)
          break;
        
        case '6': // Borrar
          const id =  await listadoTareasBorrar(tareas.listadoArr);
          
          if (id !== '0') {
            const ok = await confirmar('Estas Seguro?');
            if ( ok ) {
              
              tareas.borrarTarea( id );
              console.log('Tarea borrada')
            }
            
          }
          break;
        default:
          break;
      }

      
      guardarDB(tareas.listadoArr)
     
      await pausa()
      
    } while (opt !== '0');
    
    
}


main();