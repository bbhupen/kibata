//Bot run function
module.exports.run = async (bot, message, args) => {
    let i 
    let commando = ["margesort", "ms", "music", "m", "nlp", "help", "h", "insult" , "i", "bs", "babulsort", "hello", "kla",  "ping"] 
    await message.channel.send("```List of Commands: \n"+ commando +"```")
    
}


//Bot command
module.exports.help = {
    name : "help",
    aliases: ["h"]
}