const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'nope',
  description: ''
};
