//BubbleSort Algorithm
function removeDuplicatesAndSort (array) {

    //Vi definerer en boolean, til at bestemme hvornår vores while loop skal stoppe.
    let done = false;

    //Sålænge done = false, vil while loopet køre
    while (!done) {
        //Done sættes til true - denne ændres igen, hvis de senere if-statements er true
        done = true;

        //Arrayet løbes igennem, for at sammenligne elementerne
        for(let i = 0; i < array.length; i++) {

            //Removes duplicates
            //Undersøger om det forrige element er det samme som det nuværende element
            if(array[i-1] === array[i]) {
                //Sættes til false, for at køre arrayet igennem igen
                done = false;
                //Fjerner det nuværende element fra arrayet
                array.splice(i, 1);
            }

            //Sorts the array
            //Undersøger om det forrige element er større end det nuværende element
            if(array[i-1] > array[i]) {
                //Hvis ja, sættes done til false, for at iterere over arrayet igen
                done = false;
                //En temporary variabel defineres til at være det forrige element
                let temp = array[i - 1];
                //Der byttes så om på de to elementer
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }

    //Når done er true stopper while-loopet og arrayet returneres.
    return array;
}

let array = [1180, 3, 5, 9, 4, 5, 11, 9, 3, 1, 1, 3, 120, 4, 5, 7, 1180];
let array2 = [1180, 3, 4, 5, 5, 5, 8, 5, 11, 9, 3, 1, 8, 8, 120, 120, 120, 5, 9, 4, 1, 3, 120, 4, 5, 7, 1180];
let array3 = [3, 2, 2, 1, 3, 2, 3, 2, 1, 1, 2, 3, 3, 2, 2, 1, 2, 3, 1, 2, 2, 1, 1, 1, 3, 2, 3];

console.log(removeDuplicatesAndSort(array));
console.log(removeDuplicatesAndSort(array2));
console.log(removeDuplicatesAndSort(array3));

