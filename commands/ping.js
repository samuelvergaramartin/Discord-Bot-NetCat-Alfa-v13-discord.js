module.exports = {
  name: "ping",
  run: async (client, message, args) => {
<<<<<<< HEAD
    message.channel.send("Midiendo latencia...")
        const time = Date.now()
        message.channel.send("Bip...bop...bip...🤖").then(msg => {
            let tiempoTotal = time - Date.now()
            var resultado = Math.abs(tiempoTotal);
            msg.edit("`Discord API:` " +client.ws.ping+ " ms\n`Tiempo de respuesta del bot:` " +resultado+ " ms")
        })
=======
    var t1 = Date.now();
    message.channel.send("Midiendo latencia...")
    message.channel.send("Calculando...").then((msg)=> {
      var t2 = Date.now();
      let restar = t1 - t2;
      let latbot = Math.abs(restar);
      msg.edit("**Tiempo de respuesta del bot**:" +latbot+" ms\n**Discord API**: "  +client.ws.ping+" ms")
    })
    
>>>>>>> c80937d126148e7ea03ad38a822a036c3d3a4490
  }
}
