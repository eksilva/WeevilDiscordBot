require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ["MESSAGE"]
});

const BOT_PREFIX = '$';
const TOP_MEMER_COMMAND = 'i-meme-hard';

const giveMemerStatus = (member) => {
  member.roles.add('783462091934662698');
}

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('ready', () => {
  console.log(`WeevilBot running!`);
});

client.on('message', msg => {
  if (msg.content === 'Ping!') {
    msg.reply('p o n g');
  }
  if (msg.content === `${BOT_PREFIX}${TOP_MEMER_COMMAND}`) {
    giveMemerStatus(msg.member);
  }
  if (msg.content === 'Kimo is cool') {
    msg.react('🧊');
  }
});

client.on('messageDelete', msg => {
  msg.reply("Ya done goofed, didn't ya?");
});


client.login(process.env.BOT_TOKEN);
