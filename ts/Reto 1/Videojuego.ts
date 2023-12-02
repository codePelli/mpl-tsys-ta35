class Videojuego implements Entregable{

    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compania: string;

    constructor(titulo: string, horasEstimadas: number = 10, genero: string, compania: string) {

        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compania = compania;
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

        if (obj instanceof Videojuego) {
            return this.horasEstimadas - obj.horasEstimadas;
            
        } else {

            console.log("ERROR");
            return 0;
        }
    }

    getTitulo(): string {
        return this.titulo;
    }

    getHorasEstimadas(): number {
        return this.horasEstimadas;
    }

    getEntregado(): boolean {
        return this.entregado;
    }

    getGenero(): string {
        return this.genero;
    }

    getCompania(): string {
        return this.compania;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setHorasEstimadas(horasEstimadas: number): void {
        this.horasEstimadas = horasEstimadas;
    }

    setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }

    setGenero(genero: string): void {
        this.genero = genero;
    }

    setCompania(compania: string): void {
        this.compania = compania;
    }

    toString(): string {
        return ("Título: " + this.titulo + ", Horas Estimadas:  "+ this.horasEstimadas + ", Entregado: "+this.entregado 
            + ", Género: " + this.genero + ", Compañía: " + this.compania);
    }
}

let metalGear = new Videojuego('Metal Gear', 15, 'Accion', 'KONAMI');

console.log(metalGear.getTitulo());
console.log(metalGear.getHorasEstimadas());
console.log(metalGear.getEntregado());
console.log(metalGear.getGenero());
console.log(metalGear.getCompania());

metalGear.setHorasEstimadas(20);
metalGear.setEntregado(true);
metalGear.setGenero('Accion-Aventura');

console.log(metalGear.toString());
