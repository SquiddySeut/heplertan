const Discord = require('discord.js');
const client = new Discord.Client();

var x = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'psst') {
      	message.channel.send('*Hello... Would you like access to a wonderful place?*');
        message.channel.send('*If so, you have come to the right place...*');
        message.channel.send('React to this message if you want access to a totally not shady, but lewd area back behind her house...');
    }
    //if (message.content.startsWith("im")) {
   // message.channel.send("Hey Dad-bot, please shut up!");
  //  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


     
