module.exports = {
    name: "hola",
    run: async (client, message, args, discord) => {
        message.channel.send("Hola!")
    }
}