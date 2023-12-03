"use strict";
class Aula {
    constructor(id, maxEstudiantes, materia, profesor) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = [];
    }
    puedeDarseClase() {
        let profeDispo = this.profesor.disponibilidad();
        let profMatCorrecta = this.profesor.materia === this.materia;
        let aprobados = this.calculoAprobados();
        return profeDispo && profMatCorrecta && aprobados > 50;
    }
    calculoAprobados() {
        let aprobados = this.estudiantes.filter(estudiante => estudiante.calificacion >= 5);
        let porcentajeAprobados = (aprobados.length / this.estudiantes.length) * 100;
        return porcentajeAprobados;
    }
    printClase() {
        console.log("¿Se puede dar clase en el aula " + this.id + "? " + (this.puedeDarseClase() ? "S" : "N"));
        console.log("Porcentaje de aprobados: " + this.calculoAprobados().toFixed(2) + "%");
        console.log("Aprobados: " + this.calcularAprobadosPorGenero("M") + " chicos, " + this.calcularAprobadosPorGenero("F") + " chicas");
    }
    calcularAprobadosPorGenero(genero) {
        let aprobados = this.estudiantes.filter(estudiante => estudiante.calificacion >= 5 && estudiante.sexo === genero);
        return aprobados.length;
    }
}
let profCiencias = new Profesor("Profesor Ciencias", 40, "M", "Ciencias");
let aulaCiencias = new Aula(1, 30, "Ciencias", profCiencias);
for (let x = 0; x < 30; x++) {
    let genero = Math.random() > 0.5 ? "M" : "F";
    let calificacion = Math.floor(Math.random() * 11);
    let estudiante = new Estudiante("Estudiante" + (x + 1), 18 + x, genero, calificacion);
    aulaCiencias.estudiantes.push(estudiante);
}
aulaCiencias.printClase();
