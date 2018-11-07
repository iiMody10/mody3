const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', () => {
var server = "509529711093874708"; // ايدي السررفر
var channel = "509529711093874711";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , **')
    },1);
    client.guilds.get(server).channels.get(channel).send('**dgyjyk , 5kasdgfre , ASDsasada , d5asdsad , sadtgr , tujrth , adwegregr , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , 5kkkkk , **')
    },1);
})
  
  

client.login(process.env.BOT_TOKEN);
