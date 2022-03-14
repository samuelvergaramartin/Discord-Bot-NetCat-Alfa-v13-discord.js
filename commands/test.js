var colors = require('colors');
var ncomando = "test";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        message.channel.send("Todo en orden.");
    }
}
console.log(`Comando: ${ncomando}: OK`.green)