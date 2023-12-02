class Serie implements Entregable{

    titulo: string;
    numTemporadas: number;
    entregado: boolean;
    genero: string;
    creador: string;

    constructor(titulo: string, genero: string = "", creador: string, numTemporadas: number = 3, 
        entregado: boolean = false) {

        this.titulo = titulo;
        this.creador = creador;
        this.numTemporadas = numTemporadas;
        this.entregado = entregado;
        this.genero = genero;
    }

    entregar(): void {
        this.entregado = true;
    }

    devolver(): void {
        this.entregado = false;
    }

    isEntregado(): boolean {
        return this.entregado;
    }

    compareTo(obj: Entregable): number {

        if (obj instanceof Serie) {
            return this.numTemporadas - obj.numTemporadas;

        } else {
            
            console.log("ERROR");
            return 0;
        }
    }

    getTitulo(): string {
        return this.titulo;
    }

    getnumTemporadas(): number {
        return this.numTemporadas;
    }

    getEntregado(): boolean {
        return this.entregado;
    }

    getGenero(): string {
        return this.genero;
    }

    getCreador(): string {
        return this.creador;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setnumTemporadas(numTemporadas: number): void {
        this.numTemporadas = numTemporadas;
    }

    setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }

    setGenero(genero: string): void {
        this.genero = genero;
    }

    setCreador(creador: string): void {
        this.creador = creador;
    }

    toString(): string {
        return "Título: " + this.titulo + ", Creador: " + this.creador + ", Número de Temporadas: " + this.numTemporadas 
            + ", Entregado: " + this.entregado + ", Género: " + this.genero;
    }
}

let prisonBreak = new Serie("Prison Break", "Drama", "Director", 5, true);

console.log(prisonBreak.getTitulo());
console.log(prisonBreak.getnumTemporadas());
console.log(prisonBreak.getEntregado()); 
console.log(prisonBreak.getGenero()); 
console.log(prisonBreak.getCreador());

prisonBreak.setnumTemporadas(5);
prisonBreak.setEntregado(true);
prisonBreak.setGenero('Drama');

console.log(prisonBreak.toString());