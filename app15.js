const { crearArchivo: crearArchivoApp15 } = require('./helpers/multiplicar4');
const colorsApp15 = require('colors');
const argvApp15 = require('./config/yargs2');

console.clear();
console.log(argvApp15);

crearArchivoApp15(argvApp15.b, argvApp15.l, argvApp15.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
  .catch((err) => console.log(err));

  /**
 * Tarea: Modificar la aplicación para que acepte otra bandera llamada --hasta o -h
 * 1- Arregle el problema de los colores en el archivo de texto
 * 2- Agregar --hasta o -h para decir hasta qué tabla llegará la aplicación
 * 
 * Ejemplo: node app16 --base=1 --hasta=10 -l
 * 
 * Da como resultado el despliegue en consola de las tablas del hasta el 10 en consola
 * y también existirá un archivo que diga tabla-1-hasta-10.txt
 * 
 * Las tablas se deben desplegar de una forma agradable y coherente.
 */
