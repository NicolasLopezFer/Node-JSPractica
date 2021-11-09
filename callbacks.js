

// setTimeout(() => {
//     console.log("Hola mundo");
// }, 1000);


const getUsuarioById= ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Nicolas Lopez'
    }


    setTimeout(() => {
        callback(usuario);
    }, 1500);
}


getUsuarioById(10, ( {id, nombre} ) => {
    console.log(id);
    console.log(nombre.toUpperCase());
});




