const Discord = require("discord.js");
const { create } = require('sourcebin')
<<<<<<<< HEAD:commands/eval.js
const { Client, MessageEmbed, Intents } = require("discord.js");
//const mega = require('megadb'), quick = require('quick.db');
const ms = require('ms')
========
//const { Client, MessageEmbed, Intents } = require("discord.js");
//const mega = require('megadb'), quick = require('quick.db');
//const ms = require('ms')
>>>>>>>> c80937d126148e7ea03ad38a822a036c3d3a4490:commands/dev/test-eval.js

var colors = require('colors');
var ncomando = "eval";
module.exports = {
<<<<<<<< HEAD:commands/eval.js
    name: `${ncomando}`,
    run: async (client, message, args) => {
        if(message.author.id !== "911352430963347537") return message.channel.send("**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo el mi creador puede usar este comando.\nPersonal autorizado: Sam170703#6466");
	if(!args[0]) return message.channel.send(':x: | Debes escribir algo para evaluar.\nSintaxis: `nc/eval <código a evaluar>`\nPor ejemplo: `nc/eval` message.author.id');
========
  name: "eval",
  alias: ["ev"],
  run: async (client, message, args) => {

        if(message.author.id !== "911352430963347537") return message.channel.send("**:x: | PERMISSION_DENIED :** No tienes permiso para los usar comandos de este bot.\nPersonal autorizado: Sam170703#6466")
	if(!args[0]) return message.channel.send(':aviso:925769011822727209| Pon algo para evaluar >.<');
>>>>>>>> c80937d126148e7ea03ad38a822a036c3d3a4490:commands/dev/test-eval.js

	//Eval
	async function enviar(mensaje) {
		return await message.channel.send(mensaje);
	};

	async function exec(codigo) {
		return await require('child_process').execSync(codigo);
	};

	function mayuscula(string) {
		string = string.replace(/[^a-z]/gi, '');
		return string[0].toUpperCase() + string.slice(1);
	};

	let tiempo1 = Date.now();
//:stopwatch:
	const edit = new Discord.MessageEmbed()
		.setDescription(':stopwatch: Evaluando...')
		.setColor('#7289DA');
	message.channel.send({ embeds: [edit] }).then(async pito => {
		try {
			let code = args.join(' ');
			let evalued = await eval(code);
			let tipo = typeof evalued || 'Tipo no encontrado.';
			if(typeof evalued !== 'string')
				evalued = require('util').inspect(evalued, {
					depth: 0,
					maxStringLength: 2000
				});
			let txt = '' + evalued;

			if(txt.length >= 1024) {
				create([
					{
						content: `- - - Eval - - -\n\n${txt.replace(client.token, 'Wow, un token').replace(/(bot)/g, 'bot')}`,
						language: 'javascript'
					},
				],
				{
					title: 'Eval',
					description: 'El eval es muy largo'
				}).then(owo => {
					const embed = new Discord.MessageEmbed()
					.addField(':inbox_tray: Entrada', `\`\`\`js\n${code.slice(0, 748)}\n\`\`\``)
					.addField(
						':outbox_tray: Salida',
						`\`El codigo es muy largo, link:\` ${owo.url}`
					)
					.addField(
						':file_folder: Tipo',
						`\`\`\`js\n${mayuscula(tipo)}\n\`\`\``,
						true
					)
					.addField(
						':stopwatch: Tiempo',
						`\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``,
						true
					)
					.setColor('#7289DA');
					
pito.edit({ embeds: [embed] });
				});
			} else {
				const embed = new Discord.MessageEmbed()
					.addField(':inbox_tray: Entrada', `\`\`\`js\n${code.slice(0, 748)}\n\`\`\``)
					.addField(':outbox_tray: Salida', `\`\`\`js\n${txt.replace(client.token, '🔴|No tengo la autoricacion para revelar eso.').replace(/(bot)/g, 'bot')}\n\`\`\``)
					.addField(':file_folder: Tipo', `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
					.addField(':stopwatch: Tiempo', `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
					.setColor('#7289DA');
pito.edit({ embeds: [embed] });
			}
		} catch (err) {
			let code = args.join(' ');
			const embed = new Discord.MessageEmbed()
				.setAuthor({name:`Error en el eval`,iconURL: client.user.displayAvatarURL({ dynamic: true })})
				
				.addField(':inbox_tray: Entrada', `\`\`\`js\n${code.slice(0, 748)}\n\`\`\``)
				.addField(':outbox_tray: Salida', `\`\`\`js\n${err}\n\`\`\``)
				.addField(':file_folder: Tipo', `\`\`\`js\nError\n\`\`\``)
				.setColor('RED');
pito.edit({ embeds: [embed] });
		};
	});
    }
}
console.log(`Comando: ${ncomando}: EN MANTENIMIENTO`.yellow)