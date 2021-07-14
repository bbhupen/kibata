var axios = require("axios").default;


//Bot run function
module.exports.run = async (bot, message, args) => {

  var options = {
    method: 'GET',
    url: 'https://evilinsult.com/generate_insult.php?lang=en&type=json',
  };

    const response = await axios.request(options)
    const insult = await response.data.insultS
    const m = await message.channel.send(insult)
    // m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
}


//Bot command
module.exports.help = {
    name : "insult",
    aliases: ["i"]
}