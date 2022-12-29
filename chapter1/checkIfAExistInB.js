var a = 'abbc'
var b = 'asbdasjdfsajfdasjfdssa'
var count =0;
const ht = {}

for(let i =0; i < a.length; i++){

console.log(permutation(a, 0, ""));
}

function permutation(string, index, str){
    str += string[index];

    if(string.length -1 === index){
        return str;
    }
    return permutation(string, index+1, str)
}




for(let i = 0; i < b.length; i++){
    for(let c = 0; c < a.length; c++){
        if(b[i]===a[c]){
            
        }
    }
}