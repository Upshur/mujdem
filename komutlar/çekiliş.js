const Discord = require('discord.js');
exports.run = function(client, message, args) {
//OTTOMAN CODE
    const ottomancode = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Çekiliş!", true)
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField(`Çekilişi Kazanan Kişi: 🎉
`, `<@${message.guild.members.random().id}>`, true)
    .setColor("RANDOM")
    .setDescription('')
    return message.channel.sendEmbed(ottomancode);
  //OTTOMAN CODE  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekilişyap"],
  permLevel: 2
};

exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş yapar.',
  usage: 'çekiliş'
};