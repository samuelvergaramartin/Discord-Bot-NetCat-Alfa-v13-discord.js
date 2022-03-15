var colors = require('colors');
var ncomando = "test";
const db = require('megadb`)
const estado = new db.crearDB('estadopersonalizado')
const estadooff = 2;
const estadoon = 4;
const cambiarestado = 2;
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
        //message.channel.send("Todo en orden.");
        let sv = client.guilds.cache.get("900856291461824562")
        let x = sv.members.cache.get("911352430963347537")
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
    }
}
console.log(`Comando: ${ncomando}: OK`.green)
