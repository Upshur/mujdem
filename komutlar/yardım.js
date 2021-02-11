const Discord = require("discord.js");
exports.run = (client, message) => {
  const OTTOMANcode = new Discord.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/772216876365250610/809511075585851392/standard.gif') 
    .setColor("#FFFF00")
    .setDescription(`<a:emoji_13:807058166965731328>么𝐄𝐕𝐎𝐋𝐕𝐄-𝐘𝐀𝐑𝐃𝐈𝐌么<a:emoji_13:807058166965731328>

<a:emoji_13:807058166965731328>么+çal么\n<a:emoji_13:807058166965731328>么+devam么\n<a:emoji_13:807058166965731328>么+durdur么\n<a:emoji_13:807058166965731328>么+geç么\n<a:emoji_13:807058166965731328>么+duraklat么\n<a:emoji_13:807058166965731328>么+sıra么\n<a:emoji_13:807058166965731328>么+ses么\n<a:emoji_13:807058166965731328>么+avatar么\n<a:emoji_13:807058166965731328>么+istatistik么\n<a:emoji_13:807058166965731328>么+random-pp么\n<a:emoji_13:807058166965731328>么+davet-kur么\n<a:emoji_13:807058166965731328>么+bağış(bakımda)么\n<a:emoji_13:807058166965731328>么+leave么\n<a:emoji_13:807058166965731328>么+saat么

<a:emoji_13:807058166965731328>botumuzu davet etmek için +istatistik yazın`);

  message.channel.send(OTTOMANcode);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "yardım"
};
