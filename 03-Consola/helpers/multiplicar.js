const fs = require('fs')

const crearArchivo = async (base, listar, fin_tabla) => {
    try {


        let salida = ''

        for (let i = 1; i <= fin_tabla; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar === true) {
            console.log("=============================");
            console.log("TABLA DEL NUMERO: ", base);
            console.log("=============================");
            console.log(salida);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla del numero ${base} `;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}