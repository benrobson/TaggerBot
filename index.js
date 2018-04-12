const Discord = require('discord.js');
const config = require('./config.json');
const token = require('./token.json');
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    console.log('Couldn\'t find commands.');
    return;
  }

  jsfile.forEach((files, i) => {
    let props = require(`./commands/${files}`);
    console.log(`${files} has been loaded!`);
    client.commands.set(props.help.name, props);
  })
});

  // Bot Bootup Event
  client.on('ready', async () => {
    let pluralnonpluralservers = (client.guilds.size > 1) ? 'Servers' : 'Server';
    let pluralnonpluralusers = (client.users.size > 1) ? 'Users' : 'User';

    console.log(`${client.user.username} is online and is operating on ${client.guilds.size} ${pluralnonpluralservers} for ${client.users.size} ${pluralnonpluralusers}.`);
    client.user.setActivity(`${client.guilds.size} ${pluralnonpluralservers} // ${client.users.size} ${pluralnonpluralusers}`, {type: 'PLAYING'});
    return;
  });

// Message Handler
client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args);
});

client.login(token.token);
