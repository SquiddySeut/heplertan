const Discord = require('discord.js');
const client = new Discord.Client();

var x = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    //if (message.content === 'issei') {
    	//message.reply('if you do not tell me where Issei is, I will murder you');
  	//}
    if (message.content === 'oppai') {
        message.reply('you p-p-pervert!');
    }
    if (message.content === '~\hug') {
        message.reply('aww, here is a hug for you!');
    }
    if (message.content === '~\lewdme') {
        message.reply('no.');
        message.reply('absolutely no');
    }
    if (message.content === '~\help') {
        message.reply('my current commands are ~R/hug and ~R/help, sorry for so little commands');
    }
    if (message.content === '~\displayX') {
        message.reply('x is currently '+ x);
        //x++1;
    }
    if (message.content === '~\Xreset') {
        message.reply('reseting X!');
        //x==0;
    }
    if (message.content.startsWith("im")) {
    message.channel.send("Hey Dad-bot, please shut up!");
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
