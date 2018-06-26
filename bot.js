
const Discord = require('discord.js');
var x = 0; // new
var stage0 = "You wake up in a lush forest. It's in the middle of the night and you notice a light somewhere in the distance to your right.";
var quest0 = "Do you go Left or Right?";


const client = new Discord.Client();







client.on('ready', () => {


   console.log('I am ready!');


});







client.on('message', message => {


   if (message.content === 'ping') {


   	message.reply('pong');


 	}
   if (message.content==='gameStart'){
      if (x==0){
         message.reply(stage0);
         message.reply(quest0);
      }
   }
   
   
   
   
   
   
    if (message.content==='commandHelp'){
       message.reply("My commands are:");
       message.channel.send("When will Jacob be on?");
       message.channel.send(" and ResetSave");
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
    if (message.content.startsWith("When will Jacob be on")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("When will jacob be on")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("when will Jacob be on")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content.startsWith("when will jacob be on")) {
    message.reply("He is usually online from 2pm-7pm");   
    }
    if (message.content === ('resetSave')) {    //new
       x=0;
       message.reply("Save reset!");
    }
    if (message.content === ('testX')) {    //new
       x=-1;
       message.reply("Save changed!");
    }
    if (message.content === ('displayX')) {    //new
       message.reply("x is currently " + x +"!");
    }

    /*if (message.content.startsWith("test")) {
       message.reply("test");
       if (message.content.startsWith("yes"||"no")) {
          message.reply("success");
          else {
             message.channel.send("failure");
          }
       }
     }
*/



});







// THIS  MUST  BE  THIS  WAY



client.login(process.env.BOT_TOKEN);
