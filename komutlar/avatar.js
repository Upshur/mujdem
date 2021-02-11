const Discord = require('discord.js')
//OTTOMAN CODE
exports.run = (client, message) => {
const ottoman = message.mentions.users.first() || message.author
const ottomancode = new Discord.RichEmbed()
.setImage(ottoman.avatarURL)
.setFooter('EVOLVE - Avatar Kodu')
.setColor('Random')
message.channel.send(ottomancode)
}
//OTTOMAN CODE
exports.conf = {
    enabled: true,
    guildOnly: false,
  aliases: ['pp'],
    permLevel: 0
  };
  //OTTOMAN CODE
  exports.help = {
    name: 'avatar',
    description: 'avatar',
    usage: 'avatar'
  };