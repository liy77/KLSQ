const { token } = require("./config.json");
const { MessageEmbed } = require("discord.js");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;

const { default_prefix } = require("./config.json");
const db = require("quick.db");
let prefix = db.get(`prefix_${message.guild.id}`);
if (prefix === null) prefix = default_prefix;


      if (message.mentions.has(client.user)) { 
        const mencionada = new MessageEmbed() .setDescription(`Hello, ${message.author}, Use \`${prefix}help\` to see my commands`)
        .setColor('BLUE')
      message.channel.send(mencionada);
      }})

client.on("guildCreate", guild => {
  guild.owner.send(`Hello, ${guild.owner}\n\n\`Thank you for adding me to your server ✅\`\n\n**Use \`*help\` to see my list of commands.**
**If you want to change my prefix use** **\`*prefix <new prefix>\`**\n\nServer Animes BR: https://discord.gg/T76Tgqh`)
})
client.login(token);