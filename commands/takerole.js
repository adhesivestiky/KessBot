const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have perms to do that bud.");
  let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role please.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role.");

  if(!rMember.roles.has(gRole.id));
  await(rMember.removeRole(gRole.id));

  message.channel.send("Role removed!");
}

module.exports.help = {
  name: "takerole"
}
