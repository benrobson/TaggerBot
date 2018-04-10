const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media1.tenor.com/images/f66275ec82c046b43d5503dbf46af622/tenor.gif?itemid=8398567');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'welp',
  description: ''
};
