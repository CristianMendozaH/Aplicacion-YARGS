// multiplicar.js
// helpers > multiplicar.js > crearArchivo

// Este archivo tiene la lógica para que funcione el archivo app4.js
const fs = require('fs');

/**
 * Se utiliza el módulo.exports para dar permiso a este archivo
 * de exportar crearArchivo hasta el final de este archivo.
 */

// Función que tiene por objeto crear la tabla de la base sugerida y
// por default imprimirá y generará la tabla del cinco, sino se ingresa el parámetro base
const crearArchivo = (base = 5) => {

    console.log('===================');
    console.log('    Tabla del:', base);
    console.log('===================');

    // Añadir el encabezado solo una vez al imprimir
    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    // Añadir el encabezado al archivo txt
    let salidaArchivo = '===================\n';
    salidaArchivo += `    Tabla del: ${base}\n`;
    salidaArchivo += '===================\n';
    salidaArchivo += salida;

    // Crear un archivo de texto en lugar de un archivo PDF
    const fileName = `tabla-${base}.txt`;
    fs.writeFile(fileName, salidaArchivo, (err) => {
        if (err) {
            console.error('Error al crear el archivo:', err);
        } else {
            console.log(`${fileName} creado`);
        }
    });
}

// module.exports es exclusivo de NODE no funciona del lado del cliente es decir el navegador
// En el navegador se utiliza el export
module.exports = {
    crearArchivo
} 