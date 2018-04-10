const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle('First Time Learning JavaScript?')
  .setDescription('Before you make a Discord Bot, you should have a good understanding of JavaScript. This means you should have a basic understanding of the following topics: ```- Read & understand documentation\n- Debug code\n- Syntax\n- NodeJS Module System```If you aren\'t sure that your understanding of JavaScript is truly good enough to make a bot, you should really try to continue learning first. Here are good resources to learn both Javascript and NodeJS:')
  .addField('Codecademy', 'https://www.codecademy.com/learn/javascript')
  .addField('Udemy', 'https://www.udemy.com/javascript-essentials/')
  .addField('Eloquent JavaScript [free book]', 'http://eloquentjavascript.net/')
  .addField('You-Dont-Know-JS', 'https://github.com/getify/You-Dont-Know-JS')
  .addField('JavaScript Garden', 'https://bonsaiden.github.io/JavaScript-Garden/')
  .addField('JavaScript Reference/Documentation', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference')
  .addField('JavaScript Reference/Documentation', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\nhttps://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js')

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'jsfirst',
  description: 'For those who need to understand JavaScript.'
};
