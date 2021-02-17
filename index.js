const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('molestar a los demás >:D', {type: 'PLAYING'});
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
    
    const args = message.content.split(' ').slice(1);
    
    if (message.content.startsWith(prefix + 'vice_take')) {
	let viceRole = message.guild.roles.cache.find(role => role.name === ":gem:Vicepresidente Ejecutivo:gem:");
	let member = message.member;
	member.roles.add(viceRole).catch(console.error);
  	message.channel.send("was take...");
    }
    
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('pong');
    }
        
    if (message.content.startsWith(prefix + 'say')) {
        if (!args) return;
	message.channel.bulkDelete(1);
        message.channel.send(args);
    }
    
    if (message.content.startsWith(prefix + "purge")) {
    	if (!args) return;
		let cantidad = parseInt(args[0]);
		message.channel.bulkDelete(cantidad);
	}
});

client.login(process.env.TOKEN);
