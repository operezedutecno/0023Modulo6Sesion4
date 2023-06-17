const { error } = require("console");
const fs = require("fs");
const axios = require("axios");

// console.log("Probando APP");


// fs.writeFile("files/saludo.txt", "Hola Fullstack 0023", "utf8",(error) => {
//     console.log(error);
// })

// fs.appendFile("files/saludo.txt","\nModificado","utf8",(error) => {
//     if(error)
//         return console.log("Ocurrió un error");
    
//     console.log("Acción realizada exitosamente");
// })

//Lectura de Archivo de manera Asíncrona
// fs.readFile("files1/saludo.txt","utf8", (error, data) => {
//     if(error)
//         return console.log("Ocurrió un error leyendo el archivo");

//     console.log("Datos del archivo:", data);
// })


//Lectura de Archivo de manera Síncrona
// try {
//     const info = fs.readFileSync("files/saludo.txt","utf8")
//     console.log(info);
// } catch (error) {
//     console.log("Ocurrió un error");
// }


// Eliminación de archivo de manera Asíncrona
// fs.unlink("files/saludo.txt",(error) => {
//     if(error)
//         console.log("Ocurrió un error eliminando el archivo");
//     else
//         console.log("Archivo eliminado con éxito");
// })


(async () => {
    try { //Eliminar archivo en caso de que exista, para no duplicar información con el appendFileSync
        fs.unlinkSync("files/personajes.txt")
    } catch (error) {
        console.log("No se pudo eliminar el archivo");
    }// Fin eliminación de archivo

    //Ejemplo de Proceso Síncrono
    for (let index = 1; index <= 10; index++) {
        const personaje = await axios.get(`https://swapi.dev/api/people/${index}`)
        let info = `Nombre: ${personaje.data.name}\n`
        info += `Color de cabello: ${personaje.data.hair_color}\n`
        info += `Color de piel: ${personaje.data.skin_color}\n`
        info += `Color de ojos: ${personaje.data.eye_color}\n`
        info += "------------------------------------------------\n"
        fs.appendFileSync("files/personajes.txt",info,"utf8")
    }
})()




// Ejercicio de consulta de API
// axios.get("https://swapi.dev/api/people/1").then(resp => {
//     console.log(resp.data);
// })


