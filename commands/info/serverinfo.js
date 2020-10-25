const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "<:info:767763176048951307> info",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "brazil":
                region = ':flag_br: brazil'
                break;            
            case "india":
                region = ':flag_in: india'
                break;                          
            case "africa":
                region = ':flag_za: south-africa'
                break; 
            case "sydney":
                region = ':flag_au: sydney'
                break;
            case "singapore":
                region = ':flag_sg: singapore'
                break;
            case "russia":
                region = ':flag_ru: russia'
                break;
            case "japan":
                region = ':flag_jp: japan'
                break;
            case "hk":
                region = ':flag_hk: hong kong'
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} server stats`)
            .addFields(
                {
                    name: "<:crown:767860388955422730> Owner: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "<:user:767774253906264115> Members: ",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "<:online:767860397733969960> Members Online: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!\nThere are ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} users idle!\nThere are ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size} users dnd!`,
                    inline: true
                },
                {
                    name: "<:robot:767774254711439380> Total Bots: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "<:timer:767774254519287818> Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "<:arroba:767860385234550844> Roles Count: ",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `<:earth:767860392801730590> Region: `,
                    value: region || ":flag_za: africa or :flag_hk: hong kong",
                    inline: true
                },
                {
                    name: `<a:4568_aVerified:767860405686501386> Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: '<a:7552_Pepe_NitroBoost2:767860397205880853> Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "<a:emojo:767863350889414668> Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}