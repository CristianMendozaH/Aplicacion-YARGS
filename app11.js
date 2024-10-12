/**
 * Ejercicio - operando la aplicación con yargs inicial
 * Acá se tienen configurado que se puede capturar -b o --base y que se pueda
 * crear la tabla deseada en un archivo mediante peticiones en consola
 * por ejemplo node app11 --base=10 esto crea el archivo de la tabla del 10
 * Dando inicio al uso del paquete yargs
 */

// Utiliza la versión de multiplicar3.js que se encuentra en helpers
const { crearArchivo } = require('./helpers/multiplicar3');
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  })
  .argv;

console.clear();

console.log(argv);

crearArchivo(argv.b)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));

  /**
 * Uso de yargs, ver el resultado de escribir en consola
 * node app11 -b 17
 * node app11 --base=17
 */
