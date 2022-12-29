const matrix = [
    [1, 3, 0],
    [1, 5, 4],
    [1, 7, 2]
]

zeroMatrix(matrix);
function zeroMatrix(matrix){
    const empty = [];

    for(let i = 0; i < matrix.length; i++){
        empty.push([])
    }

    empty.push([matrix.length][matrix[0].length])
    for(let i =0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j]===0){ 
                
            }else{
                console.log("["+ i +"]["+ j +"]=" + matrix[i][j])
                empty[i][j] = matrix[i][j];
            }
        }                                                                                             
    }
    console.log(empty)
}

