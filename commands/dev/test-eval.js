const Discord = require("discord.js");
const { create } = require('sourcebin')
const { Client, MessageEmbed, Intents } = require("discord.js");
const mega = require('megadb'), quick = require('quick.db');
const ms = require('ms')

module.exports = {
  name: "eval",
  alias: ["ev"],
  run: async (client, message, args) => {

if(![`911352430963347537`].some(a => a.includes(message.author.id)) == false) return message.reply('<:aviso:925769011822727209>| Oh, esto es algo incomodo solo el equipo del bot puede usar esto');
	if(!args[0]) return message.channel.send(':aviso:925769011822727209| Pon algo para evaluar >.<');

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
		.setDescription(':stopwatch:⚪ Apagando bot...')
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
					.addField(':outbox_tray: Salida', `\`\`\`js\n${txt.replace(client.token, '🔴|No tengo la autoricacion para revelar eso >.<').replace(/(bot)/g, 'bot')}\n\`\`\``)
					.addField(':file_folder: Tipo', `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
					.addField(':stopwatch: Tiempo', `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
					.setColor('#7289DA');
pito.edit({ embeds: [embed] });
			}
		} catch (err) {
			let code = args.join(' ');
			const embed = new Discord.MessageEmbed()
				.setAuthor(
					'Error en el eval',
					client.user.displayAvatarURL({ dynamic: true })
				)
				.addField(':inbox_tray: Entrada', `\`\`\`js\n${code.slice(0, 748)}\n\`\`\``)
				.addField(':outbox_tray: Salida', `\`\`\`js\n${err}\n\`\`\``)
				.addField(':file_folder: Tipo', `\`\`\`js\nError\n\`\`\``)
				.setColor('RED');
pito.edit({ embeds: [embed] });
		};
	});
  
}
}
