const Discord = require('discord.js');
//ottoman code
exports.run = (client, message) => {
  
  const OTTOMANcode = new Discord.RichEmbed()
  .setColor('#FFFF00')
  .setDescription(`-çal\n-devam\n-durdur\n-geç\n-duraklat\n-sıra\n-ses`)
  message.channel.send(OTTOMANcode)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
//ottoman code
exports.help = {
  name: "yardım"
}