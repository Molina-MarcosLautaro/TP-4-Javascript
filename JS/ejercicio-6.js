class Libro {
    constructor(ISBN, titulo, autor, numeroDePaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
    }
    get ISBN() {
        return this._ISBN;
    }
    set ISBN(nuevoISBN) {
        this._ISBN = nuevoISBN;
    }
    get titulo() {
        return this._titulo
    }
    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo
    }
    get autor() {
        return this._autor
    }
    set autor(nuevoAutor) {
        this._nuevoAutor = nuevoAutor
    }
    get numeroDePaginas() {
        return this._numeroDePaginas
    }
    set numeroDePaginas(nuevoNumeroDePaginas) {
        this._numeroDePaginas = nuevoNumeroDePaginas
    }

    // metodo mostrarLibro()
    mostrarLibro() {
        console.log(`El libro ${this._titulo} con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numeroDePaginas} páginas`)
    }
}

// crear dos objetos libros
const libro1 = new Libro("978-01", "Harry Potter", "J.K.Rowling", 250)
const libro2 = new Libro("978-02", "Juego de Tronos", "George R.R. Martin", 200)

// mostrar los objetos libros
libro1.mostrarLibro()
libro2.mostrarLibro()

// indicar cuál de los 2 objetos "Libro" tiene mas paginas
if (libro1._numeroDePaginas > libro2._numeroDePaginas){
    console.log(`El libro ${libro1.titulo} tiene mas páginas`)
}else if (libro2._numeroDePaginas > libro1._numeroDePaginas){
    console.log(`El libro ${libro2.titulo} tiene mas páginas`)
}else {
    console.log('Ambos tienen la misma cantidad')
}