  
const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
  name: "uptime",
  description: "Get my uptime",
  category: "<:info:767763176048951307> Info",
  run: async (client, message, args) => {

    const duration = moment.duration(client.ontime)

    let u = convertMS(client.uptime)
    let ontime = `**${u.h}**` + " Hour(s), " + `**${u.m}**` + " Minutes, " + `**${u.s}**` + " Seconds"

    message.channel.send(`<:uptime:767774254434484234> | **${message.author.username}**, My uptime: ${ontime}`)

    function convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        return {
            d: d
            , h: h
            , m: m
            , s: s
        };
    };
}
}
