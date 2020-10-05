const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: "Nombre de la Ciudad de la que desea saber el Clima.",
        demand: true
    };

}).argv;

console.log(argv.direccion);

module.exports = {
    argv
}