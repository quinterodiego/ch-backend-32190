class Usuario {
    constructor(pNombre, pApellido, pLibros){
        this.nombre = pNombre
        this.apellido = pApellido
        this.libros = pLibros
        this.mascotas = []
    }

    getFullName() {
        const mensaje = `El nombre completo del usuario es: ${this.nombre} ${this.apellido}`;
        console.log(mensaje)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas(){
        const mensaje = `La cantidad de mascotas es: ${this.mascotas.length}`
        console.log(mensaje)
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor })
    }

    getBookNames() {
        const newBooks = [];
        this.libros.map(b => newBooks.push(b.nombre))
        console.log('Libros: ', newBooks)
    }
}

const p = new Usuario('Diego', 'Quintero', [], [])
p.getFullName();
p.addMascota('Leon');
p.countMascotas();
p.addBook('El señor de los anillos: La comunidad del anillo', 'Tolkien');
p.addBook('Juego de Tronos', 'George R. R. Martin');
p.getBookNames();