//Bot run function
module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Ping?")
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
}


//Bot command
module.exports.help = {
    name : "ping",
    aliases: ["p"]
}