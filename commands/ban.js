const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // This command must be limited to mods and admins. In this example we just hardcode the role names.
  // Please read on Array.some() to understand this bit:
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
  if(!message.member.roles.some(r=>["Founder", "Head Moderator", "Moderator", "Server Owner", "Admin", "Trial Moderator"].includes(r.name)) )
    return message.reply("Sorry, you don't have permission to use this! (Actually I'm not sorry please use \`+report\` if the user is breaking a rule thanks).");

  // Let's first check if we have a member and if we can kick them!
  // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
  // We can also support getting the member by ID, which would be args[0]
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.bannable)
    return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

  // slice(1) removes the first part, which here should be the user mention or ID
  // join(' ') takes all the various parts to make it a single string.
 let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";

  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  member.send(`You were banned in one of Kessler's servers because of ${reason}, by ${message.author}. DM an admin for appeal.`);
}

module.exports.help = {
  name: "ban"
}
