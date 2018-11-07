const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', () => {
var server = "342590736090529794"; // ايدي السررفر
var channel = "508379742072995851";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , **')
    },1);
 client.guilds.get(server).channels.get(channel).send('**3kkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , 3kkkkk , **')
    },1);
})


client.login(process.env.BOT_TOKEN);
