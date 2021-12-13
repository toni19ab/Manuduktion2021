console.log("Vi kører");

//Bruges til at sortere vores object
function sortCountChars (result) {
    //Object.entries(voresObject) returer vores object lavet til et array på formen [['key1', 'value1'], ['key2', 'value2'] ...]
    const sortArray = Object.entries(result);

    //Object.fromEntries laver et array bestående af [['key1', 'value1'], ['key2', 'value2'] ...] til et object.
    //Vi bruger javascripts inbyggende sorterings funktion til at sortere arrayet. Vi sorterer arrayet på baggrund af value i Key Value parret.
    //Arrayet bliver sorteret Descending
    let sortedObj = Object.fromEntries(sortArray.sort(function (a, b) {
        return b[1] - a[1];
    }));

    console.log(sortedObj);
}

function countChars (string, result = {}) {

    //1: Vi finder bogstavet i starten af strengen og undersøger dette - min umiddelbare tanke er så at fjerne dette bogstav
    //inden vi går videre til næste skridt
    if (Object.keys(result).length === 0) {
        string = string.toLowerCase();

        string = string.split(" ").join("");
        //Sorterer string alfabetisk
        string = string.split("").sort().join("");
    }

    //BaseCase
    if(string.length === 0) {
        sortCountChars(result);
        return;
    }
    //2: I og med vi skal returnere noget der minder om et hashmap, giver det god mening at lave det fra starten af, og så finder
    //vi ud af, hvordan vi får bogstaverne derind
    let key = string[0];

    //3: Min umiddelbare tanke her er, hvis bogstavet ikke er en del af result, så skal det tilføjes. Hvis det er en del
    //af result, så skal antallet af forekomster (det vil sige værdien til key'en) inkrementeres med 1.
    if(!result[key]) {
        result[key] = 1;
    } else {
        result[key]++;
    }

    //4: Vi skal have fjernet det bogstav vi lige har undersøgt, og til det bruger vi str.substring(), som returnerer alt fra det index der defineres og bagudrettet.
    let rest = string.substring(1);
    return countChars(rest, result);
}

countChars("Vi skal taelle bogstaver");

//countChars("hej", {n: 1});
