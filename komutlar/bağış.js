const Discord = require('discord.js');
//OTTOMAN CODE
exports.run = async (client, message, params, args) => {
//OTTOMAN CODE
  const ottomanCODE = new Discord.RichEmbed()
  .setColor(0xffff00)
      .setAuthor(`bağış`)
.addField(`**Bağış at**`, '**Alttaki barkod ile bize bağış yaparak destek olabilirsiniz:\n\nBARKOD: `inninal / 4003560002459`**')      
  return message.channel.sendEmbed(ottomanCODE);
};
//OTTOMAN CODE  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  //OTTOMAN CODE
  exports.help = {
    name: 'bağış',
    description: 'bağış',
    usage: 'bağış'
  };
 