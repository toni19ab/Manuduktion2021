let arr = [[1, 7, 3], [2, 8, 5, 9], [9, 0, 4]];


function sumNestedArray (array) {
    //Result vi returnerer til sidst
    let result = 0;

    //Første for loop der løber det yderste array igennem
    for (let i = 0; i < array.length; i++) {
        //Inderste for loop der løber arraysene igennem, som der indeholder tallene
        for (let y = 0; y < array[i].length; y++) {
            //Ligger hverttal oven i den værdi, som result har
            result += array[i][y];
        }
    }


    //Returnerer result
    return result;
}

//logger svaret
console.log(sumNestedArray(arr));


