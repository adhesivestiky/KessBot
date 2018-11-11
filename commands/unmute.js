const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let unmuted = message.mentions.members.first() || message.guild.members.get(args[0]);
    let muterole = message.guild.roles.find(`name`, "Muted");

    unmuted.removeRole(muterole.id);
    unmuted.send(`You've been unmuted in Kessler's server by ${message.author.tag}, don't screw up again!`);
}

module.exports.help = {
  name: "unmute"
}
