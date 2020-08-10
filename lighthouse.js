const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

client.once('ready', () => {
	console.log('Online!');
	client.user.setActivity('🤖https://asksirk.com', { type: 'PLAYING' });
});

client.on('message', message => {

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (message.content === `${prefix}kick`) {
		message.channel.send('This Command is Under Maintenance.');
		if (message.author.hasPermission('BAN_MEMBERS')) {
			message.channel.send('This Command is Under Maintenance.');
			// ban people
		}
		else{
			message.channel.send('You do not have the required permissions!');
		}
	} else if (message.content === `${prefix}ban`) {
		if (message.author.hasPermission('KICK_MEMBERS')) {
			message.channel.send('This Command is Under Maintenance.');
			// kick people
		}
		else{
			message.channel.send('You do not have the required permissions!');
		}
	} else if (message.content === `${prefix}tag`) {
		message.channel.send('[GYYT] --> https://discord.gg/D7hqtp3');
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	} else if (command === 'clear') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	} else if (message.content === '!help') {
		// We can create embeds using the MessageEmbed constructor
		// Read more about all that you can do with the constructor
		// over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
		const embed = new MessageEmbed()
		  // Set the title of the field
		  .setTitle('LiteBot BETA:')
		  // Set the color of the embed
		  .setColor(0x1261E1)
		  // Set the main content of the embed
		  .setDescription('**HELP**\n \n Prefix - ! (Not Customizable for now)\n \n **COMMANDS:**\n \n!help - This Message\n !help commands - Commands List\n !help mod - Mod Commands\n !help support - Support Info\n \n**INFO**\n \n Bot Developer: ISIRK#0001\n Support Server: https://discord.gg/7GHmRGp \n GitHub Repository: https://github.com/ISIRK/lighthousebot \n LiteBot Site: https://asksirk.com \n Version 0.0.2' )
		  .setFooter('ISIRK#0001')
		// Send the embed to the same channel as the message
		message.channel.send(embed);
	} else if (message.content === '!help commands') {
		// We can create embeds using the MessageEmbed constructor
		// Read more about all that you can do with the constructor
		// over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
		const embed = new MessageEmbed()
		  // Set the title of the field
		  .setTitle('Commands:')
		  // Set the color of the embed
		  .setColor(0x1261E1)
		  // Set the main content of the embed
		  .setDescription('**Commands**\n \n!help commands - This message\n !tag - Gives you the Clan Tag\n !server - Server Stats\n !user-info - Gives you info about a user\n !avatar <User> - Gives users Avatar')
		  .setFooter('ISIRK#0001')
		// Send the embed to the same channel as the message
		message.channel.send(embed);
	} else if (message.content === '!help mod') {
		// We can create embeds using the MessageEmbed constructor
		// Read more about all that you can do with the constructor
		// over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
		const embed = new MessageEmbed()
		  // Set the title of the field
		  .setTitle('Mod Commands:')
		  // Set the color of the embed
		  .setColor(0x1261E1)
		  // Set the main content of the embed
		  .setDescription('**Mod Commands:**\n *(Coming Soon)*\n\n !clear <Number> - Clears <Number> of messages\n ~~!kick @User <Reason> - Kicks User~~\n ~~!ban @User <Reason> - Bans User~~')
		  .setFooter('ISIRK#0001')
		// Send the embed to the same channel as the message
		message.channel.send(embed);
	} else if (message.content === '!help support') {
		// We can create embeds using the MessageEmbed constructor
		// Read more about all that you can do with the constructor
		// over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
		const embed = new MessageEmbed()
		  // Set the title of the field
		  .setTitle('Support:')
		  // Set the color of the embed
		  .setColor(0x1261E1)
		  // Set the main content of the embed
		  .setDescription('**Support:**\n Bot Developer: ISIRK#0001\n Support Server/: https://discord.gg/7GHmRGp \n GitHub Repository: https://github.com/ISIRK/lighthousebot \n LiteBot Site: https://asksirk.com \n Version 0.0.2' )
		  .setFooter('ISIRK#0001')
		// Send the embed to the same channel as the message
		message.channel.send(embed);
	} else if (message.content === 'gay') {
		message.channel.send('No U');
	}  else if (message.content === 'ur gay') {
		message.channel.send('No U');
	}  else if (message.content === 'gae') {
		message.channel.send('No U');
	} else if (message.content === 'ur gae') {
		message.channel.send('No U');
	} 
});
//25667
client.login(token);
