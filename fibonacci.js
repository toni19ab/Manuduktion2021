//Grundig forklaring af denne løsning i den her youtube video: https://www.youtube.com/watch?v=oBt53YbR9Kk&t=1996s   tid: ~3:30-38:40
function fib(n) {
    if(n <= 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(7));


function fibEffective(n, memo = {}) {
    if(memo[n]) {
        return memo[n];
    }

    if(n <= 2) {
        return 1;
    } else {
        memo[n] = fibEffective(n-1, memo) + fibEffective(n-2, memo);
        return memo[n];
    }
}

console.log(fibEffective(50));
