require('dotenv').config()
const Discord = require("discord.js"); // imports the discord library
const fs = require("fs"); // imports the file io library

const client = new Discord.Client(); // creates a discord client
token = process.env.TOKEN;
const prefix = "/";


function reply(message) { 
  if (message == "hello"){
    message.channel.send("Tumi leu neki"); 
  }
  
}


let mapMsgs = new Map();
mapMsgs.set("hello", reply);


client.on("message", function(message) {

  let commands = ["ping", "hello", "kela", "baal", "oi xet", "bhat khabi neki", "kwanzo gay neki", "oi kwanzou", "test"]
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  
  const commandBody = message.content.slice(prefix.length);
  const command = commandBody.toLowerCase();
  console.log(command)

    if (commands.includes(command)){
        mapMsgs.get(command)(message)
    }
    else {
        message.reply("Not a valid command")
    }

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message adsad a latency of ${timeTaken}ms.`);
  }

});


client.login(token); // starts the bot up