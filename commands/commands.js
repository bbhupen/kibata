//Bot run function
module.exports.run = async (bot, message, args) => {
    let i 
    let commando = ["nlp", "help", "insult" , "i", "bs", "babulsort", "hello", "kla",  "ping"]
    await message.channel.send("```List of Commands: \n"+ commando +"```")
    
}


//Bot command
module.exports.help = {
    name : "help",
    aliases: ["h"]
}