const { prefix, token } = require('./config.json');
const quiz = require('./quizdb.json');
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

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
	    message.channel.send('Here are the commands noob \n prefix: jakobe \n {prefix} ping: Pong \n {prefix} joke: good joke \n {prefix} kewl: compliment jakobebot \n {prefix} version: prints current version \n {prefix} src: view source code \n (NEW) {prefix} history: history quiz \n {prefix} help: display this help \n jakobe participates in conversations too which is pretty kewl')
    //Version
	} else if (message.content === `${prefix} version`) {
	    message.channel.send('v1.2');
    //Src
	} else if (message.content === `${prefix} src`) {
	    message.channel.send('https://github.com/JacobeZhang/JakobeBot');
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
	    const lol = ["kek", "haha", "funni", "lol"]
	    const randomLol = lol[Math.floor(Math.random() * lol.length)];
	    message.channel.send(randomLol);
    //No u
	} else if (message.content === `no u`) {
	    message.channel.send('no u');
    //rip
	} else if (message.content.startsWith(`rip`)) {
	    message.channel.send('rip');
    //Ayo
	} else if (message.content === `${prefix}`) {
	    message.channel.send('yo');
    //Homework	
	} else if (message.content === `${prefix} homework`) {
	    message.channel.send('(**HOMEWORK FOR BLUE ROLE ONLY**) heres all the humanities hw dumbo \n UPDATED: 10/7/2021 \n **SOCIAL STUDIES:** \n Ch 3 AND 18 (10/25) \n Essential Questions 1-6 (all due at end of quarter) \n Africa/Americas RECIPES Chart (10/12) \n **ENGLISH:** \n Hebrew Lit Quiz 10/20 \n Vocab pp 27-28 due 10/20 \n **THEATRE:** \n discussion stuff??? \n **ART** \n Art of Ancient N.E. / Mesopotamia (10/12)');
    //History Quiz
	} else if (message.content === `${prefix} history`) {
	    mes:rlsage.channel.send('(EXPERIMENTAL) ALL QUESTIONS FROM QUIZDB https://quizdb.org');
	    const item = quiz[Math.floor(Math.random() * quiz.length)];
	    message.channel.send(item.text);
	    message.channel.send('Type your guess here');
	    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000, max:1});
	    collector.on('collect', message => {
		message.channel.send(item.answer);
	    })
	}
})
client.login(token);
