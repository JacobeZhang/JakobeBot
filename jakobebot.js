const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    //if author is bot then staph
        if(message.author.bot) return;
    //Ping Pong
        if (message.content === `${prefix} ping`) {
	    message.channel.send('Pong.');
    //Help
	} else if (message.content === `${prefix} help`) {
	    message.channel.send('Here are the commands noob \n prefix: jakobe \n {prefix} ping: Pong \n {prefix} joke: good joke \n {prefix} kewl: compliment jakobebot \n {prefix} help: display this help \n jakobe participates in conversations too which is pretty kewl')
    //Joke
	} else if (message.content === `${prefix} joke`) {
            message.channel.send('you');
    //lmao
        } else if (message.content === `lmao` || message.content === `Lmao` || message.content === `LMAO`) {
	    const lmao = ["lol", "lmao", "funni"]
	    const randomLmao = lmao[Math.floor(Math.random() * lmao.length)];
	    message.channel.send(randomLmao);
    //idk
	} else if (message.content === `idk`) {
	    message.channel.send('yes you do');
    //lmfao
	} else if (message.content === `lmfao` || message.content === `Lmfao` || message.content === `LMFAO`) {
	    message.channel.send('BWAHAHAHAHAHA');
    //Search for Music
	} else if (message.content.startsWith(`${prefix} search music`)) {
	    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    //(Broken) Mention
	} else if (message.mentions.has(838480317186310164)) {
	    message.channel.send('watttttttt');
    //Compliment
	} else if (message.content === `${prefix} kewl`){
	    message.channel.send('thanks');
    //Lol
	} else if (message.content === `lol` || message.content === `Lol` || message.content === `LOL`){
	    const lol = ["kek", "haha", "funni", "l o l"]
	    const randomLol = lol[Math.floor(Math.random() * lol.length)];
	    message.channel.send(randomLol);
    //No u
	} else if (message.content === `no u`) {
	    message.channel.send('no u');
	}
});

client.login(token);
