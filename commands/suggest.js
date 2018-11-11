const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //gets the channel
  let schan = bot.channels.get("510689705642164224");
  //connects all the spaces so it gets the full command or something like that
  const suggestion = args.join(" ");
  //confirms sending
  message.channel.send("Suggestion has been sent!");

 //ooh, fancy embeds
  let bicon = bot.user.displayAvatarURL
  let uicon = message.author.displayAvatarURL
  let suggestembed = new Discord.RichEmbed()

  .setColor("#00ff00")
  .setThumbnail(bicon)
  .addField("Suggestion", suggestion)
  .setFooter(`Suggestion sent by ${message.author.tag} (${message.author}) at ${message.createdAt}`);

  return schan.send(suggestembed);

}

module.exports.help = {
  name: "suggest"
}
