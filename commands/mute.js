const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //Checking to make sure everything works
  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!tomute) return message.reply("Couldn't find user.");
  if(!message.member.roles.some(r=>["Founder", "Head Moderator", "Moderator", "Server Owner", "Admin", "Trial Moderator"].includes(r.name)) )
  return message.reply("Sorry, you don't have permission to use this! (Actually I'm not sorry please use \`+report\` if the user is breaking a rule thanks).");
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole) return message.reply("You have no muted role, come back after you've made it and try again.");
  let mutetime = args[1];
  if(!mutetime) return message.reply("Specify a time pls!");
  let reason = args.slice(2).join(' ');
  if(!reason) reason = "No reason provided";

  //The punishment bit!
  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> was muted!`);
  tomute.send(`You've been muted in one of Kessler's servers by ${message.author.tag} for ${mutetime} because of ${reason}. I'll DM you when you get unmuted.`);


  setTimeout(function(){
    tomute.removeRole(muterole.id);
    tomute.send("You've been unmuted in Kessler's server, don't screw up again!");


  }, ms(mutetime));


}

module.exports.help = {
  name: "mute"
}
