require("dotenv").config();
const discord = require("discord.js");
const fs = require('fs');
const botprefix = require('./defaultprefix.json');
var prefix = botprefix.prefix;
const db = require('megadb')
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
    let estadoausente = "idle";
    client.user.setPresence({activities: [{name: 'Bot exclusivo del servidor oficial de NetCat | Disponible muy pronto', type: "PLAYING"}], status: `${estadoausente}`});
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
})

client.once("ready", (bot) => {
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
    //const wait = require("util").promisify(setTimeout)
    let estados = {
        estadoidle: "idle",
        estadodnd: "dnd"
    };
    setInterval(() => {
        for(let ponerestado in estados) {
            client.user.setPresence({activities: [{name: 'Bot exclusivo del servidor oficial de NetCat | Disponible muy pronto', type: "PLAYING"}], status: `${estados[ponerestado]}`});
            
        }
    }, 3000);
    
    
})
    //var encendida = 1;
    
    /*setInterval(() => {
        let estado1 = setInterval(() => client.user.setPresence({activities: [{name: 'Bot exclusivo del servidor oficial de NetCat | Disponible muy pronto', type: "PLAYING"}], status: "idle"}), 2000);
        setTimeout(() => { clearInterval(estado1); }, 3000);
        wait(1000)
        let estado2 = setInterval(() => client.user.setPresence({activities: [{name: 'Configurando...', type: "PLAYING"}], status: "dnd"}), 2000)
        setTimeout(() => { clearInterval(estado2); }, 3000);
    }, 12000)*/
    
    /*setInterval(() => {
        wait(2000)
        client.user.setPresence({activities: [{name: 'Bot exclusivo del servidor oficial de NetCat | Disponible muy pronto', type: "PLAYING"}], status: "idle"});
        wait(2000)
        client.user.setPresence({activities: [{name: 'Configurando...', type: "PLAYING"}], status: "dnd"});
        wait(2000)
    },3000);*/


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
