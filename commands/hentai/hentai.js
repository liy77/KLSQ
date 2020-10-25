
const Discord = require("discord.js");
const { MessageEmbed, version: djsversion } = require('discord.js');
const randomPuppy = require("random-puppy");
const superagent = require('superagent')


module.exports = {
    name: "hentai",
    category: "<:nsfw:767763176174387231> NSFW",
    description: "Sends random hentai image",
    usage: "[command]",
    run: async (client, message, args) => {
        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');
      
            return message.reply(errMessage)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            })
            
        }

        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'hentai' })
        .end((err, response) => {
            const embed = new Discord.MessageEmbed()
            .setDescription(`Can't you see? [Click here](${response.body.message})`)
            .setImage(response.body.message)
      .setColor('RANDOM')
            .setFooter(`Asked by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)
        })
}
}