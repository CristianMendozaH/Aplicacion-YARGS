/**
 * Ejercicio - Conversión a función promesa en multiplicar2.js
 * ------------- MEJORANDO EL CÓDIGO OPCIÓN 1 -------------
 * Acá se manda a llamar la desestructuración de multiplicar2.js
 * que ahora ya tiene permisos para importar crearArchivo
 * acá se transformó en Promesas las funciones flecha.
 */

const { crearArchivo } = require('./helpers/multiplicar2');

/**
 * Se creó la carpeta helpers para crear toda la lógica
 * de la aplicación en un archivo dentro de esta carpeta llamado
 * multiplicar.js
 */

console.clear();

const base = 31;

/**
 * Cuando se utiliza el .then sirve para ejecutar el resolve de la Promesa (éxito)
 * Cuando se utiliza el .catch sirve para ejecutar el reject de la Promesa (error)
 */

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));