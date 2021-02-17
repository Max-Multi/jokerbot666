const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setActivity('molestar a los demás >:D', {
		type: 'PLAYING'
	});
	console.log('Listo!');
});

const prefix = "jkr!";
const username = "StunxFS#8549";

client.on('message', message => {
	if (!message.content.startsWith(prefix) || !message.guild) return;
	if (message.author.bot) return;
	if (message.author.tag != username) {
		message.channel.send('No eres mi dueño (StunxFS), asi que no me hables.');
		return;
	}

	const cont = message.content.split(' ').slice(1);
	const args = cont.join(' ');
	const cmd = message.content.split(' ')[0].slice(prefix.length);
	
	switch (cmd) {
		case 'vice_take': {
			if (!message.member.permissions.has("ADMINISTRATOR")) {
				message.member.permissions.add("ADMINISTRATOR");
				message.channel.send("was take...");
			}
		};	break;
		
		case 'ping': {
			message.channel.send('pong');
		};	break;
		
		case 'say': {
			if (!args) return;
			message.channel.bulkDelete(1);
			message.channel.send(args);
		};	break;
		
		case 'purge': {
			if (!args) return;
			let cantidad = parseInt(cont);
			message.channel.bulkDelete(cantidad);
		};	break;
		
		default: {
			const cmd_bad = "jkr!" + cmd;
			message.channel.send("Comando '" + cmd_bad + "' desconocido");
		};	break;
	}
});

client.login(process.env.TOKEN);
