const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("508748882025644042")
setInterval(function() {
channel.send(`test for this bot`);
channel.send(`why you kill all pe`);
channel.send(`its so hard`);
channel.send(`why man you doing it`);
channel.send(`doctor is fucking noob`);
channel.send(`subraiz your mather fucker`);
channel.send(`why man fuck your`);
channel.send(`انا احب الكوكايين`);
channel.send(`كلنا محششين اوى اوى`);
channel.send(`ياخى ليش ما تاكل خرا`);
channel.send(`لماذا يا صاح`);
channel.send(`تبا يا ال سالم`);
channel.send(`test`);
}, 10)
})
 
 
client.login(process.env.BOT_TOKEN);
