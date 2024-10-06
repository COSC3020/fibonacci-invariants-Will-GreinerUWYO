function fib(n) {
    return fibStep(n);
}

function fibStep(n) {
    let values = [];
    if (n===0) {
        return [0]; 
    }
    else if (n===1) {
        return [0,1];
    }
    else {
        values[n] = fibStep(n-1) + fib(n-2);
    }
    return values;
}
