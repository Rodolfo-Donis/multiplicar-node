const fs = require('fs');
const color = require('colors');
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/Tabla-${base}.txt`);
        })
    });
}

//function listar

let listar = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base*i}`.green);
    }

}

module.exports = {
    crearArchivo,
    listar
}