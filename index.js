require("dotenv").config();
const discord = require("discord.js");
const fs = require('fs');
const botprefix = require('./defaultprefix.json');
var prefix = botprefix.prefix;
const db = require("megadb")
const client = new discord.Client({
    intents: 98303
});

client.comandos = new discord.Collection();

let archivos = fs.readdirSync('./commands').filter((f) => f.endsWith('.js'))

for(var archi of archivos) {
    let comando = require("./commands/" + archi)
    client.comandos.set(comando.name, comando)
}

client.once("ready", (bot) => {
    client.user.setPresence({activities: [{name: 'Bot exclusivo del servidor oficial de NetCat | Disponible muy pronto', type: "PLAYING"}], status: "idle"});
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
})

client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return message.author.send("Error, no tengo permisos suficientes.").catch(()=>{ return;});

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    
    
     
     if(!message.content.startsWith(prefix)) return;
 let cmd = client.comandos.get(command)
    if(cmd) {
        return cmd.run(client, message, args, discord)
    }
})

client.login(process.env.TOKEN);
