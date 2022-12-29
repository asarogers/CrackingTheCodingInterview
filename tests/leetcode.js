dataset = [4, 3, 5, 7, 9, 10, 8]

quickSort(dataset, 6)
function quickSort(array, index){
    dataReturn = [];
    var middle = index/2;
    //check if middle is greater/lesser than pivot
    dataReturn[middle] = array[index]
    if(array[middle] > dataReturn[middle]){
        dataReturn[middle+1] = array[middle]
    } else{
        dataReturn[middle-1] = array[middle]
    }

    //check if all values less than index are greater/lesser than pivot
    for (let i = 0; i < array.length; i++) {
        //if greater than, put them above half way point
        if(array[i] > dataReturn[middle]){
            dataReturn.push(array[i]);
        }
        else{
            //if lesser than, put them below half way point
            dataReturn.unshift(array[i]);
        }
    }

    console.log(dataReturn)
    
}