require('dotenv').config()
const Discord = require("discord.js"); 
const fs = require("fs"); 

const bot = new Discord.Client();
token = process.env.TOKEN;
const prefix = "/";

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let commands = ["ping", "hello", "kela", "baal", "oi xet", "bhat khabi neki", "kwanzo gay neki", "oi kwanzou", "test"]


fs.readdir("./commands/", (err, files) => { 
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop)
  console.log(jsfile)
  if (jsfile.length <= 0){
    console.log("No commands!");
    return;
  }

  jsfile.forEach((f) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name)
    })
  })
}
)


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity(`with 1 server`)
})



bot.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  
  let args = message.content.slice(prefix.length);
  let cmd 
  cmd = args.toLowerCase();
  let command;
  let commandFile = bot.commands.get(cmd.slice(prefix.length));
  if (commandFile) commandFile.run(bot, message, args);


  //RUN command

  if (bot.commands.has(cmd)) {
    console.log(cmd)
    command = bot.commands.get(cmd);
    console.log(command)
  }else if (bot.aliases.has(cmd)){
    command = bot.commands.get(bot.aliases.get(cmd))
  }
  try{
    command.run(bot, message, args);
  }catch (e){
    return;
  }

});


bot.login(token); // starts the bot up