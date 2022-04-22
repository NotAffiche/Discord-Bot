const { SlashCommandBuilder } = require('@discordjs/builders');
const ytdl = require("ytdl-core");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('music')
        .setDescription('Music.')
        .addSubcommand(subcmd => subcmd
            .setName('play')
            .setDescription('Bot joins your VC and plays requested song (provide YT link).')
            .addStringOption(link => link
                .setName("link")
                .setDescription('Enter a YouTube link.')))
        .addSubcommand(subcmd => subcmd
            .setName('pause')
            .setDescription('Pauses currently playing song'))
        .addSubcommand(subcmd => subcmd
            .setName('skip')
            .setDescription('Skips currently playing song'))
        .addSubcommand(subcmd => subcmd
            .setName('queue')
            .setDescription('Shows song queue')),
    async execute(interaction) {
        const queue = new Map();
        const subcmd = interaction.options.getSubcommand();
        if (!interaction.member.roles.cache.some(role => role.name === 'DJ')) {
            await interaction.reply('No perm');
            return;
        }
        const serverQueue = queue.get(interaction.guild.id);
        switch (subcmd) {
            case 'play':
                const link = interaction.options.getString('link');
                const voiceChannel = interaction.member.voice.channel;
                // interaction.reply(voiceChannel.name);
                if (!voiceChannel) return interaction.reply("You need to be in a voice channel to play music!");
                //todo
                await interaction.reply(link);
                return;
            case 'pause':
                //todo
            case 'skip':
                //todo
            case 'queue':
                //todo
            default:
                await interaction.reply('Invalid command.')
        }
    },
};
