const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.some(r=>["Founder", "Head Moderator", "Moderator", "Server Owner", "Admin", "Trial Moderator"].includes(r.name)) )
  return message.reply("No.");
  let wUser = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!wUser) return message.reply("Specify a member of this server");
  if(!message.member.roles.some(r=>["Founder", "Head Moderator", "Moderator", "Server Owner", "Admin", "Trial Moderator"].includes(r.name)) )
  return message.reply("No ty. I'm not warning a mod.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Warned User", wUser.tag)
    .addField("Warned in", message.channel)
    .addField("Warn Count", warns[wUser.id].warns)
    .addField("Reason", reason);

    let warnchan = message.guild.channels.find(`name`, "modlogs");

    warnchan.send(warnembed);

    if(warns[wUser.id].warns == 2){
      let muterole = message.guild.roles.find(`name`, "Muted");

      let mutetime = "10s";
      await(wUser.addRole(muterole.id));
      message.channel.send(`${wUser} has been muted for ${mutetime} because of having 2 warns.`);

      setTimeout(function(){
        wUser.removeRole(muterole.id)
        wUser.send(`You're unmuted.`)
      }, ms(mutetime))
    }
    if(warns[wUser.id].warns == 3){
      wUser.send("You've been warned again.");
    }


}

module.exports.help = {
  name: "warn"
}
