const centrarTexto = (texto, anchoConsola) => {
    const espacio = Math.max(0, Math.floor((anchoConsola - texto.length) / 2));
    return ' '.repeat(espacio) + texto;
};

let base = 6;

const tabla = (base = 10) => {
    const anchoConsola = 40;
    let resultado = '';
    resultado += '=========================================\n';
    resultado += `${centrarTexto(`Tabla del: ${base}`, anchoConsola)}\n`;
    resultado += '=========================================\n';

    for (let i = 1; i <= 10; i++) {
        const linea = `${base} x ${i} = ${base * i}`;
        resultado += `${centrarTexto(linea, anchoConsola)}\n`;
    }
    return resultado;
};

console.log(tabla(base));