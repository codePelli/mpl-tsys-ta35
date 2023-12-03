"use strict";
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    disponibilidad() {
        return Math.random() > 0.5;
    }
}
