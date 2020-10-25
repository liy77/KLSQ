  
const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = {
  name: "botinfo",
  description: "Get my infos",
  category: "<:info:767763176048951307> info",
  run: async (client, message, args) => {
		const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.addField('General', [
				`**<:robot:767774254711439380> Client:** ${client.user.tag} (${client.user.id})`,
				`**<:command:767775932706062386> Commands:** ${client.commands.size}`,
				`**<:server:767774254389002282> Servers:** ${client.guilds.cache.size.toLocaleString()} `,
				`**<:user:767774253906264115> Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**<:hastag:767774254304722984> Channels:** ${client.channels.cache.size.toLocaleString()}`,
				`**<:timer:767774254519287818> Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**<:nodejs:767775248837771336> Node.js:** ${process.version}`,
				`**<:js:767774254283358238> Version:** v${version}`,
				`**<:discordjs:767774903864000513> Discord.js:** v${djsversion}`,
				'\u200b'
			])
			.addField('System', [
				`**<:linux:767774254468300841> Platform:** ${process.platform}`,
				`**<:uptime:767774254434484234> Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
				`**<:cpu:767774254347059201> CPU:**`,
				`\u3000 ❯ Cores: ${os.cpus().length}`,
				`\u3000 ❯ Model: ${core.model}`,
				`\u3000 ❯ Speed: ${core.speed}MHz`,
				`**<:memory:767774254322155530> Memory:**`,
				`\u3000 ❯ Total: 4024MB`,
				`\u3000 ❯ Used: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB`
			])
			.setTimestamp();

		message.channel.send(embed);
	}
  };