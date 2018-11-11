const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const ping = await message.channel.send("Pinging...");
  ping.edit(`Pong! \`${ping.createdTimestamp - message.createdTimestamp}ms\``);
}

module.exports.help = {
  name: "ping"
}
