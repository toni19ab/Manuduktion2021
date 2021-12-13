//Til at løse denne opgave bliver der gjort brug af en QuickSort algoritme - her er en gennemgang: https://www.youtube.com/watch?v=P6XGSKO2RzI
//formatArray tilføjer 2 nye parametre til alle objekter, som er deres fødselsdag (fjerner de sidste 4 numre på CPR nummeret, og vender CPR nummeret om,
//så det står på formen YYMMDD, hvilket gør det muligt at sammenligne dem direkt).
//Derudover får vi fat på efternavnet, da det er den anden parameter vi skal sortere på.

//formatArrayBack fjerner de to nye attributter (age, lastname) som vi tilføjede hvert objekt i formatArray.

//sortArray bruger quickSort algoritmen til at sortere arrayet. Se videoen for en gennemgang. Hvis det ikke giver mening første gang i ser den, så se den et par gange.
//Det er en indviklet algoritme, og der bliver brugt noget syntaks, som i formentlig ikke har set før. For at forstå hvad der sker i koden, så er det også vigtigt at i
//forstår syntaksen, og hvad de enkelte kode elementer gør. Derfor, få styr på det basale, så er det nemmere at forstå funktionen.

function formatArray (array) {
    for (let i = 0; i < array.length; i++) {
        let day = array[i].ssn[0] + array[i].ssn[1];
        let month = array[i].ssn[2] + array[i].ssn[3];
        let year = array[i].ssn[4] + array[i].ssn[5];
        let lastName = array[i].name.split(" ")[1];
        array[i].age = year + month + day;
        array[i].lastName = lastName;
    }

    return array;
}

function formatArrayBack (array) {
    for (let i = 0; i < array.length; i++) {
        delete array[i].age;
        delete array[i].lastName;
    }

    return array;
}

function sortArray (array) {

    if(array.length === 1) return array;

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < array.length - 1; i++) {
        if(array[i].age < pivot.age) {
            leftArr.push(array[i]);
        } else if(array[i].age === pivot.age) {
            if(array[i].lastName < pivot.lastName) {
                leftArr.push(array[i]);
            } else {
                rightArr.push(array[i]);
            }
        } else {
            rightArr.push(array[i]);
        }
    }

    if(leftArr.length > 0 && rightArr.length > 0) {
        return [...sortArray(leftArr), pivot, ...sortArray(rightArr)];
    } else if (leftArr.length > 0) {
        return [...sortArray(leftArr), pivot];
    } else {
        return [pivot, ...sortArray(rightArr)];
    }
}

function startSortArray (arr) {
    return formatArrayBack(sortArray(formatArray(arr)));
}

let array = [
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2612951223", name: "Peter Hansen"},
    {ssn: "0112998999", name: "Kasper Pedersen"},
    {ssn: "0112991122", name: "Louise Johannesen"},
    {ssn: "2305524588", name: "Gertrud Mogensen"},
    {ssn: "0710855877", name: "Bertram Viktor Nielsen"}
];

console.log(startSortArray(array));
