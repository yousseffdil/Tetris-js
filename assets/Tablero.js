class Tablero {
    constructor() {
        this.columnas = 10;
        this.filas = 20;
        this.lado_celda = 25;
        this.ancho = this.columnas * this.lado_celda;
        this.alto = this.filas * this.lado_celda;
        this.posicion = createVector(margen, margen + this.lado_celda);


        this.minosAlmacenados = [];
        for (let fila = 0; fila < this.filas; fila++) {
            this.minosAlmacenados[fila] = [];
            for (let columna = 0; columna < this.columnas; columna++) {
                this.minosAlmacenados[fila].push("");

            }
        }
    }
    set almacenarMinos(tetrimino) {
        for (const pmino of tetrimino.mapaTablero) {
            this.minosAlmacenados[pmino.columna][pmino.fila] = tetrimino.nombre;
        }
    }

    cordenada(x, y) {
        return createVector(x, y).mult(this.lado_celda).add(this.posicion);
    }

    dibujar() {
        push();
        noStroke();
        for (let columna = 0; columna < this.columnas; columna++) {
            for (let fila = 0; fila < this.filas; fila++) {
                if ((columna + fila) % 2 == 0) {
                    fill("black")
                } else {
                    fill("#008")
                }

                let c = this.cordenada(columna, fila);
                rect(c.x, c.y, this.lado_celda);
            }
        }
        pop();
        this.dibujarminosAlmacenados();
    }

    dibujarminosAlmacenados() {
        push();
        for (let columna = 0; columna < this.columnas; columna++) {
            for (let fila = 0; fila < this.filas; fila++) {
                fill("lightgrey");

                if (this.minosAlmacenados[columna][fila]) {
                    Tetrimino.dibujarMino(createVector(columna, fila));
                }

            }
        }
        pop();
    }
}