const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle('Do not use join roles in your guilds.')
  .setDescription('There is a thing called the ​@​everyone​ role, use that instead.')
  .addField('They bypass Verification Levels', 'Anyone can join your server with a completely unverified account (no email confirmation, nothing), get the role, and start spamming the hell out of your server with zero problem.')
  .addField('Prune Members becomes useless', 'If a member logs off and never comes back online, they\'ll just stay there, in the role, because the "Member Prune" feature, which kicks any member that\'s been online more than X days, completely ignores members with roles.')
  .addField('Audit Logs are flooded', 'The server Audit Logs, which lists all moderation actions on the server, logs role changes, so you will have one action for every join, which floods it with useless actions.')
  .addField('Ratelimits might screw you', 'There\'s also the fact that I could easily break your bot by really quick join/leaves so it gets caught in ratelimits for adding/removing roles.')
  .addField('The bot is required forever', 'If the bot goes offline then you have to loop through all your members to re-add the roles. If you decide to not have the bot, you have to stop using join roles because only bots can auto-add roles.')

  return message.channel.send(embed);
};

module.exports.help = {
  name: 'joinroles',
  description: 'An explaination of why you shouldn\'t use join roles.'
};
