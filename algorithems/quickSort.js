dataset = [1,7,5,9,2,12,3]

const sorted = quickSort(dataset)
for (let i = 0; i <= sorted.length; i++){
    for(let c = 0; c <= sorted.length; c++){
        if(sorted[i] - sorted[c]=== 2 && i !==c){
            console.log(sorted[i], sorted[c])
        }
    }
}
function quickSort(array){
    //if only one element, return it
   if(array.length === 1) return array;
   
   //make 2 arrays, a greater than(right) & less than array(left)
   //loop through the entire array
   const leftArray =[];
   const rightArray=[];
   const pivot = array[array.length -1];
   //console.log(array,"The pivot", pivot)
   for (let index = 0; index < array.length -1 ; index++) {
        //if current value is less than, put it in thr left array, else put it in the right array
        if(array[index] < pivot){
            leftArray.push(array[index]);
     //       console.log(array[index],"lower end")
    }else{
            rightArray.push(array[index]);
       //     console.log(array[index],"higher end")
    }
    }
//handle edge cases
if(leftArray.length > 0 && rightArray.length > 0){
    //return the sorted array
return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
} else if(leftArray.length > 0){
    //return the sorted array
return [...quickSort(leftArray), pivot]
}else{
    //return the sorted array
return [pivot,...quickSort(rightArray)]
}


}