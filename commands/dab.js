const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'dab',
  description: ''
};
