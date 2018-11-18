const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "306287412437450753") return;
  try{
    var code = args.join(" ");
    var evaled = eval(code);

    if(typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

  message.channel.send(evaled);

} catch(err) {
  message.channel.send(`\`Error\` \`\`\`x1\n${(err)}\n\`\`\``);
  }
}

module.exports.help = {
  name: "eval"
}
