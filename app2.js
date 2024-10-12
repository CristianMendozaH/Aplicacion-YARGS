// Librería interna
const fs = require('fs');

const base = 16;
let salida = '';

console.clear();
console.log('===================');
console.log(`     Tabla del: ${base}     `);
console.log('===================');

// Agregar encabezado al contenido
salida += '===================\n';
salida += `     Tabla del: ${base}     \n`;
salida += '===================\n\n';

for (let i = 1; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i}\n`;
  console.log(`${base} x ${i} = ${base * i}`); // Mostrar cada resultado en consola
}

// Crear el archivo .txt
const txtPath = `tabla-${base}.txt`;

// Escribir el contenido en el archivo de texto
fs.writeFileSync(txtPath, salida);

console.log(`tabla-${base}.txt creado correctamente`);