

// Funcion nativa de p5.js
const margen = 10;
let regulador_velocidad = 0;
let regulador_de_caida = 0;

setInterval(() => {
    if (millis() - regulador_de_caida < 200) {
        return;
    }
    regulador_de_caida = millis()
    tetrimino.moverAbajo();
}, 400);

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
    if (millis() - regulador_velocidad < 150) {
        return;
    }
    regulador_velocidad = millis();
    if (keyIsDown(RIGHT_ARROW)) {
        tetrimino.moverDerecha();
        regulador_de_caida = millis()

    } if (keyIsDown(LEFT_ARROW)) {
        tetrimino.moverIzquierda();
        regulador_de_caida = millis()

    } if (keyIsDown(DOWN_ARROW)) {
        tetrimino.moverAbajo();
        regulador_de_caida = millis()
    } if (keyIsDown(UP_ARROW)) {
        tetrimino.girar();
        regulador_de_caida = millis()
    }
}