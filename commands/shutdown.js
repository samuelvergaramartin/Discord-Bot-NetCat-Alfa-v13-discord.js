var colors = require('colors');
const { existsSync } = require('fs');
const { waitForDebugger } = require('inspector');
var ncomando = "shutdown";
//const db = require('megadb')
//const estado = new db.crearDB('estadopersonalizado')
//const estadooff = 2;
//const estadoon = 4;
//const cambiarestado = 2;
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args, discord) => {
       /* let sv = client.guilds.cache.get("900856291461824562")
        let invitación = message.guild.invites.fetch(sv);
        message.channel.send(`${invitación}`);
*/
        const wait = require("util").promisify(setTimeout)
       // await wait(5000)*/
        
        message.channel.send("Apagando bot...");
        await wait(1000)
        client.destroy()/*
        let sv = client.guilds.cache.get("900856291461824562")
        let x = sv.members.cache.get("911352430963347537")
        let estadopersonalizado = `${x.presence.status}`;
        let suestado = await estado.obtener(`${x.id}`)
        if(suestado === 2) {
            estado.sumar(`${x.id}`, cambiarestado);
            message.channel.send("Se ha activado la vigilancia de estado.");
            while(estadopersonalizado == `dnd`) {
                message.channel.send("Nivel 1")
                while(estadopersonalizado == `dnd`) {
                    message.channel.send("Nivel 2")
                    while(estadopersonalizado == `dnd`) {
                    message.channel.send("**:x: | ERROR:** `return;` is not detected!")
                    await wait(3000)
                    if(estadopersonalizado !== `dnd`) {
                        return;
                    }
                    await wait(2000)
                    }
                    /*message.channel.send(`Lectura de la variable $suestado : ${suestado}`)
                    if(suestado === 2) {
                        break;
                    }else{
                    message.channel.send("Lectura...")
                    await wait(2000)
                    }*//*
                }
            }
            message.channel.send("CHANGE DETECTED: BUCLE DETENIDO")
        }
        message.channel.send("**:x: | ERROR:** UNESPECTED EXIT 0")
        if(suestado === 4) {
            estado.restar(`${x.id}`, cambiarestado);
            message.channel.send("Se ha desactivado la vigilancia de estado.");
        }*/
       /* message.channel.send("Probando, probando, esperando 5 segundos...")
        await wait(5000)
        message.channel.send("Pasaron 5 segundos, esperando 2 segundos más...")
        await wait(2000)
        message.channel.send("Fin de la prueba del await wait, proceda a evaluar resultado.")
        /*message.channel.send("Probando, probando, esperando 5 segundos para el próximo mensaje...").setTimeout(() => {
            message.channel.send("Han pasado 5 segundos? De no ser así... ERROR!")
            setTimeout(5000)
        }, 5000)*/
        
       /* if(estadopersonalizado == `offline`) {
            
            
        }
       /* let y = 1
        while(y === 1){
            message.channel.send("Error: while(true) nunca terminará el bucle!")
            let estadopersonalizado = `${x.presence.status}`;
              while(estadopersonalizado == `offline`) {
                  let i = 2;
                  while(estadopersonalizado == `offline`){
                      while(i === 2){
                          message.channel.send("Si no repito este mensaje más de una vez entonces eso significa que el i++ ha funcionado.");
                          i++;
                          break;
                      }
                  }
              }
        }*/
       // setInterval(() => {
          /*  while(true){
                let valor = 2
                while(true) {
                    let valor2 = `${valor}`;
                    let estadopersonalizado = `${x.presence.status}`;
            while(estadopersonalizado == `offline`) {
                if(valor === 4) {
                   let valor2 = 2;
                    message.channel.send(`${x} está actualmente **OFFLINE**`);
                }else{
                    return;
                }
                
                break;
                }
                while(!estadopersonalizado == `offline`) {
                    if(valor === 2) {
                       let valor = 4;
                        message.channel.send(`${x} está actualmente **ONLINE**`);
                    }else{
                        return;
                    }
                    
                    break;
                    }
            }
            }*/
               // const suestado = estado.obtener(`${x.id}`)
               /*let suestado2 = `${suestado}`;
               let estadopersonalizado = `${x.presence.status}`;
                message.channel.send(`${estadopersonalizado}`)
                message.channel.send(`${suestado2}`)
                estado.sumar(`${x.id}`, 2)*/
                
                
                //message.channel.send(`${estado}`)
               // message.channel.send(`${suestado}`)
               
       // }, 3000)
       // message.channel.send("Hey! Me salí del setInterval()")
        /*setInterval(() => {
             if(!suestado) {
            
            if(estadopersonalizado == `offline`) {
                estado.set(`${x.id}`, estadooff)
                message.channel.send(`${x} está actualmente **OFFLINE**`);
               // message.channel.send("Lectura, hasta aquí se lee el código")
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
                        message.channel.send(`${estadopersonalizado}`)
                        message.channel.send(`${suestado}`)
                        message.channel.send(`${estado}`)
                    }
                }
            }
        }, 5000)
       
        */
        
       /* message.channel.send(`Leyendo el valor de la variable declarada 'x': ${x}`)
        message.channel.send(`Leyendo el valor de $x.presence: ${x.presence.status}`)*/
        //message.channel.send(`Leyendo el valor de $client.username: ${client.username}`);*/
        /*setInterval(() => {
            
        }, 5000)*/

    }
}
console.log(`Comando: ${ncomando}: OK`.green)