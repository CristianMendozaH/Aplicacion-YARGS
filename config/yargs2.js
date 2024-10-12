const argvYargs2 = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar, debe ser un número entero positivo',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    describe: 'Muestra la tabla en consola de manera detallada',
    default: false,
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    describe: 'Define hasta qué número se multiplicará la base',
    default: 10,
  })
  .option('s', {
    alias: 'save',
    type: 'boolean',
    demandOption: false,
    describe: 'Guardar el resultado en un archivo adicional de texto (.txt)',
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || argv.b <= 0) {
      throw 'La base tiene que ser un número positivo';
    }
    if (argv.h && (isNaN(argv.h) || argv.h <= 0)) {
      throw 'El valor hasta tiene que ser un número positivo';
    }
    return true;
  })
  .argv;

module.exports = argvYargs2;