const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setActivity('molestar a los demás >:D', {
		type: 'PLAYING'
	});
	console.log('Listo!');
});

// Prefijo usado por el bot
const prefix = process.env.PREFIX;

// Username con tag de la persona que solo puede usar este bot
const username = process.env.USERNAME;

// Variable usada para contener a los "muteados"
// NB: Esta forma es la más fea y anticuada que existe.
let muteds = [];

client.on('message', message => {
	if (muteds.includes(message.author.tag)) {
		message.channel.bulkDelete(1);
		return;
	}
	if (!message.content.startsWith(prefix) || !message.guild) return;
	if (message.author.bot) return;
	if (message.author.tag != username) {
		message.reply('no eres mi creador **StunxFS**, asi que no me hables.');
		return;
	}

	const content_split = message.content.split(' ');
	const cmd = content_split[0].slice(prefix.length);
	const cont = content_split.slice(1);
	const args = cont.join(' ');

	if (cmd.length == 0) {
		message.reply('¡necesito un comando para poder trabajar :u!');
		return;
	}
	
	switch (cmd) {
		/*case 'vice_take': {
			if (!message.member.permissions.has("ADMINISTRATOR")) {
				message.member.permissions.add("ADMINISTRATOR");
				message.channel.send("was take...");
			}
		};	break;
		//MAX_MULTI ADDED THIS
		member.roles.has('role-id-here');
		// returns true if the member has the role

		member.roles.some(role => role.name === 'Mod');
		// returns true if any of the member's roles is exactly named "Mod"
		*/
		
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
			let cantidad = parseInt(cont) + 1;
			message.channel.bulkDelete(cantidad);
		};	break;
			
		case 'mute': {
			if (!args) return;
			let i = muteds.indexOf(args);
			if (i == -1) {
				muteds.push(args);
				message.reply(args + " fue muteado");
			}
		}; break;
			
		case 'unmute': {
			if (!args) return;
			let i = muteds.indexOf(args);
			if (i > -1) {
				muteds.splices(i, 1);
				message.reply(args + " fue desmuteado");
			}
		}; break;
		
		default: {
			const cmd_bad = "jkr!" + cmd;
			message.reply("has usado un comando desconocido: `" + cmd_bad + "`");
		};	break;
	}
});

client.login(process.env.TOKEN);
