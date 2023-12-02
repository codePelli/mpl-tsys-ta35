let series: Serie[] = [];
let videojuegos: Videojuego[] = [];

series[0] = new Serie("Prison Break", "Drama", "Director", 5, true);
series[1] = new Serie("Oz", "Género2", "Director", 8, false);
series[2] = new Serie("Dragon Ball", "Anime", "Toriyama", 3, true);
series[3] = new Serie("Akira", "Anime", "Director", 6, false);
series[4] = new Serie("Twin Peaks", "SCI-FI", "Lynch", 10, true);

videojuegos[0] = new Videojuego("Metal Gear", 15, "Accion", "Konami");
videojuegos[1] = new Videojuego("Dota", 20, "Moba", "Valve");
videojuegos[2] = new Videojuego("Rust", 10, "Action-RPG-FPS", "Facepunch");
videojuegos[3] = new Videojuego("Death Stranding", 25, "Drama-Action-SCI-FI", "KOJIMA PRODUCTIONS");
videojuegos[4] = new Videojuego("Kerbal Space Program", 30, "Space Sim", "Intercept Games");

series[1].entregar();
series[3].entregar();
videojuegos[0].entregar();
videojuegos[4].entregar();

function contarEntregados(arr: Entregable[]): Entregable[] {

    let entregados: Entregable[] = arr.filter((item) => item.isEntregado());

    console.log("Hay " + entregados.length + " entregados");

    return entregados;
}

let seriesEntregadas = contarEntregados(series);
let videojuegosEntregados = contarEntregados(videojuegos);

function contarMax(arr: Entregable[], tipo: string): Entregable | undefined {

    if (arr.length === 0) {

        console.log("No hay " + tipo + "para comparar");

        return undefined;
    }

    let maximo = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i].compareTo(maximo) > 0) {
            maximo = arr[i];
        }
    }

    console.log("El " + tipo + " con más " + (tipo === "Videojuego" ? "horas estimadas" : "temporadas") + " es: ");
    console.log(maximo.toString());

    return maximo;
}

contarMax(videojuegos, "Videojuego");
contarMax(series, "Serie");