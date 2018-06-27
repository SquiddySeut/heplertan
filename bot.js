
const Discord = require('discord.js');
var x; // new
var stage0 = "You wake up in a lush forest. It's in the middle of the night and you notice a light somewhere in the distance to your right.";
var quest0 = "Do you go (left) to go deeper into the dark forest or (right) towards the light?";
var stage0L="You head deeper into the woods. You can't see anything, and suddenly, you have a searing pain in your chest.";
var gameover="You fall down, writhing in pain. You have died";
var stage01="You find an abandoned warehouse, with a bright yellow light beaming from within";
var quest01="Do you (go inside), or (wait) outside?";
var stage01L="You walk inside, quietly. You hear some footsteps behind you and you feel a blunt blow to the back of your head.";
var stage02="You wait outside and hear some sort of screaming from the inside. Shortly after, you see a man in a cloak run out.";
var quest02="Do you (chase) the man in the cloak, or (sneak) into the warehouse to peep on what was going on?";
const client = new Discord.Client();

var squid;
var hugh;
var mafu;
var kono;
var save5;
var save;
var load;
var delet;





client.on('ready', () => {


   console.log('I am ready!');


});




   if (message.content==="deleteSave"){
      message.reply("which save?");
      delet=1;
   }
if (message.content==="squid"&&delet===1){
         squid=0;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="hugh"&&delet===1){
         hugh=0;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="mafu"&&delet===1){
         mafu=x;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="kono"&&delet===1){
         kono=x;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }
      if (message.content==="save5"&&delet===1){
         save5=x;
         x=0;
         delet=0;
         message.reply("delete confirmed");
      }

client.on('message', message => {


   if (message.content === 'ping') {


   	message.reply('pong');


 	}
   if (message.content==="gameSave"){//game saving NEW
      message.reply("which save file?");
      save=1;
      
   }
   if (message.content==="squid"&&save===1){
         squid=x;
         x=0;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="hugh"&&save===1){
         hugh=x;
         x=0;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="mafu"&&save===1){
         mafu=x;
         x=0;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="kono"&&save===1){
         kono=x;
         x=0;
         save=0;
         message.reply("save confirmed");
      }
      if (message.content==="save5"&&save===1){
         save5=x;
         x=0;
         message.reply("save confirmed");
      }
   if (message.content==='gameStart'&&x===-1){//game startup
      message.reply("give me your save code so I can resume your game!");
      load=1;
      
      
   }
   if (message.content==="gameStart"&&x!=-1){
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
   if (message.content==="squid"&&load===1){
         x=squid;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="hugh"&&load===1){
         x=hugh;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="mafu"&&load===1){
         x=mafu;
         x=0;
         message.reply("load confirmed");
      } if (message.content==="kono"&&load===1){
         x=kono;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="save5"&&load===1){
         x=save5;
         load=0;
         message.reply("load confirmed");
      } if (message.content==="new") {
         x=0;
         load=0;
      }
   if (message.content==="right"&&x===0){//stage0 results
         message.reply(stage01);
         message.reply(quest01);
         x++;
   }
   if (message.content==="left"&&x===0){
      message.reply(stage0L);
      message.reply(gameover);
   }
   if (message.content==="wait"&&x===1){//stage01 results
         message.reply(stage02);
         message.reply(quest02);
         x++;
   }
   if (message.content==="go inside"&&x===1){
         message.reply(stage01L);
         message.reply(gameover);
         x=0;
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
    if (message.content === ('resetSave')) {    //
       x=-1;
       message.reply("Save reset!");
    }
    if (message.content === ('testX')) {    //
       x=-1;
       message.reply("Save changed!");
    }
    if (message.content === ('displayX')) {    //
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
