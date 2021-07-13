module.exports.run = async (bot, message, args) => {

    
    if(!args[0]) return message.reply("oi geda, array to eneka mar , for eg: `/babulSort 1,2,3,4,5 or /bs 1,2,3,4,5,6`");

    //taking input and converting to array
    var arr = new Array();
    arr = args[0].split(",")

    for (a in arr ) {
        arr[a] = parseInt(arr[a], 10); 
    }

    //babulSort Algo

    const m = await message.channel.send("Sorting")

    for (var i=0;i<arr.length;i++){
        m.edit(`${arr}`)
        for (var j=0; j<arr.length-i-1;j++){

            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }

        }
    }

    m.edit(`Ei lo tur sorted array ${arr}`);

}

module.exports.help = {
    name : "babulsort",
    aliases: ["bs"]
}