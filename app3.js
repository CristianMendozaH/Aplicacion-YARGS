const fs = require('fs');

const base = 17;
let salida = '';

console.clear();
console.log('===================');
console.log(`   Tabla del: ${base}     `);
console.log('===================');

salida += '===================\n';
salida += `   Tabla del: ${base}     \n`;
salida += '===================\n';

for (let i = 1; i <= 10; i++) {
  const line = `${base} x ${i} = ${base * i}`;
  console.log(line);
  salida += line + '\n';
}

// Crear el archivo .txt
fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`tabla-${base}.txt creado con writeFileSync`);