var colors = require('colors');
var ncomando = "test";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
        //message.channel.send("Todo en orden.");
        /*let sv = client.guilds.cache.get("900856291461824562")
        let x = sv.members.cache.get("911352430963347537")
        message.channel.send(`Leyendo el valor de la variable declarada 'x': ${x}`)
        message.channel.send(`Leyendo el valor de $x.presence: ${x.presence.status}`)
        //message.channel.send(`Leyendo el valor de $client.username: ${client.username}`);*/
        /*setInterval(() => {
            message.channel.send("Contador: 5 segundos + repetir, blucle infinito....")
        }, 5000)*/
    }
}
console.log(`Comando: ${ncomando}: OK`.green)