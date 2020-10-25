  
const figlet = require('figlet');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ascii",
    aliases: [" "],
    category: "<:fun:767763175709474878> fun",
    usage: "<word>",
    description: "Converts text to ascii",

    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 400) return message.channel.send('Please provide text shorter than 400 characters')

            message.channel.send(`<@${message.author.id}> Ascii Text: ${args.join(' ')}`)
            message.channel.send('```' + data + '```')
        })
    }
}