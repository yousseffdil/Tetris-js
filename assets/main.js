

// Funcion nativa de p5.js
const margen = 10;
let regulador_velocidad = 0;

function setup() {
    createCanvas(900, 600);
    tablero = new Tablero();
    CrearBasteTetrimino();
    tetrimino = new Tetrimino();
    resizeCanvas(
        tablero.ancho + 2 * margen,
        tablero.alto + 2 * margen + tablero.lado_celda
    );
}
function draw() {
    background("lightgrey");
    tablero.dibujar();
    tetrimino.dibujar();
    KeyEventTetris()
}

function KeyEventTetris() {
    if (millis() - regulador_velocidad < 50) {
        return;
    }
    regulador_velocidad = millis();
    if (keyIsDown(RIGHT_ARROW)) {
        tetrimino.moverDerecha();
    } if (keyIsDown(LEFT_ARROW)) {
        tetrimino.moverIzquierda();
    } if (keyIsDown(DOWN_ARROW)) {
        tetrimino.moverAbajo();
    } if (keyIsDown(UP_ARROW)) {
        tetrimino.girar();
    }
}