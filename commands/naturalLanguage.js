var axios = require("axios").default;


module.exports.run = async (bot, message, args) => {

    let spoken = args.join(" ")


    var body = {
        text : spoken
    }
    
    var options = {
        method: 'post',
        url: 'https://sentim-api.herokuapp.com/api/v1/',
        data: body
    };


    

    const response = await axios.request(options)
    const result = await response.data.result

    if(result.type === "negative"){
        await message.channel.send(`Polarity : ${result.polarity}, Type : ${result.type}`)
        await message.channel.send(`Hey @${message.author.username} I know these are hard times`)
        await message.channel.send(`And maybe i am not qualified enough to say something cause i am just a bot`)
        await message.channel.send(`But i just want you to Hold on beacause Sad things happen. They do. But we don’t need to live sad forever.:)`)
    }
    else{
        await message.channel.send(`Polarity : ${result.polarity}, Type : ${result.type}`)
        await message.channel.send(`Hey ${message.author.toString()} Lesss gooooo`)
    }



    

    // const m = await message.channel.send("asd")

    console.log(spoken)
    // console.log(insult)
    // m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
}


//Bot command
module.exports.help = {
    name : "nlp",
    aliases: ["nlp"]
}
