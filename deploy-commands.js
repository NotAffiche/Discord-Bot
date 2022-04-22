const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;
const clientId = process.env.IDCLIENT;
const guildId = process.env.IDGUILD;

const fs = require('node:fs');

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(TOKEN);

// Deploy to specific guild
rest.put(Routes.applicationGuildCommands(clientId, "967002335966552175"), { body: commands })
	.then(() => console.log(`Successfully registered application commands for guild with id: ${process.env.IDGUILD}.`))
	.catch(console.error);
// // Deploy to all guilds
// rest.put(Routes.applicationCommands(clientId), { body: commands })
// 	.then(() => console.log('Successfully registered application commands globally.'))
// 	.catch(console.error);
