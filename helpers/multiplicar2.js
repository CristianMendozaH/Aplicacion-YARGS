// Ejercicio - Conversión de función a Promesas
// Acá se utiliza el archivo app5.js
const fs = require('fs');

const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('===================');
            console.log('    Tabla del:', base);
            console.log('===================');

            let salida = '===================\n';
            salida += `    Tabla del: ${base}\n`;
            salida += '===================\n\n';

            for (let i = 1; i <= 10; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
            }

            // Imprimir la salida en la consola
            console.log(salida);

            // Crear el archivo TXT
            const fileName = `tabla-${base}.txt`;
            fs.writeFile(fileName, salida, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(fileName);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    crearArchivo
}