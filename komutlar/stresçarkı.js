const Discord = require('discord.js');
//OTTOMAN CODE
exports.run = async (client, message) => {
 let OTTOMAN = await message.channel.send({
   embed: {
      color: 0xffff00,
        description: `${message.author.tag} stres çarkı çevirdi!`,
       image: {
        url: "https://i.imgur.com/KJJxVi4.gif"
         }
//OTTOMAN CODE
        }
    });
//OTTOMAN CODE
    let OTTOMANCODE = (Math.random() * (70 - 10 +5)) + 10;
    setTimeout(() => {
        OTTOMAN.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, stres çarkın ${OTTOMANCODE.toFixed(2)} saniye döndü.`
//OTTOMAN CODE
            }
        });
    }, 7 * 1500);
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
  name: 'stresçarkı', 
};