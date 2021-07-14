//Bot run function
module.exports.run = async (bot, message, args) => {
    console.log(typeof args[0])
    if(!args[0]) return message.reply("oi geda, array to eneka mar , for eg: `?babulSort 1,2,3,4,5 or ?bs 1,2,3,4,5,6`");

    1
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //Checking if user has entered a string or int
    if (alphabet.includes(args[0][3])) return message.reply("oi geda, number maar ki word mari asa, for eg: `?babulSort 1,2,3,4,5 or ?bs 1,2,3,4,5,6`"); //Hardcoded -- Please change it 
    
    //taking input and converting to array

    var arr = new Array();
    arr = args[0].split(",")


    for (a in arr ) {
        arr[a] = parseInt(arr[a], 10); 
    }

    //margesort algo

    message.channel.send("Sorting")
    const msg = await message.channel.send("Sorting")

    function merge(arr, l,m,r){
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = new Array(n1);
        var R = new Array(n2);


        for (var i = 0; i < n1; i++)
            L[i]= arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j]

        var i = 0
        var j = 0
        var k = l


        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
     
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
     
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr,l, r){
        if(l>=r){
            return;//returns recursively
        }
        var m =l+ parseInt((r-l)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
        msg.edit(`${arr}`)
    }

    // function printArray( A, size){
    //     message.channel.send(`${arr}`)    
    // }
    
    var arr_size = arr.length; 
    mergeSort(arr, 0, arr_size - 1);
    // printArray(arr, arr_size) 


}


//Bot command
module.exports.help = {
    name : "margesort",
    aliases: ["ms"]
}