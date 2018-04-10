const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media1.tenor.com/images/83cdd1dd40cdb87020949e0f075b9648/tenor.gif?itemid=11230336');

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'discord',
  description: ''
};
