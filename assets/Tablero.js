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
            if (pmino.y < 0) {
                tablero = new Tablero;
                tetrimino = new Tetrimino;

            }
            this.minosAlmacenados[pmino.x][pmino.y] = tetrimino.nombre;
        }
        this.buscarLineas();
    }

    buscarLineas(){
        let lineas = [];
        for (let fila = this.filas - 1; fila >= 0; fila--) {
            let agregar = true;

            for (let columna = 0; columna < this.columnas; columna++) {
                if(!this.minosAlmacenados[columna][fila]){
                    agregar = false;
                    break;
                }
            }
            if(agregar){
                lineas.push(fila)
            }
        }
        this.borrarLineas(lineas);

    }


    borrarLineas(lineas) {
        for (const linea of lineas) {
            for (let fila = linea; fila >= 0; fila--) {
                for (let columna = 0; columna < this.columnas; columna++) {
                    if(fila == 0){
                        this.minosAlmacenados[columna][fila]= "";
                        continue
                    }
                    this.minosAlmacenados[columna][fila] = this.minosAlmacenados[columna][fila-1]
                }
            }
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
                let nombreMino = this.minosAlmacenados[columna][fila];
                if (nombreMino) {
                    fill(tetriminosBase[nombreMino].color);
                    Tetrimino.dibujarMino(this.cordenada(columna, fila));
                }

            }
        }
        pop();
    }
}