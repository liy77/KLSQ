const db = require("quick.db")

module.exports.run = (client) => {
  console.log("JOIN IDA SERVER : https://discord.gg/xBAYBY")
  let atividades = [
    `Type \`*help\` for commands!`,
    `Bot created by LRD & BRUNA`,
    `Enjoy in my github ;) \`*github\``,
    `Version: 0.2.5 Public`
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${atividades[i++ % atividades.length]}`, {
    type: 'WATCHING'
  }), 1000 * 10); //WATCHING, LISTENING, PlAYING, STREAMING
  client.user
.setStatus('idle') //idle, dnd, onlie, invisible
  console.log(`${client.user.username} Online`)
};
