const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  category: "<:info:767763176048951307> info",
  description: "Get the bot invite",
  usage: "invite",
  aliases: [" "],
run: async (client, message, args) => {
  let bicon = client.user.displayAvatarURL;
  let invite = 'https://discord.com/oauth2/authorize?client_id=767067712756121611&permissions=0&scope=bot';

 let inviteEmbed = new MessageEmbed()
 .setDescription(`[**Invite me to your server!**](${invite})`)
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!" , `[This is bot invite <-](${invite})`)

 message.channel.send(inviteEmbed);

        message.delete();

}

      }
