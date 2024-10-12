const fs = require('fs');
const colors = require('colors');
const PDFDocument = require('pdfkit'); // Agregamos la librería PDFKit para generar PDFs
const path = require('path');

/**
 * Se utiliza el module.exports para dar permiso a este archivo
 * de exportar crearArchivo hasta el final de este archivo.
 */

/**
 * Se agregó a esta función el parámetro listar=false por si el usuario
 * no envía la l se sobreentiende que no quiere imprimir.
 */
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    // Crear la carpeta 'salida' en la ruta principal si no existe
    const outputDir = path.join(process.cwd(), 'salida');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const fileName = path.join(outputDir, `tabla-${base}-hasta-${hasta}.pdf`);
    let doc = new PDFDocument({ margin: 50 });

    // Generar PDF con la tabla de multiplicar
    doc.pipe(fs.createWriteStream(fileName));
    doc.fontSize(20).fillColor('red').text('*************************', { align: 'center' }); // Cambiado a rojo
    doc.fontSize(20).fillColor('red').text(`Tabla del: ${base}`, { align: 'center' });
    doc.fontSize(20).fillColor('red').text('*************************', { align: 'center' }); // Cambiado a rojo
    doc.moveDown();

    // Genera la tabla de lo que se envíe en la base del 1 al "hasta", centrada
    for (let i = 1; i <= hasta; i++) {
      const line = `${base} * ${i} = ${base * i}`;  // Cambiado de "x" a "*"
      doc.fontSize(16).fillColor('black').text(line, { align: 'center' });
      doc.moveDown(0.8); // Ajuste del espacio entre las líneas para mejorar la visibilidad
    }
    doc.end();

    // Si viene el parámetro listar, entonces imprime en consola
    if (listar) {
      console.log('*************************'.red);  // Cambiado a rojo
      console.log('  Tabla del:'.red, colors.blue(base));
      console.log('*************************'.red);  // Cambiado a rojo
      for (let i = 1; i <= hasta; i++) {
        console.log(`${base} ${'*'.red} ${i} ${'='.red} ${base * i}`);  // Cambiado de "x" a "*"
      }
    }

    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
