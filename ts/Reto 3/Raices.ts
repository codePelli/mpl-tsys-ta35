class Raices {

    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminante(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    tieneRaiz(): boolean {
        return this.getDiscriminante() === 0;
    }

    calcular(): void {
        const discriminante = this.getDiscriminante();

        if (discriminante > 0) {

            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);

            console.log("Las raices son " + raiz1 + " y " + raiz2);

        } else if (discriminante === 0) {

            const raiz = -this.b / (2 * this.a);

            console.log("La raiz es " + raiz);

        } else {

            console.log("Ecuacion sin solucion");
        }
    }

    obtenerRaices(): void {

        if (this.tieneRaices()) {

            this.calcular();

        } else {
            console.log("Ecuacion sin solucion");
        }
    }

    obtenerRaiz(): void {

        if (this.tieneRaiz()) {

            this.calcular();

        } else {

            console.log("Ecuacion sin solucion");
        }
    }
}

const ecuacion1 = new Raices(1, -3, 2);
ecuacion1.obtenerRaices();

const ecuacion2 = new Raices(1, -2, 1);
ecuacion2.obtenerRaiz();
