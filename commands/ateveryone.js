const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media1.tenor.com/images/4503a9e149b20fbf6b6af491220b5000/tenor.gif?itemid=9670656');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'ateveryone',
  description: ''
};
