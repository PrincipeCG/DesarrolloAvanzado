//Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        {"titulo": "cien años de soledad", "autor": "Gabriel Garcia Marquez","genero": "realismo magico","disponible": true},
    
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
        
    ]
};
//Funcion para simnular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

//funcion para mostrar los libros en la consola
function mostrarlibros(){
    leerDatos((datos) => {
        console.log("inventario de libros");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

//funcion para agregar un nuevo libro
function agregarlibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    biblioteca.libros.push(nuevoLibro);
    setTimeout(() => {
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
        console.log(`Libro agregado: ${titulo} - ${autor} (${disponible ? 'Disponible' : 'Prestado'})`);
    }, 1000);
}

//function para cambiar la disponibilidad de un libro
function actualizarDisponibildad(titulo, nuevoEstado){
    //simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`Disponibilidad actualizada: ${titulo} - ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
        } else {
            console.log(`Libro no encontrado: ${titulo}`);
        }
    }, 1000);
}

//ejemplo de como ejecutar la aplicacion 
mostrarlibros();
agregarlibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibildad("1984", false);


    
