const Canvas = require("canvas");
const Discord = require("discord.js");
const db = require("quick.db");
const canvas = Canvas.createCanvas(384, 128);
const ctx = canvas.getContext("2d");
const { createCanvas, loadImage } = require("canvas");

module.exports = {
name: "ship",
category: "<:fun:767763175709474878> fun",
usage: "ship <@user1> <@user2>",
description: "Ship 2 users",
run: async (client, message, args) => {
  let membro1 = message.mentions.members.first();
  let membro2 = message.mentions.members.last();

  if (!membro1 || !membro2)
    return message.channel.send(
      "Remember to mention two users to ship"
    );
  if (membro1 === membro2)
    return message.channel.send("Mention two different members");

  const amor = db.get(`Love_${membro1.user.id}_${membro2.user.id}`) || db.get(`Love_${membro2.user.id}_${membro1.user.id}}`) || Math.floor(Math.random() * 100);
  db.set(`Love_${membro1.user.id}_${membro2.user.id}}`, amor);
  db.set(`Love_${membro2.user.id}_${membro1.user.id}}`, amor);
  const loveIndex = Math.floor(amor / 10);
  const loveLevel = "█".repeat(loveIndex) + ".".repeat(10 - loveIndex);

  let nomeFim1 = membro1.user.username.length;
  let nomeFim2 = membro2.user.username.length;

  let calc1 = nomeFim1 - 3;
  let calc2 = nomeFim2 - 3;

  let nomeship;
  if (amor > 60) {
    nomeship =
      membro1.user.username.slice(0, 3) + membro2.user.username.slice(0, 3);
  } else if (amor >= 40) {
    nomeship =
      membro1.user.username.slice(0, calc1) +
      membro2.user.username.slice(0, calc2);
  } else {
    nomeship =
      membro1.user.username.slice(calc1, nomeFim1) +
      membro2.user.username.slice(calc2, nomeFim2);
  }

  let emoticon;
  if (amor > 60) {
    emoticon =
      "https://images.emojiterra.com/twitter/v13.0/512px/2764.png"; //emojo amor
  } else if (amor >= 40) {
    emoticon =
      "https://emoji.gg/assets/emoji/7215_thonk.png"; //emojo hmmmmm
  } else {
    emoticon =
      "https://emoji.gg/assets/emoji/8247_sob_cowboy.png"; //emojo chorando
  }

  let desc;
  if (amor > 90) {
    desc =
      ":sparkling_heart: HMMM, is it going to happen or not? :sparkling_heart:\n``" +
      membro1.user.username +
      "``\n``" +
      membro2.user.username +
      "``\n:heart: ``" +
      nomeship +
      "`` This is the perfect couple! :heart:";
  } else if (amor >= 70) {
    desc =
      ":sparkling_heart: HMMM, is it going to happen or not? :sparkling_heart:\n``" +
      membro1.user.username +
      "``\n``" +
      membro2.user.username +
      "``\n:neutral_face: ``" +
      nomeship +
      "`` These are already catching up and haven't told anyone! :neutral_face:";
  } else if (amor >= 45) {
    desc =
      ":sparkling_heart: HMMM, is it going to happen or not? :sparkling_heart:\n``" +
      membro1.user.username +
      "``\n``" +
      membro2.user.username +
      "``\n:no_mouth: ``" +
      nomeship +
      "`` Maybe just need a push " +
      membro2.user.username +
      " want... :no_mouth:";
  } else {
    desc =
      ":sparkling_heart: HMMM, is it going to happen or not? :sparkling_heart:\n``" +
      membro1.user.username +
      "``\n``" +
      membro2.user.username +
      "``\n:cry: ``" +
      nomeship +
      "``I really wanted to say that it is possible but ...  :cry: ";
  }

  const canvas = Canvas.createCanvas(384, 128);
  const ctx = canvas.getContext("2d");

  const emote = await Canvas.loadImage(emoticon);
  const foto1 = await Canvas.loadImage(
    membro1.user.displayAvatarURL({ format: "png" })
  );
  const foto2 = await Canvas.loadImage(
    membro2.user.displayAvatarURL({ format: "png" })
  );

  ctx.drawImage(emote, 125, 0, 128, 128);
  ctx.drawImage(foto1, -10, 0, 128, 128);
  ctx.drawImage(foto2, 260, 0, 128, 128);

  const amorat = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "chances-image.png"
  );

  let amorEmbed = new Discord.MessageEmbed()
    .setColor("#ff3399")
    .setDescription("**" + amor + "%** [`" + loveLevel + "`]")
    .attachFiles([amorat])
    .setImage("attachment://chances-image.png");

  message.channel.send("<@" + message.author.id + "> \n" + desc, amorEmbed);
}
};