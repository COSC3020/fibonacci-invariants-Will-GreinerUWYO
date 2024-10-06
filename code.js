function fib(n) {
    let values = []
    if (n===0) {
        values = [0];
        return values;
    }
    values = [0,1]; 
    for (i=2; i<=n; i++) {
        values.push(values[i-1] + values[i-2]);
    }
    
    return values;
}

console.log(fib(3))
