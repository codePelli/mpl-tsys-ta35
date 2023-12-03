"use strict";
class Videojuego {
    constructor(titulo, horasEstimadas = 10, genero, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compania = compania;
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
        if (obj instanceof Videojuego) {
            return this.horasEstimadas - obj.horasEstimadas;
        }
        else {
            console.log("ERROR");
            return 0;
        }
    }
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setEntregado(entregado) {
        this.entregado = entregado;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
    }
    toString() {
        return ("Título: " + this.titulo + ", Horas Estimadas:  " + this.horasEstimadas + ", Entregado: " + this.entregado
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
