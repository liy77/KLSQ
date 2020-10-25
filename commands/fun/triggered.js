const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");
  module.exports = {
  name: "triggered",
  aliases: ["trigger"],
  category: "<:fun:767763175709474878> fun",
  description: "Triggered!",

run: async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let triggered = await canvacord.Canvas.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
    let attachment = new MessageAttachment(triggered, "triggered.gif");
    return message.channel.send(attachment);
}
  }