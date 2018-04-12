const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/yyoFZ1EjLRkSQ/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'xd',
  description: ''
};
