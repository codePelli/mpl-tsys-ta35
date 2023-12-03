"use strict";
class Estudiante extends Persona {
    constructor(nombre, edad, sexo, calificacion) {
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
    }
    disponibilidad() {
        return Math.random() > 0.5;
    }
}
