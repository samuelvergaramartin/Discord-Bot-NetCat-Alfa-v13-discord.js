var colors = require('colors');
const { existsSync } = require('fs');
const { waitForDebugger } = require('inspector');
var ncomando = "test";

//test-event-status-monitor
//const db = require('megadb')
//const estado = new db.crearDB('estadopersonalizado')
//const estadooff = 2;
//const estadoon = 4;
//const cambiarestado = 2;
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
        
    }
}
console.log(`Comando: ${ncomando}: OK`.green)
