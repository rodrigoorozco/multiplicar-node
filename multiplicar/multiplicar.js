//Requires 
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject('El valor introducido no es un numero');
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        };

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                return reject(err)
            else
                console.log('The file has been saved!');
        });
    })
}

let listarTabla = (base, limite) => {
    console.log(`=================`);
    console.log(`=======Tabla del ${base}==========`.red);
    console.log(`=================`);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} x ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}