const argv  = require('./config/yargs').argv;
const  porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

 switch ( comando ) {

    case 'crear':
    porHacer.crear ( argv.descripcion );    
    break;

    case 'listar':
    
    let listado= porHacer.getListado();

    console.log('======== Tareas por hacer ========'.green);
     for(let tarea of listado) {
             
        console.log(`${tarea.descripcion}`);
        console.log('Estado:', tarea.completado);
        
    }
    console.log('======== Tareas por hacer ========'.green);
 
    
    break;

    case 'actualizar':
    
    porHacer.updateTarea(argv.descripcion, argv.completado);

    break;

    case 'borrar':
    
    porHacer.deleteTarea(argv.descripcion);

    break;

    default:
    console.log('No existe comando');
} 