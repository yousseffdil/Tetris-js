# Juego del Tetris

Este proyecto es una implementación del clásico juego del Tetris utilizando la biblioteca p5.js. Permite jugar y disfrutar del famoso juego de encajar piezas en un tablero.

## Tabla de contenidos

- [Introducción](#introducción)
- [Tabla de cálculos](#tabla-de-cálculos)

## Introducción

El juego del Tetris es un videojuego de puzzle en el que el objetivo es manipular piezas de diferentes formas para que encajen perfectamente en un tablero. A medida que las piezas caen desde la parte superior del tablero, el jugador debe rotarlas y moverlas horizontalmente para completar líneas horizontales sin espacios. Una vez que se completa una línea, desaparece y el jugador recibe puntos.

El código proporcionado implementa el juego del Tetris utilizando la biblioteca p5.js, que facilita la creación de gráficos y la interacción con el usuario en el navegador. El juego consta de tres archivos principales:

- `main.js`: Contiene el código principal del juego, incluyendo la configuración del lienzo, la lógica del bucle de juego y el manejo de eventos del teclado.
- `Tablero.js`: Define la clase `Tablero`, que representa el tablero de juego y se encarga de almacenar y dibujar las piezas en el tablero.
- `Tetrimino.js`: Define la clase `Tetrimino`, que representa las piezas que caen y se pueden manipular en el juego. Incluye métodos para mover las piezas, girarlas y verificar colisiones.

El archivo `index.html` es la página HTML principal que carga los archivos JavaScript necesarios y muestra el lienzo del juego en el navegador.

## Tabla de cálculos

A continuación se muestra una descripción de las principales funciones y métodos utilizados en el código:

| Archivo/Clase    | Función/Método            | Descripción                                                                                   |
|------------------|---------------------------|-----------------------------------------------------------------------------------------------|
| main.js          | setup()                   | Configura el lienzo del juego, crea el tablero y las piezas iniciales.                          |
| main.js          | draw()                    | Dibuja el tablero y las piezas en cada cuadro del bucle de juego.                                |
| main.js          | KeyEventTetris()          | Maneja los eventos de teclado para mover, girar y acelerar las piezas.                           |
| Tablero.js       | Tablero()                 | Constructor de la clase Tablero. Crea la matriz para almacenar las piezas en el tablero.        |
| Tablero.js       | almacenarMinos()          | Almacena una pieza en el tablero y busca y borra las líneas completas.                           |
| Tablero.js       | buscarLineas()            | Busca las líneas completas en el tablero y las almacena en un array.                             |
| Tablero.js       | borrarLineas()            | Borra las líneas completas del tablero y desplaza las piezas hacia abajo.                        |
| Tablero.js       | cordenada()               | Convierte las coordenadas del tablero en coordenadas de píxeles en el lienzo.                   |
| Tablero.js       | dibujar()                 | Dibuja el tablero en el lienzo.                                                                |

## Diagrama de clases

![Diagrama_de_clases](http://www.plantuml.com/plantuml/dpng/XPH1ZzCm48Nl_HNMdbAW1wuLghQmFI3OsufhDR67hYjd9eoTi0NntqdSZ597YxWqyVl6zlFpfFSnWQIk2IiR84Rp17L0OVDxPSp6M0vTGn2tnbFAodSVReS171yj1WUp1cIV-MOOqisevUYjPzgQRsWJInORJnpteG6B18w7zVSYSFbm_Or9F9rskw7qhO6fIXuzZOLFED1nVgPr5ot8Lqy8iLflJS_UNG6BW8AG7xg9fxIxBRKiRhG1rKks_SvSydEjbdELytLt1YascRJ5QMOZVrOQifgUOYPkQi6jkPuqIqbBuaU80-BwZ3RffR0KnGsqeCUvUjpzEsoCxJ0GNcRNS8_oW8Bs6TJo33x_-j5v5FSAsjTmvb6kcGC2tH0HNvSpJbwMgM4iH9q-E4DAV11XATUs77pqJ6CBbEG1AGbFFLoYCIC5YwWKVmBg8Ixe_sxxCCLPi9WWUQibey-g7OFMYrXsn2HFxV0oVouNVHrFJJ59DzPLwwMow5NbxQKgsnQSgtfLIXGnBLTPkdm4JvF71kI4D1iLF7K17Cknny3MEt2lGOT72mFCJBVjsZ9OWP-5y0KlXnufvNujFgTiQBFPwT_MBCozFI5pz_xElDbiydEc-bPmZUKUoNLD-0i0)

