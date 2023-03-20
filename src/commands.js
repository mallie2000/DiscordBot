const { SlashCommandBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("MW2")
    .setDescription("Pings the gang to hop on mw2"),
  async execute(interaction){
		await interaction.reply(`This command was run by ${interaction.user.username},                                 who joined on ${interaction.member.joinedAt}.`);
	}
};