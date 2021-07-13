//Bot run function
module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Hello?")
    m.edit(`o hello mfer`);
}


//Bot command
module.exports.help = {
    name : "hello",
    aliases: ["h"]
}