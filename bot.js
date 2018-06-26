
const Discord = require('discord.js');
var x = 0; // new
var stage0 = "You wake up in a lush forest. It's in the middle of the night and you notice a light somewhere in the distance to your right.";
var quest0 = "Do you go Left to go deeper into the dark forest or Right towards the light?";
var stage0l="You head deeper into the woods. You can't see anything, and suddenly, you have a searing pain in your chest.";
var gameover="You fall down, writhing in pain. You have died";
var stage01="You find an abandoned warehouse, with a bright yellow light beaming from within";
var quest01="Do you go inside, or wait outside?";
const client = new Discord.Client();







client.on('ready', () => {


   console.log('I am ready!');


});







client.on('message', message => {


   if (message.content === 'ping') {


   	message.reply('pong');


 	}
   if (message.content==='gameStart'){//game startup
      if (x==0){
         message.reply(stage0);
         message.reply(quest0);
      }
      if (x==01){
         message.reply(stage01);
         message.reply(quest01);
      }
      if (x==02){
         message.reply(stage02);
         message.reply(quest02);
      }
      if (x==03){
         message.reply(stage03);
         message.reply(quest03);
      }
   }
   if (message.content===("right"&&x===0)){//stage0 results
         message.reply(stage01);
         message.reply(quest01);
         x++;
   }else if (message.content===("left"&&===0)){
      message.reply(stage0l);
      message.reply(gameover);
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
