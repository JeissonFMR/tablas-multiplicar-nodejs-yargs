
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs-js')

console.clear();

//console.log(process.argv); //en consola

// const [, , arg3 = '5'] = process.argv;
// const [, base,] = arg3.split('=')


crearArchivo(argv.b, argv.l, argv.h)
    .then(crearArchivo => console.log(crearArchivo, 'creado'))
    .catch(err => (err));


