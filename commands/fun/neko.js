const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "neko",
   category: "<:fun:767763175709474878> fun",
  
  description: "Get Fresh Neko Images :D",
run: async (client, message, args) => {
  
    let data = await random.getNeko()
    message.channel.send(data)
  
}
}