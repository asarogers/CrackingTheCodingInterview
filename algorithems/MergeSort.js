//accept array
function MergeSort(array){
    //check if array's length == 1
    if (array.length <= 1) return array

    //define left & right array, along with length
    const middle = Math.floor(array.length /2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    //call merge sort function with left and right as parameters
    return(MergeHelper(MergeSort(left), MergeSort(right)))

}

//define merge sort function which takes left & right arrays
function MergeHelper(left, right){
    //empty array
    var array = [];

    //check which array has the smaller index, push to empty array
    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift());
        } else{
            array.push(right.shift());
        }
    }
    return array.concat(right).concat(left);

}



const array = [2, 5, 3, 8, 10, 4, 1];
const sorted = MergeSort(array)
console.log(sorted)
