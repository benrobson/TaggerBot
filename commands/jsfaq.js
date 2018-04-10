const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle('Before you ask a question, you should ask these yourself:')
  .addField('Is this question related to JavaScript, or the library I am using?', 'If it is the library you are using, go to the proper server. You would get better answers there.')
  .addField('Have I tried to google and / or check StackOverflow?', 'Double check that you can\'t find anywhere that can lead you to a solution online.')
  .addField('Have I tried to look on MDN or the library documentation?', 'You should always check documentations to make sure you aren\'t missing how any details.')
  .addField('Does my question make enough sense so that people can understand it, and do they understand what I am trying to accomplish?', 'If no, revise your question. Give as much detail as possible. Include any error or code output that can help us help you.')
  .addField('Am I aware of what I am doing, and not just mindlessly copy and pasting?', 'If you are just copy and pasting code from a guide, you are not going to be able to solve anything. Make sure you understand the code you are writing.')

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'jsfaq',
  description: 'List of frequently asked questions for those who need support.'
};
