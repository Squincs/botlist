const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "c?"
  let kanal = message.mentions.channels.first();
    if (!kanal) {
      message.channel.send(` Bir kanal etiketlemelisin!`);
      return;
    }
 db.set(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  message.channel.send(` Başvuru yapılacak kanal başarıyla ${kanal} olarak ayarlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-yapılacak-kanal-ayarla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'kmd'
};