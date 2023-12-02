class Libro {

    private isbn: string;
    private titulo: string;
    private autor: string;
    private numPaginas: number;

    constructor(isbn: string, titulo: string, autor: string, numPaginas: number) {

        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    getIsbn(): string {
        return this.isbn;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    getNumPaginas(): number {
        return this.numPaginas;
    }

    setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    setNumPaginas(numPaginas: number): void {
        this.numPaginas = numPaginas;
    }

    toString(): string {
        return "El libro " + this.isbn + " hecho por " + this.autor + " tiene " + this.numPaginas + " paginas.";
    }    
}

const lotr = new Libro("111-2-33-44-5", "LOTR", "Tolkien", 1000);
const hobbit = new Libro("222-3-44-66-7", "Hobbit", "Tolkien", 600);

console.log(lotr.toString());
console.log(hobbit.toString());


if (lotr.getNumPaginas() > hobbit.getNumPaginas()) {

    console.log(lotr.getTitulo() + " tiene mas paginas");

} else if (lotr.getNumPaginas() < hobbit.getNumPaginas()) {

    console.log(hobbit.getTitulo() + "tiene mas paginas");

} else {

    console.log('Los dos libros tienen las mismas pag');
}