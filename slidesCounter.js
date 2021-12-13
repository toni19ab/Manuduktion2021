//Tæl fra 0 til 10
function counter (num) {
    //logger tallet vi er på
    console.log(num);
    //BaseCase
    if(num === 10) {
        return;
    } else {
        //RecursiveCase
        counter(num+1);
    }
}

counter(0);
