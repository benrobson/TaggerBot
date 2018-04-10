const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('http://i0.kym-cdn.com/photos/images/newsfeed/001/332/955/58e.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'spaghet',
  description: 'SOMEBODY TOUCHA MY SPAGHET'
};
