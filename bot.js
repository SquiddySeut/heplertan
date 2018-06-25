
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


});







// THIS  MUST  BE  THIS  WAY



client.login(process.env.BOT_TOKEN);
