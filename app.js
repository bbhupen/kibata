require('dotenv').config()
const Discord = require("discord.js"); 
const fs = require("fs"); 

const bot = new Discord.Client();
token = process.env.TOKEN;
const prefix = "?";

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let commando = ["nlp", "insult" , "i", "bs", "babulsort", "hello", "kla",  "ping"] //List of commands



//Reading Files from commands dir

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

//Bot activity viewer CLI

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity(` to ${prefix}commands`, {
    type: "LISTENING"
  });
})


//Working of Bot

bot.on("message", async message => {

//   message.attachments.forEach((Attachment , key) => {
//     console.log(`Attachment sent by ${message.author.tag} >> Url: ${Attachment.url}`)
//     console.log(key)
// })

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd 
  cmd = args.shift().toLowerCase();

  console.log(cmd.includes(commando))
  console.log(message.content)
  console.log(cmd)
//RUN command

  if (commando.includes(cmd)){
    if (bot.commands.has(cmd)) {
      console.log(cmd.includes(commando))
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
  }
  else {
    message.reply("Not a Valid Command")
  }

  

});

//Starts the bot up

bot.login(token); 