class Persona {

    nombre: string;
    edad: number;
    sexo: string;

    constructor(nombre: string, edad: number, sexo: string) {
        
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    disponibilidad(): boolean {

        return Math.random() > 0.5;
    }
}