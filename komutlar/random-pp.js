const Discord = require("discord.js");
exports.run = function(client, message, args) {

  const ottomanpp = client.users.random().avatarURL
  
    const ottomanembed = new Discord.RichEmbed()
    
      .setImage(ottomanpp)
    
      .setColor("RANDOM")
    
    message.channel.send(ottomanembed); 
  
  
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rastgelepp"]
};

exports.help = {
  name: "random-pp"
};
