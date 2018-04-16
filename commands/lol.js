const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/9MFsKQ8A6HCN2/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'lol',
  description: ''
};
