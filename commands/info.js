const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Gives info.')
        .addSubcommand(subcmd => subcmd
            .setName('server')
            .setDescription('Info about the server.'))
        .addSubcommand(subcmd => subcmd
            .setName('user')
            .setDescription('Info about the user.')),
    async execute(interaction) {
        const subcmd = interaction.options.getSubcommand();
        if (subcmd === 'server') {
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        } else if (subcmd === 'user') {
            await interaction.reply({content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`, ephemeral: true});
        }
    },
};
