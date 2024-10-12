/**
 * Ejercicio - Para separar la lógica de la aplicación con 
 * el archivo principal del mismo.
 *
 * Acá de manda a llamar la desestructuración de multiplicar.js
 * que ahora ya tiene permisos para importar crearArchivo
 */

const { crearArchivo } = require('./helpers/multiplicar');

/**
 * Se creo la carpeta helpers para crear toda la lógica de la aplicación dentro 
 * de el archivo multiplicar.js
 */

console.clear();

const base = 1

crearArchivo(base);
