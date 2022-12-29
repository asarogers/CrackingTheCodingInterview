//binary searach, accept target, start, end, and array as parameters
const BinarySearch = (target, start, end, arr)=>{

    //get the middle, check if end condition is in the middle
    const middle = Math.floor((start+end) /2);

    //check if the target is the current  middle value
    if(arr[middle] === target) return (arr[middle] + ' was found at index ' + middle);

    //if the array size is 1 or less then the target is not in the array
    if(arr.length <= 1) return ( target + "was not found in the list");
    
    //if the middle is less than the target, 
    if(arr[middle] < target){
        //search the try binary search again, but make the middle the new target,
        //while leaving out previous middle, as we know it's not current
        return BinarySearch(target, middle +1, end, arr)
    } else{
        //make the end condition the new middle while excluding previous middle
        return BinarySearch(target, start, middle -1, arr)
    }
}   
