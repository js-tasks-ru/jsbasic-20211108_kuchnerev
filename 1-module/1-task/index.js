function factorial(n) {
    let number = 1;

    for(let i = 2 ; i <= n; ++i){
        number *= i;
    }
    return number;
}
