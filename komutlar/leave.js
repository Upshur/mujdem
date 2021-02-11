const Discord = require('discord.js');
//OTTOMAN CODE
exports.run = (client, message, args) => {
  if (message.author.id !== "ID NİZİ GİRİN") return message.reply(':warning: bu komutu sadece sahibim kullanabilir!');
   message.channel.send('sunucudan ayrıldım');
   message.guild.leave()
};
//OTTOMAN CODE
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ayrıl'],
  permLevel: 4,
};
//OTTOMAN CODE
exports.help = {
  name: 'leave',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'leave'
};