const word = "aabbccdddd"

console.log(compressWord(word))

function compressWord(word){
    let length = word.length;
    let count = 0, string = "", char = word[0];
    for(let i = 0; i < length; i++){
        
        if(char === word[i]){
            ++count;
        } else{
            string += char+count;
            count = 1;
            char = word[i];
        }

    }
    
    string += char+count;
    
    if (string.length < length){
        return string;
    }else{
        return word;
    }
}

function MergeSort(array){

    if (array.length <=1) return array;

    //split the array into two halves
    const middle = Math.floor(array.length/2)
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return MergeHelper(MergeSort(left), MergeSort(right));
    
}

function MergeHelper(left, right){
    var array =[];


    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift())
        }else{
            array.push(right.shift())
        }
    }

    return array.concat(left).concat(right);
}