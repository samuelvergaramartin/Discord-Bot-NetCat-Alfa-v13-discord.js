require("dotenv").config();
const discord = require("discord.js");
//const { create } = require('sourcebin')
const fs = require('fs');
//const ms = require('ms');
const botprefix = require('./defaultprefix.json');
var prefix = botprefix.prefix;
const db = require('megadb');
const { waitForDebugger } = require("inspector");
const client = new discord.Client({
    intents: 98303
});

client.comandos = new discord.Collection();

let archivos = fs.readdirSync('./commands').filter((f) => f.endsWith('.js'))

for(var archi of archivos) {
    let comando = require("./commands/" + archi)
    client.comandos.set(comando.name, comando)
}

let archivos2 = fs.readdirSync('./commands/dev').filter((f) => f.endsWith('.js'))

for(var archi2 of archivos2) {
    let comando = require("./commands/dev/" + archi2)
    client.comandos.set(comando.name, comando)
}

client.once("ready", (bot) => {
    let estadodnd = "idle";
    client.user.setPresence({activities: [{name: 'Trabajando en NetCat Alfa...', type: "PLAYING"}], status: `${estadodnd}`});
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
})
//📡Coneccting to NetCat Beta...📡

client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    
    
     
     if(!message.content.startsWith(prefix)) return;
     if(!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return message.author.send("Error, no tengo permisos suficientes.").catch(()=>{ return;});
     if(message.author.id !== "911352430963347537") return message.channel.send("**:x: | PERMISSION_DENIED :** No tienes permiso para los usar comandos de este bot.\nPersonal autorizado: Sam170703#6466")
 let cmd = client.comandos.get(command)
    if(cmd) {
        return cmd.run(client, message, args, discord)
    }
})

client.login(process.env.TOKEN);
