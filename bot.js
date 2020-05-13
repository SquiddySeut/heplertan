const Discord = require('discord.js');
const client = new Discord.Client();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var x = 0;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'psst') {
      	message.channel.send('*Hello little kids... Would you like access to a wonderful place?*');
        message.channel.send('*If so, you have come to the right place...*');
        message.channel.send('*I know how you people love your lewd material, so...*');
        message.channel.send('*React to this message to let me know if you want access to a totally not shady, but lewd area back behind her house...*');
    }
    if (message.content === 'touhounaughtnaughtnaughty') {
        message.channel.send('This is where I keep all of my Touhou ero material go... Feel free to add your own into my collection for others to see');
        message.channel.send('Do not talk about anything illegal or contentious, even I am a stickler for that');
    }
    if (message.content === 'naughtytalkkoakumabeebee') {
        message.channel.send('You can have all sorts of naughty conversations here');
        message.channel.send('Do not talk about anything illegal or contentious, even I am a stickler for that');
    }
    if (message.content === 'Koakuma, I want to see you') {
        x=getRandomInt(2);
        if(x===0){
            message.channel.send('I am flattered that you want to see me...');
            message.channel.send('https://i.imgur.com/UzUBr0B.png');
            message.channel.send('How do I look?');
            message.channel.send(':KoasTemptation:');
        }
        else if(x===1){
            message.channel.send('I am flattered that you want to see me...');
            message.channel.send('https://i.imgur.com/fjukAXR.png');
            message.channel.send('I feel really happy today!');
        }
        else {
            message.channel.send('I am flattered that you want to see me...');
            message.channel.send('https://i.imgur.com/lS0292f.jpg');
            message.channel.send('But I am more curious about you!');
        }
    }
    
    //if (message.content.startsWith("im")) {
   // message.channel.send("Hey Dad-bot, please shut up!");
  //  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


     
