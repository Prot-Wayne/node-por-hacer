const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = ( ) => {
    
    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error ( err)
        } else {
            return  console.log('tarea guardada');
        }                   
    })
}

const cargarDB = ( ) => {

    try {
         listadoPorHacer = require( '../db/data.json');        
    } catch (error) {
        listadoPorHacer = [];
    }
    

}

let crear = ( descripcion ) => {

    cargarDB();

    let objHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( objHacer );
    guardarDB();
    
    return listadoPorHacer;
}

let getListado = () => {

    cargarDB();
    return  listadoPorHacer;

}

let updateTarea = ( descripcion, completado = true) => {
    
    cargarDB();

    let tarea = listadoPorHacer.find( tarea => tarea.descripcion == descripcion);

    if (!tarea){
        
        throw new Error ('No se encontró tarea');

    } else {

            tarea.completado = completado;
            guardarDB();
        
        return  console.log('Tarea completada');
    }
}

let deleteTarea = ( descripcion )=>{
        
        cargarDB();

       let nuevoListado = listadoPorHacer.filter(tarea => {
           return  tarea.descripcion != descripcion
       });

       if ( nuevoListado.length ===  listadoPorHacer ) {
           return false;
       }else {
           listadoPorHacer = nuevoListado;
           return true;
       }

}

module.exports = {
    crear,
    getListado,
    updateTarea,
    deleteTarea
}
