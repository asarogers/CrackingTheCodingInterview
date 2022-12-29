function checkUnique(word){
    const m = new Map();

    for(let i =0; i < word.length; i++){
        if( word[i] !== " "){
            if(m.get(word[i])){
                const val = m.get(word[i])
                m.set(word[i], val + 1)
            }else{
                m.set(word[i], 1)
            }
        }
    }    
    var count =0;
    for(let [key, val] of m){
        if(val === 1) ++count;
        
        if(count >1) console.log("This is not a palindrome")
    }
}

//check unique characters without map
function check(string, array, start){
    

    if(array.indexOf(string[start]) !== -1) return ("The string is not unique " + string[start] +" " + start)

    array.push(string[start])

    return check(string, array, ++start)
}
const words = [];
const word = "asaf";
checkUnique(word);
//console.log(check(word, words, 0));