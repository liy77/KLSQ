const axios = require('axios');
const { MessageEmbed, version: djsversion } = require('discord.js');


module.exports = {
    name: "nsfw",
    category: "<:nsfw:767763176174387231> NSFW",
    description: "Sends random nsfw image",
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
        const terms = ['nsfw', 'nudes', 'anal', 'sexy', 'pussy'];
    const randomt = Math.floor(Math.random() * 4);
    const term = terms[randomt];

    const response = await axios.get(`https://www.reddit.com/r/${term}.json`);
    const {data} = response.data;
    const {dist} = data;
    const random = Math.floor(Math.random() * dist);
    const img = data.children[random].data.url;

    let embed = new MessageEmbed();
    embed.setColor(0xffffff);
    embed.setTitle("Didn't load? click here! ");
    embed.setURL(img);
    embed.setImage(img);

    message.channel.send(embed);
}
}