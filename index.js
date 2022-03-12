const discord = require("discord.js");
const client = new discord.Client({
    intents: 98303
});

client.once("ready", (bot) => {
    client.user.setPresence({activities: [{name: 'Bot exclusivo del servidor oficial de NetCat | Disponible muy pronto', type: "PLAYING"}], status: "idle"});
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
})

client.login(process.env.TOKEN);