const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media1.tenor.com/images/0a37ef8f52e2232d85a2070d56801987/tenor.gif?itemid=5026106');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'no',
  description: ''
};
