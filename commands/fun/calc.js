const { create, all } = require('mathjs'); //npm i mathjs
const cooldowns = {}
const ms = require("ms")
const { MessageEmbed } = require('discord.js');
module.exports.run = async(client, message, args) => {
  const { default_prefix } = require("./config.json");
const db = require("quick.db");
let prefix = db.get(`prefix_${message.guild.id}`);
if (prefix === null) prefix = default_prefix;

if (!args.length) return message.reply(`**Use:** ${prefix}calc <Mathematical Expression>`);

const math = create(all);
const limitedEvaluate = math.evaluate;

//Desativa algumas funções para tornar o comando mais seguro
math.import({
    import: function () { throw new Error('The import function is disabled') },
    createUnit: function () { throw new Error('The createUnit function is disabled') },
    evaluate: function () { throw new Error('The evaluate function is disabled') },
    parse: function () { throw new Error('The parse function is disabled') },
    simplify: function () { throw new Error('Simplify is disabled') },
    derivative: function () { throw new Error('The derivative function is disabled') },
    format: function () { throw new Error('The format function is disabled') }
}, { override: true });

const trava = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Calculator')
    .addField('Expression', `\`\`\`${args.join(' ')}\`\`\``)
    .addField('Result', `\`\`\`Impossible to determine\`\`\``)
	  .setFooter(`Account held by ${message.author.tag}`)

if (message.content.toLowerCase().includes(":")) {
   return message.reply(trava)
 }
 
const cia = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Calculator')
    .addField('Expression', `\`\`\`${args.join(' ')}\`\`\``)
    .addField('Result', `\`\`\`Pick up my token, it's like calling Good Morning and Company, you try, try but never succeed.\`\`\``)
		.setFooter(`Account held by ${message.author.tag}`)

if (message.content.toLowerCase().includes("token")) {
   return message.reply(cia)
 }


const expr = args.join(' ').toLowerCase();

let result;

try {
    result = limitedEvaluate(expr); //Executa a expressão matemática introduzida com o math.evaluate limitado com as funções acima desativadas
} catch (err) {
    return message.reply('❌ Invalid expression!'); //Envia mensagem a avisar que a expressão introduzida é inválida se ocorrer algum erro no math.evaluate
}

if (result === Infinity || result === -Infinity || result.toString() === 'NaN') result = 'Impossible to determine'; //Coloca o resultado como 'Impossível de determinar' se o resultado for Infinito ou NaN
if (typeof result === 'function') return message.reply('❌ Invalid expression!'); //Envia mensagem a avisar que a expressão é inválida se o resultado for do tipo function

const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Calculator')
    .addField('Expression', `\`\`\`${args.join(' ')}\`\`\``)
    .addField('Result', `\`\`\`${result}\`\`\``)
		.setFooter(`Account held by ${message.author.tag}`)
    
message.channel.send(`${message.author}` , embed);
}
