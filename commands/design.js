const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let designchan = message.guild.channels.find(`name`, "submissions");
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    designchan.send(sayMessage);

}

module.exports.help = {
  name: "design"
}
