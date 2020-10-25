const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "advice",
   category: "<:fun:767763175709474878> fun",
  
  description: "Get Fresh Advice :D",
run: async (client, message, args) => {
  
    let data = await random.getAdvice()
    message.channel.send(data)
  
}
}