// app6.js

/**
 * Ejercicio - Conversión a función promesa a Async en multiplicar3.js
 */

const { crearArchivo } = require('./helpers/multiplicar3');

console.clear();

const base = 2;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));