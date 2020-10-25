module.exports = {
    name: "slowmode",
    category: "<:mod:767763177047588864> moderation",
    usage: "slowmode <time>",
    description: "Turn on slow mode",
    run: async (client, message, args) => {
        let user = args[0];
        let text = args.slice(1).join(" ") || undefined;
        if (!user) return message.reply("You need to provide Slowmode Time.");
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You are not allowed to use this command`);
        message.channel.setRateLimitPerUser(args[0])
        message.reply(`Slowmode time successfully changed to ${args[0]} seconds!`)
    }
}