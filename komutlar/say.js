const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    const say = new Discord.RichEmbed()
        .setColor("0xffff00")//ottomancode
        .addField(":crescent_moon:・Sunucudaki Üye Sayısı", message.guild.memberCount)
        .addField("⭐️・Çevrimiçi Üye Sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("⚡️・Seslideki Üye Sayısı", count)
        .setFooter(` ${message.author.username} tarafından kullanıldı.`, message.author.avatarURL)
    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};