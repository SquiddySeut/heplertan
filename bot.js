
const Discord = require('discord.js');




const client = new Discord.Client();







client.on('ready', () => {


   console.log('I am ready!');


});







client.on('message', message => {


   if (message.content === 'ping') {


   	message.reply('pong');


 	}
    if (message.content.startsWith("im")) {
    message.channel.send("Hey Dad-bot, please shut up!");
    }
    if (message.content.startsWith("No you're not,")) {
    message.channel.send("Dad Bot, you need to actually stfu");
    }
    if (message.content.startsWith("69")) {
    message.channel.send("nice");
    }
    if (message.content.startsWith("Hi ")) {
    message.channel.send("Dad Bot kys");
    }
    if (message.content.startsWith("Alright ")) {
    message.channel.send("no u");
    }
    if (message.content.startsWith("When will jacob be online")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("When will jacob be online")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("when will Jacob be online")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("when will jacob be online")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("test")) {
       message.reply("test");
       if (message.content.startsWith("yes"||"no")) {
          message.reply("success");
          else {
             message.channel.send("failure");
          }
       }
     }




});







// THIS  MUST  BE  THIS  WAY



client.login(process.env.BOT_TOKEN);
