const argv = require('./config/yargs').argv;
const color = require('colors/safe');
const { crearArchivo, listar } = require('./Multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(arch => console.log(`Archivo creado:`, color.green(arch))).catch((err) => console.log(err));
        break;
    default:
        console.log('comando no reconocido');

}


// let parametro = argV[2];
// let base = parametro.split('=')[1];

console.log(argv);

//console.log(base);