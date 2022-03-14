var colors = require('colors');
var ncomando = "test";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        //message.channel.send("Todo en orden.");
        message.channel.send(`Leyendo el valor de $client.username: ${client.username}`);
    }
}
console.log(`Comando: ${ncomando}: OK`.green)