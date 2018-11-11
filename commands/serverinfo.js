const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.displayAvatarURL
  let author = message.author.tag
  let sembed = new Discord.RichEmbed()

  .setColor("#ffff00")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created At",  message.guild.createdAt)
  .addField("You joined at", message.member.joinedAt)
  .addField("Member Count", message.guild.memberCount)
  .addField("Roles", message.guild.roles)
  .setFooter(`Ran by ${author}`)

  message.channel.send(sembed);
}

module.exports.help = {
  name: "serverinfo"
}
