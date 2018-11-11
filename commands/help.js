const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let help = new Discord.RichEmbed()

  .setColor("#00ff00")
  .addField("\`+yellow\`", "Posts a picture of a yellow lime.")
  .addField("\`+help\`", "DMs you this help menu.")
  .addField("\`+support\`", "Bot support!")
  .addField("\`+ping\`", "Shows how fast the bot is.")
  .addField("\`+suggest [suggestion]\`", "Suggest something you would like to be implemented!")
  .addField("\`+design [download link] [description] [(optional) picture link]\`")
  .addField("      ̉", "**STAFF COMMANDS**")
  .addField("\`+mute [user] [time] [reason]\`", "Mutes the mentioned user for the specified time.")
  .addField("\`+ban [user] [reason]\`", "Bans the mentioned user.")
  .addField("\`+kick [user] [reason]\`", "Kicks the mentioned user.")
  .addField("\`+giverole [@user] [role]\`", "Gives a user a role!")
  .addField("\`+takerole [user] [role]\`", "Takes away a user's role!")
  .setFooter("Help command || Type \`https://discord.gg/wsze6e8B\` to join support server || Version 0.6.8");

  message.channel.send("I sent you a DM with all my commands! If you did not get it, turn on DMs from server members and try again!");
  return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
