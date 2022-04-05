module.exports = {
  name: "ping",
  run: async (client, message, args) => {
    var t1 = Date.now();
    message.channel.send("Midiendo latencia...")
    message.channel.send("Calculando...").then((msg)=> {
      var t2 = Date.now();
      let restar = t1 - t2;
      let latbot = Math.abs(restar);
      msg.edit("**Tiempo de respuesta del bot**:" +latbot+" ms\n**Discord API**: "  +client.ws.ping+" ms")
    })
    
  }
}
