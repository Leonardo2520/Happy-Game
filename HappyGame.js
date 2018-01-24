const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDA1Nzk1Njk5Mjg5MDk2MjE0.DUqBEA.gP4HORx99ftN998Fc59iQQ7IhII');

bot.on('message', message => {
let responseObject = {
    "+ping" : "Pong",
    "+yoda" : "https://www.twitch.tv/yoda",
    "+jukes" : "https://www.twitch.tv/jukes",
    "+pimpi" : "https://www.twitch.tv/pimpimentalol",
    "+kami" : "https://www.twitch.tv/kamikat",
    "+gratis" : "https://www.twitch.tv/gratis150ml",
    "+jovirone" : "https://www.twitch.tv/jovirone",
    "+google" : "https://www.google.com.br/?gws_rd=cr&dcr=0&ei=kD4bWvCnFoOXwQTSib7IBw",
    "+probuilds" : "http://www.probuilds.net/",
    "+op.gg" : "http://br.op.gg/l=pt",
    "+supportsnow" : "http://br.op.gg/summoner/userName=support%20snow",
    "+milik" : "http://br.op.gg/summoner/userName=milik",
    "+eliot" : "http://br.op.gg/summoner/userName=elliotmishida",
    "+tanki" : "http://br.op.gg/summoner/userName=tankigamer",
    "+dark" : "http://br.op.gg/summoner/userName=darknightdlc",
    "+enzo" : "http://br.op.gg/summoner/userName=enzo3125",
    "+hargreon" : "http://br.op.gg/summoner/userName=hargreon",
    "+zarakirubem" : "http://br.op.gg/summoner/userName=zarakirubem",
    "+playlistjovirone" : "https://www.youtube.com/watch?v=93ASUImTedo&list=PL6uYllz0RlYx3xK8r8EDv8LfuhUfWBy2B"
};
if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

if (message.content.startsWith("+roleta")){
    randomNunber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNunber == 2){
        message.reply("Morreu!");
    }
    else{
    message.reply("sobreviveu!");
    }
}

let role = message.guild.roles.find("name", "Administrador");
if(message.member.roles.has(role.id) && message.content.startsWith("+delete")){
    msgDel = 100;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
}
});
