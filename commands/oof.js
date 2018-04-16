const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/3oz8xz12ps500JuWnC/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'oof',
  description: ''
};
