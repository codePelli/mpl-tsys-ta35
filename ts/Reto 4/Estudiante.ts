class Estudiante extends Persona {

    calificacion: number;

    constructor(nombre: string, edad: number, sexo: string, calificacion: number) {

        super(nombre, edad, sexo);
        this.calificacion = calificacion;
    }

    disponibilidad(): boolean {
        
        return Math.random() > 0.5;
    }
}