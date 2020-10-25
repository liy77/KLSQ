const db = require("quick.db")

module.exports.run = (client) => {
  console.log("JOIN IDA SERVER : https://discord.gg/xBAYBY")
  let atividades = [
    `Type \`*help\` for commands!`,
    `Bot created by LRD`,
    `Only for betas`,
    `Version: 0.1.5`
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${atividades[i++ % atividades.length]}`, {
    type: 'WATCHING'
  }), 1000 * 10); //WATCHING, LISTENING, PlAYING, STREAMING
  client.user
.setStatus('idle') //idle, dnd, onlie, invisible
  console.log(`${client.user.username} Online`)
};