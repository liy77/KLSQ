const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  category: "<:info:767763176048951307> info",
  description: "Get bot ping",
  usage: "ping",
  run: async (client, message, args) => {
    let msg = await message.channel.send('Calculating...');
    let api = msg.createdTimestamp - message.createdTimestamp;
    let bot = client.ws.ping
    msg.delete();

    let embed = new MessageEmbed()
    .setAuthor(`Bot Latency [${bot}ms] | Api Latency [${api}ms]`, client.user.displayAvatarURL())
    .setColor('RANDOM')
    message.channel.send(embed)
  }

}