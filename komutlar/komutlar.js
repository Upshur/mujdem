const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
    await message.channel.send(
     `<a:emoji_13:807058166965731328>么Komutlar么<a:emoji_13:807058166965731328>
 
 
<a:emoji_13:807058166965731328>么+çal么<a:emoji_13:807058166965731328> 
<a:emoji_13:807058166965731328>么+durdur么<a:emoji_13:807058166965731328> 
<a:emoji_13:807058166965731328>么+ses么<a:emoji_13:807058166965731328> 
<a:emoji_13:807058166965731328>么+geç么<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>么+çalan么<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>么+sıra么<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>么+devam么<a:emoji_13:807058166965731328>`
      
    
      
      
      
      
    
      
      
      
      
      
      
      
      
      
      
      
       
      
      
      
      
      
    
    );
  } catch (e) {
    throw e;
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım"
};
