module.exports = {
  name: "say",
  category: "<:fun:767763175709474878> fun",
  usage: "say <word>",
  description: "Say message",
  run: async (client, message, args) => {
	message.channel.send(args.join(' ') || `${message.author} write something for me to say`);
  message.delete().catch(O_o => { });

  }
}