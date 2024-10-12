/**
 * Ejercicio - configurando Yargs
 * Ver la documentación de Yargs en https://yargs.js.org/
 * Buscar en la página el uso de .option(key, [opt])
 * var argv = require('yargs/yargs')(process.argv.slice(2))
 * .option('f', {
 *   alias: 'file',
 *   demandOption: true,
 *   default: '/etc/passwd',
 *   describe: 'x marks the spot',
 *   type: 'string'
 * })
 * .argv
 *
 * Dando inicio al uso del paquete yargs
 */
const { crearArchivo } = require('./helpers/multiplicar3');
const yargs = require('yargs');

const argv = yargs
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'limite',
    type: 'number',
    default: 10,
    describe: 'Hasta qué número quieres multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    if (isNaN(argv.l)) {
      throw 'El límite tiene que ser un número';
    }
    return true;
  })
  .argv;

console.clear();

console.log('Argumentos internos de Node.js:', process.argv);
console.log('Argumentos de yargs:', argv);
console.log('Base:', argv.b, '| Límite:', argv.l);

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(`Archivo ${nombreArchivo} creado con éxito`))
  .catch(err => console.log(err));


  /**
 * Uso de yargs, ver el resultado de escribir en consola
 * node app10 --base=5 --limite=10
 * node app10 --base=abc
 * node app10 -b 5
 * node app10
 *
 * Documentar qué pasa en cada caso de lo planteado en las líneas anteriores
 */
