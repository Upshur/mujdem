const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/lbOK3uj00mqLC/giphy.gif", "https://media.giphy.com/media/11KZ5xbbnE0EuY/giphy.gif", "https://media.giphy.com/media/etd93UKSpRAIw/giphy.gif", "https://media.giphy.com/media/1232gDBb8YxzXO/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifa = new Discord.RichEmbed()
        .setTitle("Atatürk Gif")
        .setColor("#faa309")
        .setFooter(`Atatürk-gif`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifa);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk-gif'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk-gif',
  description: 'Rastgele atatürk gifi atar.',
  usage: 'agif'
}; 