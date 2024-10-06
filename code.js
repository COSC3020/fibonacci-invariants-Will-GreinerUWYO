function fib(n) {
    if (n===0) {
        return [0]; 
    }
    else if (n===1) {
        return [0,1];
    }
    else {
        let values = [];
        values[n] = fib(n-1) + fib(n-2);
    }
    return values;
}
