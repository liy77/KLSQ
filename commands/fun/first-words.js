const Discord = require('discord.js')
var Jimp = require("jimp")

module.exports = {
    name: "firstwords",
    aliases: ["fw"],
    category: "<:fun:767763175709474878> fun",
    usage: " ",
    description: "First words",
    run: async (client, message, args) => {

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send("You didn't write anything.")
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send("You have exceeded the 50 character limit. You don't want an ugly edition, right?")
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('🔍 | Processing...').then  (message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/767753150836506664/769712029941760060/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send('There was an error creating the image.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send("I don't have the necessary permission to do this. `ATTACH_FILES`")
            }
        }
    }
}}