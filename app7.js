// app7.js - Permitir al usuario ingresar los argumentos desde la línea de comandos

const { crearArchivo } = require('./helpers/multiplicar3');

console.clear();

// Capturamos los argumentos de la línea de comandos usando process.argv
const args = process.argv.slice(2);
const params = {};
args.forEach(arg => {
    const [key, value] = arg.split('=');
    params[key.replace('--', '')] = value;
});

// Extraemos la base y el limite de los parametros
const base = parseInt(params.base) || 6;
const limite = parseInt(params.limite) || 12;

console.log(`Base: ${base}, Limite: ${limite}`);

crearArchivo(base, limite)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));