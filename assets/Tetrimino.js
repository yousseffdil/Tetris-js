
function CrearBasteTetrimino() {

    tetriminosBase = {
        "Z": {
            color: "red",
            mapa: [
                createVector(),
                createVector(-1, -1),
                createVector(0, -1),
                createVector(1, 0)
            ]
        },
        "S": {
            color: "green",
            mapa: [
                createVector(),
                createVector(1, -1),
                createVector(0, -1),
                createVector(-1, 0)
            ]
        },
        "J": {
            color: "orange",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(-1, -1),
                createVector(0, 0),
                createVector(1, 0),
            ]
        },
        "L": {
            color: "dodgerblue",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(1, -1),
                createVector(1, 0),
            ]
        },
        "T": {
            color: "magenta",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(1, 0),
                createVector(0, -1),
            ]
        },
        "O": {
            color: "yellow",
            mapa: [
                createVector(),
                createVector(0, -1),
                createVector(1, -1),
                createVector(1, 0),
            ]
        },
        "I": {
            color: "cyan",
            mapa: [
                createVector(),
                createVector(-1, 0),
                createVector(1, 0),
                createVector(2, 0),
            ]
        },
    }
}

class Tetrimino {
    constructor(nombre = random(["Z", "S", "J", "L", "T", "O", "I"])) {
        this.nombre = nombre;
        this.tetriminosBase = tetriminosBase[nombre]
        this.color = this.tetriminosBase.color;
        this.mapa = []

        for (const pmino of this.tetriminosBase.mapa) {
            this.mapa.push(pmino.copy());
        }

        this.posicion = createVector(int(tablero.columnas / 2), 0)
    }

    moverDerecha() {
        this.posicion.x++;
        if (this.movimientoError) {
            this.moverIzquierda()
        }
    }
    moverIzquierda() {
        this.posicion.x--;
        if (this.movimientoError) {
            this.moverDerecha()
        }
    }
    moverAbajo() {
        this.posicion.y++;
        if (this.movimientoError) {
            this.moverArriba();
            tablero.almacenarMinos = this
            tetrimino = new Tetrimino;

        }
    }
    moverArriba() {
        this.posicion.y--;

    }

    girar() {
        for (const pmio of this.mapa) {
            pmio.set(pmio.y, -pmio.x)
        }
    }
    desgirar() {
        for (const pmio of this.mapa) {
            pmio.set(-pmio.y, -pmio.x)
        }
    }
    get movimientoError() {
        let salio = !this.DentroTablero;
        return salio;
    }

    get DentroTablero() {
        for (const pmino of this.mapaTablero) {
            if (pmino.x < 0) {
                return false;
            }
            if (pmino.x >= tablero.columnas) {
                return false;
            }
            if (pmino.y >= tablero.filas) {
                return false;
            }

        }
        return true;
    }

    get mapaTablero() {
        let retorno = [];
        for (const pmino of this.mapa) {
            let copy = pmino.copy().add(this.posicion);
            retorno.push(copy)
        }
        return retorno;
    }

    get mapaCanvas() {
        let retorno = [];
        for (const pmino of this.mapa) {
            let copy = pmino.copy().add(this.posicion);
            retorno.push(tablero.cordenada(copy.x, copy.y))
        }
        return retorno;
    }

    dibujar() {
        push();
        fill(this.color);
        for (const pmino of this.mapaCanvas) {

            Tetrimino.dibujarMino(pmino);
        }
        pop();
    }
    static dibujarMino(pmino) {

        rect(pmino.x, pmino.y, tablero.lado_celda);
        push();
        noStroke();
        fill(255, 255, 255, 90)
        beginShape();
        vertex(pmino.x, pmino.y)
        vertex(pmino.x + tablero.lado_celda, pmino.y)
        vertex(pmino.x + tablero.lado_celda, pmino.y + tablero.lado_celda)
        endShape(CLOSE);

        beginShape();
        fill(0, 0, 0, 90)
        vertex(pmino.x, pmino.y)
        vertex(pmino.x, pmino.y + tablero.lado_celda)
        vertex(pmino.x + tablero.lado_celda, pmino.y + tablero.lado_celda)
        endShape(CLOSE);
        pop();
    }
}