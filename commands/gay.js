const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/ZcYe7jWTLRzkQ/giphy.gif');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'gay',
  description: 'Example test command.'
};
