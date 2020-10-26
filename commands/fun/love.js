const discord = require("discord.js")
const db = require("quick.db")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "love",
    aliases: [" "],
    category: "<:fun:767763175709474878> fun",
    usage: " ",
    description: "Love metter",
    run: async (client, message, args) => {

if(!message.mentions.members.first()) return message.channel.send(`Please mention someone to calculate the love percentage`).then(message.react('❌'));
let person = message.mentions.members.first(message, args[0]);


const love = db.get(`Love_${message.author.id}_${message.mentions.members.first().id}`) || db.get(`Love_${message.author.id}_${message.mentions.members.first().id}`) || Math.floor(Math.random() * 100);
db.set(`Love_${message.author.id}_${message.mentions.members.first().id}}`, love);
db.set(`Love_${message.mentions.members.first().id}_${message.author.id}`, love);
const loveIndex = Math.floor(love / 10);
const loveLevel = "<a:bar:769300651146477628>".repeat(loveIndex) + "<a:bar2:769300651108204595>".repeat(10 - loveIndex);

const contents = {
    description: null,
    text: null
};


if( love <= 25 ) contents.text = `It wasn't this time`;
else if ( love <= 35 ) contents.text = `And only ${message.mentions.users.first().tag} just wanting ...`;
else if ( love <= 55 ) contents.text = `Chances are great`;
else if ( love <= 65 ) contents.text = `It's a beautiful couple`;
else if ( love <= 75 ) contents.text = `Yes, yes, yes!!!`;
else if ( love <= 85 ) contents.text = `Not even death separates them`;
else contents.text = `Perfect!`;

let user1 = message.author.username
let user2 = message.mentions.users.first().username
let fullname = user1.concat(user2)
let loveEmbed = new MessageEmbed()
.setAuthor("❤ Love percentage ❤", message.author.displayAvatarURL())
.setDescription(`:heartpulse: **${message.author.tag}**\n:heartpulse: **${message.mentions.users.first().tag}**\n\n${love}% **||** ${loveLevel} **||**\n\n **Result:** \`${contents.text}\``)
message.channel.send(loveEmbed)
 }
}
