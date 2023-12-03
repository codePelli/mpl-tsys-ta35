"use strict";
class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    getIsbn() {
        return this.isbn;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setIsbn(isbn) {
        this.isbn = isbn;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    toString() {
        return "El libro " + this.isbn + " hecho por " + this.autor + " tiene " + this.numPaginas + " paginas.";
    }
}
const lotr = new Libro("111-2-33-44-5", "LOTR", "Tolkien", 1000);
const hobbit = new Libro("222-3-44-66-7", "Hobbit", "Tolkien", 600);
console.log(lotr.toString());
console.log(hobbit.toString());
if (lotr.getNumPaginas() > hobbit.getNumPaginas()) {
    console.log(lotr.getTitulo() + " tiene mas paginas");
}
else if (lotr.getNumPaginas() < hobbit.getNumPaginas()) {
    console.log(hobbit.getTitulo() + "tiene mas paginas");
}
else {
    console.log('Los dos libros tienen las mismas pag');
}
