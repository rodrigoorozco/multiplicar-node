const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(archivo);
        }).catch(err => {
            console.log(err);
        })
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        break;
}