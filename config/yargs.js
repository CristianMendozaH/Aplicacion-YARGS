const argvYargs1 = require('yargs')
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

module.exports = argvYargs1;