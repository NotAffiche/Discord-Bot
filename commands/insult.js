const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('insult')
    .setDescription('Insult a specific person!')
    .addUserOption(option => option.setName('victim')
    .setDescription('Target of the insult')),
	async execute(interaction) {
		await interaction.reply("Target succesfully offended.");
        await interaction.channel.send("<@"+interaction.options.getUser('victim') + ">, you're a piece of shit you know that, right?");
	},
};
