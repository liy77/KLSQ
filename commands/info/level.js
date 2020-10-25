const db = require('quick.db')
const discord = require('discord.js')
const canvacord = require("canvacord")
const { MessageAttachment } = require("discord.js");
const { getInfo } = require("../../handlers/xp.js")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  aliases: ["rank"],
  usage: "level <user>",
  category: "<:info:767763176048951307> info",
  run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;

    if (user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 100")
    }

    if (user.bot) {
      return message.channel.send("Bot do not have levels")
    }

    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;

    const { level, remxp, levelxp } = getInfo(xp);

    if (xp === 0) {
      level = 0,
        remxp = 0,
        levelxp = 100
    }

  let every = db.all().filter(i => i.ID.startsWith(`xp_${message.guild.id}`)).sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`xp_${user.id}_${message.guild.id}`) + 1;

    const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(rank)
    .setLevel(level)
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setStatus(user.presence.status)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));




  const img = await card.build();
  
  return message.channel.send(new MessageAttachment(img, "rank.png"));





  }
}