const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
  module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "<:fun:767763175709474878> fun",
  usage: "avatar <user>",
  description: "Pick your avatar picture",

run: async (client, message, args) => {
        let embed = new MessageEmbed();
        if(!message.mentions.users.first()) {
            embed.setTitle('Your avatar');
            embed.setDescription(`**[png](${message.author.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${message.author.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${message.author.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${message.author.displayAvatarURL({format: "webp", size: 2048})})**`);
            embed.setColor(0x00008b);
            embed.setTimestamp();
            embed.setFooter(message.author.username);
            embed.setImage(message.author.displayAvatarURL({size: 2048, dynamic: true}));
            message.channel.send(embed);
        } else {
            let user = message.mentions.users.first();
            embed.setTitle(`‹${user.username}›'s avatar`);
            embed.setDescription(`**[png](${user.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${user.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${user.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${user.displayAvatarURL({format: "webp", size: 2048})})**`);
            embed.setColor(0x8b0000);
            embed.setTimestamp();
            embed.setFooter(user.username);
            embed.setImage(client.users.cache.get(user.id).displayAvatarURL({size: 2048, dynamic: true}));
            message.channel.send(embed);
        }
    }
  }