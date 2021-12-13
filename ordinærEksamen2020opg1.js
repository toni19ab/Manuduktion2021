
function palindrom(string) {

    //Alle bogstaver i stregen til små bogstaver
    string = string.toLowerCase();

    //Fjerner mellemrum fra strengen
    string = string.split(" ").join("");

    //Base Case
    //Når strengen er tom eller der er et bogstav tilbage har vi vores Base Case, og vi retunerer true
    if(string.length === 0 || string.length === 1) return true;

    //Recursive Case
    //Undersøger om bogstavet i starten og slutning af strengen er det samme
    if(string.charAt(0) === string.charAt(string.length - 1)) {
        //Hvis ja, så fjernes begge bogstaver (der skæres uden om de to bogstaver)
        let newString = string.slice(1, string.length - 1);

        //Palindrom funktionen kaldes igen med den nye streng
        return palindrom(newString);
    } else {
        //Hvis nej, er det ikke et palindrom og false returneres
        return false;
    }
}

console.log(palindrom("Regninger"));
console.log(palindrom("Flyvende Fisk"));
console.log(palindrom("Kajak"));
console.log(palindrom("spansk snaps"));
console.log(palindrom("En af dem der red med fane"));
