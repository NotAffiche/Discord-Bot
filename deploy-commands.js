const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;
const clientId = process.env.IDCLIENT;
const guildId = process.env.IDGUILD;

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('insult').setDescription('Insult a specific person!').addUserOption(option => option.setName('victim').setDescription('Target of the insult'))
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
