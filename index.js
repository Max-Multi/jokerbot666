const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Listo!');
});

//const prefix = process.env.PREFIX;
let prefix = "jkr!";

client.on('message', message => {
    if (!message.content.startsWith(prefix) || !message.guild) return;
    if (message.author.bot) return;
    
    const cont = message.content.split(' ').slice(1);
    const args = cont.join(' ');
    
    if (message.content.startsWith(prefix+'ban_to_night')) {
    	message.member.roles.add("Vicepresidente Ejecutivo");
  		message.channel.send("banning...");
    }
    
    /*if (message.content.startsWith(prefix+'ping')) {
        message.channel.send('pong');
    }
        
    if (message.content.startsWith(prefix+'que_es_draky')) {
            message.channel.send('**No conozco a ese pendejo :v**');
    }*/
        
   /* if (message.content.startsWith(prefix+ 'say')) {
            if (!args) return;
            message.channel.bulkDelete(1);
            message.channel.send(args);
    }*/
    
    if (message.author.username == "StunxFS" && message.content.startsWith(prefix + "purge")) {
    	if (!args) return;
		let cantidad = parseInt(args[0]);
		message.channel.bulkDelete(cantidad);
	} else {
		message.channel.send('No eres StunxFS :/');
	}
});

client.login(process.env.TOKEN);
