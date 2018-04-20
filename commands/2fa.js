const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle('The Importance of Two-Factor Authentication.')
  .setDescription('Two-Factor Authentication (2FA for short) is a good way to add an extra layer of security to your Discord account to make sure that only you have the ability to log in.\nTwo Factor Authentication, also known as 2FA, is an extra layer of security that is known as "multi factor authentication" that requires not only a password and username but also something that only, and only, that user has on them, i.e. a mobile device.\nUsing a Two Factor Authentication process can keep your account secure, because if you account was to get hacked, the hacker would need more than just the users name and password details.')
  return message.channel.send(embed);
};

module.exports.help = {
  name: '2fa',
  description: 'An explaination of Two Factor Authentication.'
};
