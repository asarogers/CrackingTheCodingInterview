function checkTwoStrings(string1, string2){
//convert both strings to lower case
    let word1 = string1.toLowerCase();
    let word2 = string2.toLowerCase();
    
   
    //check if letter has been REPLACED
    if(word1.length === word2.length){
        
         //check if one character is different
         return checkReplace(word1, word2, 0, 0)
    }
    else{ //check if character has been REMOVED or ADDED
        //which length is greater?
        var length = Math.max(word1.length, word2.length)
        //check if the ascii value is less than 97-122 of the second string
        return checkLengths(word1, word2, 0, 0, length)
    }
    
}

function checkReplace(word1, word2, start, totalChanged){
    //edge case ?
    //maybe there is no change, return no change
    if(word1.length === start +1 && totalChanged === 0) return ("No change")

    //at the end of word with 1 change
    if(start === word1.length - 1 && totalChanged === 1) return "A letter was replaced"

    //at the end of word with 1 change
    if(start === word1.length - 1 && totalChanged > 1) return "Too many changes"

    if (word1[start] !== word2[start]) ++totalChanged;

    return checkReplace(word1, word2, ++start, totalChanged);
}

function checkLengths(word1, word2, start, totalUnchanged, length){
    //edge case ?
    //something was changed, either deleted or added
    //check if something was added by verifying all values except the last are the same
    //check all values by verify the total unchanged is one less than the length
    

    //check if all the words are the same but the end is different
    if(start === length - 1){
        if(totalUnchanged === length -1)return "A letter was inserted or removed"
        if(totalUnchanged < length -1)return "More the one edit occured"
    }
    if (word1[start] === word2[start]) ++totalUnchanged;

    return checkLengths(word1, word2, ++start, totalUnchanged, length);
}

const string1 = "te"
const string2 = "thes"

console.log(checkTwoStrings(string1, string2));