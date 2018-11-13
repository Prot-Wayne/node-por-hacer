const opts = {
    descripcion : {
        alias: 'd',
        demand: true 
    }        
}
const opts2 = {
    descripcion : {
        alias: 'd',
        demand: true 
    },
    completado:{
        alias:'c',
        default: true
    }       
}

const argv = require('yargs')
                            .command('crear', 'crea una nueva tarea', opts)
                            .command('listar', 'muestra las tareas por hacer')
                            .command('actualizar', 'actualiza una lista por hacer', opts2)
                            .command('borrar', 'borra tarea', opts)
                            .help()
                            .argv;

module.exports = {
    argv
}