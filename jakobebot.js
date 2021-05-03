const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
        if(message.author.bot) return;
	if (message.content === `${prefix} ping`) {
	    message.channel.send('Pong.');
	} else if (message.content === `${prefix} help`) {
	    message.channel.send('Here are the commands noob \n prefix: jakobe \n {prefix} ping: Pong \n {prefix} joke: good joke \n {prefix} kewl: compliment jakobebot \n {prefix} help: display this help \n jakobe participates in conversations too which is pretty kewl')
	} else if (message.content === `${prefix} joke`) {
            message.channel.send('you');
    //lmao
        } else if (message.content === `lmao` || message.content === `Lmao` || message.content === `LMAO`) {
	    const lmao = ["lolz", "lmao", "funni"]
	    const randomLmao = lmao[Math.floor(Math.random() * lmao.length)];
	    message.channel.send(randomLmao);
	} else if (message.content === `idk`) {
	    message.channel.send('yes you do');
	} else if (message.content === `lmfao`) {
	    message.channel.send('BWAHAHAHAHAHA');
	} else if (message.content.startsWith(`${prefix} search music`)) {
	    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
	} else if (message.mentions.has(838480317186310164)) {
	    message.channel.send('whattttttttttt');
	} else if (message.content === `${prefix} kewl`){
	    message.channel.send('thanks');
	} else if (message.content === `lol` || message.content === `Lol` || message.content === `LOL`){
	    const lol = ["kek", "haha", "funni", "l o l"]
	    const randomLol = lol[Math.floor(Math.random() * lol.length)];
	    message.channel.send(randomLol);
	}
});

client.login(token);
