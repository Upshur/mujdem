const Discord = require('discord.js')
//OTTOMAN CODE
exports.run = (client, message, params) => {
const OTTOMANcode = new Discord.RichEmbed()
.setTitle(':flag_tr: **Türkiyemizin saati aşşağıda yazmaktadır**')
.setTimestamp()
.setFooter('Türkiyemizin Saati -->')
.setColor('YELLOW')
message.channel.sendMessage(OTTOMANcode)
}
//OTTOMAN CODE
   exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['time'],
permLevel: 0
};
exports.help = {
name: 'saat',
 description: 'türkiye saatini gösterir',
 usage: 'saat'
};