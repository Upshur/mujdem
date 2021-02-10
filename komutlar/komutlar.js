const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
    await message.channel.send(
      `<a:emoji_13:807058166965731328>Komutlar<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>+çal<a:emoji_13:807058166965731328> 
<a:emoji_13:807058166965731328>+durdur<a:emoji_13:807058166965731328> 
<a:emoji_13:807058166965731328>+ses<a:emoji_13:807058166965731328> 
<a:emoji_13:807058166965731328>+geç<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>+çalan<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>+sıra<a:emoji_13:807058166965731328>
<a:emoji_13:807058166965731328>+devam<a:emoji_13:807058166965731328>`
      
      
      
      
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
