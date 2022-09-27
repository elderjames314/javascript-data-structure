function factorial(n) {
    //base case
    if(n === 1) return 1
    return n * factorial(n-1)
}

factorial(1) == 1
factorial(2) == 2 * 1
factorial(3) == 3 * 2
factorial(4) === 4 * 6 == 24

console.log(factorial(4))