const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');
//OTTOMAN CODE
exports.run = (client, message) => {
message.channel.send(
randomstring.generate({
length: 10,
  charset: 'alphabetic'
}))
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
  name: 'rastgeleşifre',
  description: 'rastgele şifre atar',
  usage: 'rastgeleşifre'
};