require('dotenv').config()
const Discord = require("discord.js"); // imports the discord library
const fs = require("fs"); // imports the file io library

const client = new Discord.Client(); // creates a discord client
token = process.env.TOKEN;
const prefix = "/";


client.on("message", function(message) {

    let commands = ["ping", "hello", "kela", "baal", "oi_xet", "bhat_khabi_neki", "Kwanzo_gay_neki", "oi_kwanzou", "test"]
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

    if (commands.includes(command)){
        console.log("HU")
        message.reply("Exists")
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