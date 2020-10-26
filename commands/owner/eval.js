  const { MessageEmbed } = require("discord.js");

  module.exports = {
  name: "eval",
  description: "View a eval value",
  usage: "eval <value>",
  category: "<:owner:767763175838842890> owner",
  ownerOnly: true,
  run: async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      `Enter a value to run eval.`
    );
await message.channel.send('Running...').then(async m => {
  try {
    let beforeRunning = Date.now()
    let result = eval(args.join(' '))

    if (result instanceof Promise) {
      m.edit('The code returned a promise - waiting for it to be resolved...')
      await result
    }
    if (typeof result !== 'string') result = require('util').inspect(result)
    let end = (Date.now() - beforeRunning)
    let sembed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('✔️ • Success!')
      .setDescription("```fix\nWhat's up with that? Let's rethink that attitude? Drank all without shaking today?\n```")
      .setColor('00ff0b')
      .addField('Runtime', (end / 60).toFixed(5) + 's')
    if(args[0] == "process.env.TOKEN") return m.edit('Success!', sembed)
    let nembed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('✔️ • Success!')
      .setDescription("```fix\nWhat's up with that? Let's rethink that attitude? Drank all without shaking today?\n```")
      .setColor('00ff0b')
      .addField('Runtime', (end / 60).toFixed(5) + 's')
    if(args[0] == "process.env.DB") return m.edit('Success!', nembed)
    let dembed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('✔️ • Success!')
      .setDescription("```fix\nWhat's up with that? Let's rethink that attitude? Drank all without shaking today?\n```")
      .setColor('00ff0b')
      .addField('Runtime', (end / 60).toFixed(5) + 's')
    let aembed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('✔️ • Success!')
      .setDescription("```fix\nWhat's up with that? Let's rethink that attitude? Drank all without shaking today?\n```")
      .setColor('00ff0b')
      .addField('Runtime', (end / 60).toFixed(5) + 's')
    if(args[0] == "client.token") return m.edit('Success!', aembed)
        let adgembed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('✔️ • Success!')
      .setDescription("```fix\nWhat's up with that? Let's rethink that attitude? Drank all without shaking today?\n```")
      .setColor('00ff0b')
      .addField('Runtime', (end / 60).toFixed(5) + 's')
    if(args[0] == "client.token.split('.')") return m.edit('Sucess!', aembed)
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('✔️ • Success!')
      .setDescription('```js\n' + result.slice(0, 2000) + '\n```')
      .addField('Runtime', (end / 60).toFixed(5) + 's').setColor("00ff0b")
    m.edit('Success!', { embed: embed })
  } catch (e) {
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor('❌ • Error!')
      .setDescription('```js\n' + e.stack.slice(0, 2000) + '\n```')
      .setColor("ff0000")
    m.edit('Failure...', { embed: embed })
  }
})
}
  }
