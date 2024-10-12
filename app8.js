//Ejercicio - crear una tabla desde línea de comandos
//Ejemplo escribir en la línea de comandos node app8 --base=19

const { crearArchivo } = require('./helpers/multiplicar3');

console.clear();

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

//Esta desestructuración está capturando por posición eso es un inconveniente
//Se puede comprobar sin argumentos node app8

//Esto tiene muchos inconvenientes ya que acepta cualquier tipo de parámetros.
//Por ejemplo node app8 --limite=40 --base=10 , hace la tabla del 40 por ejemplo
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

    //Para correr el app8 es necesario ingresar lo siguiente node app8 --base=12 en consola.
//Por ejemplo si utilizamos en línea de comandos node --help tengo un manual completo de ayuda
//Esto lo podemos aplicar para hacer un manual para el uso de nuestra propia aplicación
//Todo esto es bueno pensarlo para validar nuestra aplicación
