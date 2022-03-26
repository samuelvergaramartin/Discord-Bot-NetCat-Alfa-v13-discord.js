var colors = require('colors');
const { existsSync } = require('fs');
const { waitForDebugger } = require('inspector');
var ncomando = "shutdown";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
      
       // const wait = require("util").promisify(setTimeout)
       // await wait(5000)
        
        message.channel.send("Apagando bot...");
        //await wait(1000)
        client.destroy()
        

    }
}
console.log(`Comando: ${ncomando}: OK`.green)
