var colors = require('colors');
const db = require('megadb')
const estado = new db.crearDB('estadoactual')
const suestado = await estado.obtener(`${x.id}`)
var ncomando = "test";
const db = require('megadb`)
const estado = new db.crearDB('estadopersonalizado')
const estadooff = 2;
const estadoon = 4;
const cambiarestado = 2;
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
        message.channel.send("Se ha activado la vigilancia de estado: Cuando te desconectes, lo diré, y cuando te vuelvas a conectar lo volveré a decir")

        //message.channel.send("Todo en orden.");
        let sv = client.guilds.cache.get("900856291461824562")
        let x = sv.members.cache.get("911352430963347537")
<<<<<<< HEAD
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
=======
        let estadopersonalizado = `${x.presence.status}`;
        const suestado = await estado.obtener(`${x.id}`)
        setInterval(() => {
             if(!suestado) {
            
            if(estadopersonalizado == `offline`) {
                estado.set(`${x.id}`, estadooff)
                message.channel.send(`${x} está actualmente **OFFLINE**`);
            }
            if(!estadopersonalizado == `offline`) {
                estado.set(`${x.id}`, estadoon)
                message.channel.send(`${x} está actualmente **ONLINE**`);
                //Me he dado cuenta del problema, no me cojía lo de sumar o restar 1 porque 1 o 0 son booleanos, tengo que declarar los valores de suma o resta como booleanos, o bien cambiarlos por un 2 o algo así. 1= TRUE, 0 = FALSE
                }
            }else{
                if(!estadopersonalizado == `offline`) {
                    if(suestado == `${estadooff}`) {
                        estado.sumar(`${x.id}`, cambiarestado)
                        message.channel.send(`${x} está actualmente **ONLINE**`);
                    }
                    if(suestado == `${estadoon}`) return;
                }else {
                    if(suestado == `${estadoon}`) {
                        estado.restar(`${x.id}`, cambiarestado)
                        message.channel.send(`${x} está actualmente **OFFLINE**`);
                    }
                }
            }
        }, 5000)
       
        
        
       /* message.channel.send(`Leyendo el valor de la variable declarada 'x': ${x}`)
        message.channel.send(`Leyendo el valor de $x.presence: ${x.presence.status}`)*/
        //message.channel.send(`Leyendo el valor de $client.username: ${client.username}`);*/
        /*setInterval(() => {
            
        }, 5000)*/
>>>>>>> 35d7de60e23c2c8d5ee0361d933cbe3d3b83faf7
    }
}
console.log(`Comando: ${ncomando}: OK`.green)
