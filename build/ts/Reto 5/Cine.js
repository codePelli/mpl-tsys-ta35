"use strict";
class Cine {
    constructor(pelicula, precioEntrada) {
        this.peliculaActual = pelicula;
        this.precioEntrada = precioEntrada;
        this.asientos = this.crearAsiento();
    }
    crearAsiento() {
        let asientos = [];
        let filas = 8;
        let columnas = 9;
        for (let fila = filas; fila > 0; fila--) {
            let filaAsientos = [];
            for (let columnaCodigo = "A".charCodeAt(0); columnaCodigo < "A".charCodeAt(0) + columnas; columnaCodigo++) {
                let columna = String.fromCharCode(columnaCodigo);
                filaAsientos.push({ fila, columna, ocupado: false });
            }
            asientos.push(filaAsientos);
        }
        return asientos;
    }
    asientoLibre() {
        for (let filaAsientos of this.asientos) {
            for (let asiento of filaAsientos) {
                if (!asiento.ocupado) {
                    return { fila: asiento.fila, columna: asiento.columna };
                }
            }
        }
        return null;
    }
    sentarEspectador(espectador) {
        let asientoLibre = this.asientoLibre();
        if (asientoLibre && espectador.dinero >= this.precioEntrada && espectador.edad >= this.peliculaActual.edadMinima) {
            let { fila, columna } = asientoLibre;
            console.log(espectador.nombre + "se ha sentado en el asiento " + fila + " " + columna);
            this.asientos[8 - fila][columna.charCodeAt(0) - "A".charCodeAt(0)].ocupado = true;
        }
        else {
            console.log(espectador.nombre + " no se puede sentar");
        }
    }
}
let peli = new Pelicula("Tenet", 120, 12, "Nolan");
let cine = new Cine(peli, 10);
for (let x = 1; x <= 20; x++) {
    let nombreEspectador = "Marc" + x;
    let edadEspectador = Math.floor(Math.random() * 40) + 10;
    let dineroEspectador = Math.random() * 30 + 10;
    let espectador = new Espectador(nombreEspectador, edadEspectador, dineroEspectador);
    cine.sentarEspectador(espectador);
}
