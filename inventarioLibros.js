class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor; 
        this.genero = genero;
    }
}
const nuevoLibro1 = new Libro("El enigma sagrado", "Christian Jacq", "Misterio histórico");
const nuevoLibro2 = new Libro("La piedra de luz", "Christian Jacq", "Novela histórica");
const nuevoLibro3 = new Libro("Ramsés: El hijo de la luz", "Christian Jacq", "Novela histórica");
const nuevoLibro4 = new Libro("El médico", "Noah Gordon", "Novela histórica");
const nuevoLibro5 = new Libro("Los pilares de la Tierra", "Ken Follett", "Novela histórica");
const nuevoLibro6 = new Libro("La Sombra del Viento", "Carlos Ruiz Zafón", "Misterio");
const nuevoLibro7 = new Libro("Del Hobbit", "J.R.R. Tolkien", "Fantasía");
const nuevoLibro8 = new Libro("El nombre del viento", "Patrick Rothfuss", "Fantasía épica");
const nuevoLibro9 = new Libro("Cazadores de sombras: Ciudad de hueso", "Cassandra Clare", "Fantasía urbana");
const nuevoLibro10 = new Libro("El cuento de la criada", "Margaret Atwood", "Ciencia ficción");
const libros       = [nuevoLibro1,nuevoLibro2,nuevoLibro3,nuevoLibro4,nuevoLibro5,nuevoLibro6,nuevoLibro7,nuevoLibro8,nuevoLibro9,nuevoLibro10]

while (true) {
    const opcion = prompt('[Inventario de libros]\n\n Seleccione una opción:\n1. Agregar libro\n2. Quitar libro\n3. Buscar libro\n4. Mostrar inventario\n5. Quitar ultimo registro\n6. Salir');

    switch (opcion) {
        case '1':
            agregarLibro();
            break;
        case '2':
            quitarLibro();
            break;
        case '3':
            buscarLibro();
            break;
        case '4':
            console.table(libros);
            break;
        case '5':
            quitarUltimoLibro();
            break;
        case '6':
                console.log('Saliendo del programa.');
                break;
        default:
            console.log('Opción no válida. Inténtalo de nuevo.');
    }

    if (opcion === '6') {
        break;
    }
}

function agregarLibro() {
    const titulo = prompt('Titulo del libro agregar:');
    const autor = prompt('Ingrese el autor del libro:');
    const genero = prompt('Ingrese el género del libro:');

    const nuevoLibro = new Libro(titulo, autor, genero);
    libros.push(nuevoLibro);
    console.log(nuevoLibro);
}

function quitarLibro() {
    const titulo = prompt('Ingrese el título del libro que desea quitar:');
    const indice = libros.findIndex((lib) => lib.titulo === titulo);

    if (indice !== -1) {
        libros.splice(indice, 1);
        console.log('Libro eliminado del inventario:', titulo);
    } else {
        console.log('Libro no encontrado en el inventario.');
    }
}

function buscarLibro() {
    const titulo = prompt('Ingrese el título del libro que desea buscar:');
    let libroEncontrado = libros.find((lib)=>lib.titulo === titulo);
    if (libroEncontrado) {
        console.log('Libro encontrado:', libroEncontrado);
    } else {
        console.log('Libro no encontrado en el inventario.');
    }
}

function quitarUltimoLibro() {
    if (libros.length > 0) {
        const libroEliminado = libros.pop();
        console.log('Ultimo libro eliminado:', libroEliminado.titulo);
    } else {
        console.log("No hay libros para eliminar.");
    }
}



