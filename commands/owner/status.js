const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "<:owner:767763175838842890> owner",
  ownerOnly: true,
  run: async (client, message, args) => {
    
  
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
 client.user.setActivity(args.join(" ")); 
 message.channel.send("Updated the bot status")

    
  }
}