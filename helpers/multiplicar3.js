const fs = require('fs');
const pdf = require('pdfkit');
const path = require('path');

/**
 * Ejercicio - Utilizando una función async para crear la tabla y exportar a PDF.
 */

const crearArchivo = async (base = 5, limite = 10) => {
    try {
        console.log('*************************');
        console.log('    Tabla del:', base);
        console.log('*************************');

        let salida = '';
        for (let i = 1; i <= limite; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;  // Cambiar "x" por "*"
        }

        console.log(salida);

        // Crear el PDF en la carpeta 'salida'
        const doc = new pdf();
        const dirPath = path.join(__dirname, '../salida');
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        const fileName = path.join(dirPath, `tabla-${base}.pdf`);
        const writeStream = fs.createWriteStream(fileName);

        doc.pipe(writeStream);
        doc.fontSize(16).text('*************************', { align: 'center' });  // Cambiar encabezado
        doc.fontSize(16).text(`Tabla de Multiplicar del ${base}`, { align: 'center' });
        doc.fontSize(16).text('*************************', { align: 'center' });  // Cambiar encabezado
        doc.moveDown();
        doc.fontSize(12).text(salida, { align: 'center' });
        doc.end();

        return new Promise((resolve, reject) => {
            writeStream.on('finish', () => resolve(fileName));
            writeStream.on('error', (err) => reject(err));
        });
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
