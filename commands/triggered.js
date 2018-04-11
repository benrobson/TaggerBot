const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/vk7VesvyZEwuI/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'triggered',
  description: ''
};
