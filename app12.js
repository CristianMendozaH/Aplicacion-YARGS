/**
 * Ejercicio - Agregar opción -l o --listar
 * Utilizará el multiplicar4.js que tendrá la opción
 * para aceptar de parámetro la bandera -l o --listar
 * listar sirve para imprimir en consola, si no se elige entonces
 * solo creará el archivo.
 */



const { crearArchivo } = require('./helpers/multiplicar4');
const argv12 = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    describe: 'Muestra la tabla en consola',
    default: false,
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    describe: 'Define hasta qué número se multiplicará la base',
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    if (argv.h && isNaN(argv.h)) {
      throw 'El valor hasta tiene que ser un número';
    }
    return true;
  })
  .argv;

console.clear();
console.log(argv12);

crearArchivo(argv12.b, argv12.l, argv12.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));

  /**
 * La aplicación en este punto hace lo siguiente:
 * - Crear la tabla del 66 y listarla: 
 *   node app12 --base=66 --listar
 *   node app12 -b 66 -l
 *
 * - Crear la tabla 66 sin imprimir en consola:
 *   node app12 -b 66
 *   node app12 --base=66
 */
