var colors = require('colors');
const db = require('megadb')
const estado = new db.crearDB('estadoactual')
const suestado = await estado.obtener(`${x.id}`)
var ncomando = "test";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
        message.channel.send("Se ha activado la vigilancia de estado: Cuando te desconectes, lo diré, y cuando te vuelvas a conectar lo volveré a decir")

        //message.channel.send("Todo en orden.");
        let sv = client.guilds.cache.get("900856291461824562")
        let x = sv.members.cache.get("911352430963347537")
      //  message.channel.send(`Leyendo el valor de la variable declarada 'x': ${x}`)
       // message.channel.send(`Leyendo el valor de $x.presence: ${x.presence.status}`)
        let estadopersonalizado = `${x.presence.status}`
       /* if(estadopersonalizado == "dnd") return message.channel.send(`Si ${x} fuera un bot, ahora mismo su estado sería: **ONLINE**.`);
        if(estadopersonalizado == "idle") return message.channel.send(`Si ${x} fuera un bot, ahora mismo su estado sería: **ONLINE**.`);
        if(estadopersonalizado == "online") return message.channel.send(`Si ${x} fuera un bot, ahora mismo su estado sería: **ONLINE**.`);
        if(estadopersonalizado == "offline") return message.channel.send(`Si ${x} fuera un bot, ahora mismo su estado sería: **OFFLINE**.`);
        
        //message.channel.send(`Leyendo el valor de $client.username: ${client.username}`);*/
        
        setInterval(() => {
            
            /*if(!suestado) {
                estado.set(`${x.id}`, 0)
                if(!estadopersonalizado == "offline") {
                    estado.sumar(`${x.id}`, 1)
                }
            }*/
            if(suestado) {
                if(estadopersonalizado == "offline") {
                    if(suestado == 0) return;
                    if(suestado == 1) {
                        estado.restar(`${x.id}`, 1)
                        message.channel.send(`El usuario ${x} está actualmente **OFFLINE**`)
                    }
                }
                if(!estadopersonalizado == "offline") {
                    if(suestado == 1) return;
                    if(suestado == 0) {
                        estado.sumar(`${x.id}`, 1)
                        message.channel.send(`El usuario ${x} está actualmente **ONLINE**`)
                    }
                }
            }
        }, 5000)
    }
}
console.log(`Comando: ${ncomando}: OK`.green)