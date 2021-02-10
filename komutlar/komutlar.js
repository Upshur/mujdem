const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
    await message.channel.send(
      `<a:emoKomutlar🎶
       🎶+çal +durdur +ses -geç -çalan -sıra -devam
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
