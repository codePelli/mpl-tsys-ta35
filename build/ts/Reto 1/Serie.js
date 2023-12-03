"use strict";
class Serie {
    constructor(titulo, genero = "", creador, numTemporadas = 3, entregado = false) {
        this.titulo = titulo;
        this.creador = creador;
        this.numTemporadas = numTemporadas;
        this.entregado = entregado;
        this.genero = genero;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(obj) {
        if (obj instanceof Serie) {
            return this.numTemporadas - obj.numTemporadas;
        }
        else {
            console.log("ERROR");
            return 0;
        }
    }
    getTitulo() {
        return this.titulo;
    }
    getnumTemporadas() {
        return this.numTemporadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setnumTemporadas(numTemporadas) {
        this.numTemporadas = numTemporadas;
    }
    setEntregado(entregado) {
        this.entregado = entregado;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    toString() {
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
