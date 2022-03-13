var colors = require('colors');
var ncomando = "testhandler";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        message.channel.send("Hola! Pronto estaré disponible para una nueva gran aventura 😺!");
    }
}
console.log(`Comando: ${ncomando}: OK`.green)