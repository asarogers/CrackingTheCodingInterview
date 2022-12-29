const matrix = [
    [3, 5, 2, 6],
    [6,7,8, 4],
    [5,2,1, 9],
    [9,5,3, 1],
]
rotateArray(matrix)

function rotateArray(array){
    const empty = [];
    const length = array[0].length;
    for(let i = 0; i < length; i++){
        for (let j = 0; j < length; j++) {
            console.log("[" + i + ", " + j + "]=",array[length-1-j][i])
            //empty[length-1-j][i]=array[i][j]; //rotates counter clockwise
            empty[i][j]=array[length-1-j][i]; //rotates clockwise
            
        }
        
    }
    //console.log(empty)

    array.forEach(element => {
        console.log(element)
    });

    console.log("\n")
    empty.forEach(element => {
        console.log(element)
    });
}
