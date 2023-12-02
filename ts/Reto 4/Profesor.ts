class Profesor extends Persona {

    materia: string;

    constructor(nombre: string, edad: number, sexo: string, materia: string) {
        
        super(nombre, edad, sexo);
        this.materia = materia;
    }

    disponibilidad(): boolean {
        return Math.random() > 0.2;
    }
}

let estud = new Estudiante("Marc", 31, "M", 8);
let estud2 = new Estudiante("Xavi", 35, "M", 6);
let profesor = new Profesor("Jose", 35, "M", "Programacion");

console.log(estud.disponibilidad());
console.log(estud2.disponibilidad());
console.log(profesor.disponibilidad());