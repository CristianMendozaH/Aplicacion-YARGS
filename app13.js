/**
 * Ejercicio - Configuración de Yargs Independiente
 * Utilizará el multiplicar4.js que tendrá la opción
 * para aceptar de parámetro la bandera -l --listar
 */

/**
 * Se cortó toda la lógica de Yargs y se pasó a la carpeta que se creó llamada 
 * "config", dentro de config se creó un archivo llamado yargs.js, por lo tanto 
 * en este archivo app13.js se hace un require a yargs que está en la carpeta 
 * antes mencionada.
 */


const { crearArchivo: crearArchivoApp13 } = require('./helpers/multiplicar4');
const argvApp13 = require('./config/yargs');// Se requiere el archivo yargs.js que está en config
// Pero se iguala a un objeto llamado argv para que no cambie ninguna lógica

console.clear();
console.log(argvApp13);

crearArchivoApp13(argvApp13.b, argvApp13.l, argvApp13.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));

  /**
 * La aplicación en este punto hace lo siguiente:
 * - Crear la tabla del 66 y listarla: 
 *   node app12 --base=66 --listar
 *   node app12 -b 66 -l
 *
 * - Crear la tabla 66 sin imprimir en consola:
 *   node app13 -b 66
 *   node app13 --base=66
 */