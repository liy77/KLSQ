const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "<:info:767763176048951307> Info",
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
            case "southafrica":
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
            case "hongkong":
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

            switch (message.guild.verificationLevel) {
            case "NONE":
                level = 'None';
                break;
            case "LOW":
                level = 'Low'
                break;            
            case "MEDIUM":
                level = 'Medium'
                break;                          
            case "HIGH":
                level = '(╯°□°）╯︵  ┻━┻'
                break; 
            case "VERY_HIGH":
                level = '┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`<:discord:770682076173041664> ${message.guild.name} server stats`)
            .addFields(
                {
                    name: "<:crown:767860388955422730> Owner: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "<a:multiplicatorLevel:753651650098495641> Shard Id: ",
                    value: `This server is on shard \`${message.guild.shard.id}\``,
                    inline: true
                },
                {
                    name: "<:user:767774253906264115> Members: ",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "<:on:770722541572456459> Members Online: ",
                    value: `There are ${message.guild.members.cache.filter(members => members.user.presence.status == "online").size} users online!\nThere are ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} users idle!\nThere are ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size} users dnd!`,
                    inline: true
                },
                {
                    name: "<:bot:770676119614521365> Total Bots: ",
                    value: `There are ${message.guild.members.cache.filter(members => members.user.bot).size} bots!`,
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
                  name: `<a:verif:770687656488861728> Verification Level:`,
                  value: '**' + level + '**',
                  inline: true
                },
                {
                    name: `<a:verif:770687656488861728> Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: '<a:boost:770670330284474388> Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "<:escudobunitin:770670329345343508> Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
