/**
 * Create a function that takes array and return smallest number in that array
 * 
 */

function newFun(arr) {
    let min = arr[0];
    for(const value of arr) {
        min = Math.min(min, value);
    }
    return min;
}

smallestNumber = arr => Math.min(...arr)
smallestNumber2 = arr => arr.reduce((a,b) => Math.max(a, b), Number.POSITIVE_INFINITY)
smallestNumber3 = arr => Math.min.apply(null, arr)
smallestNumber4 = arr => {
    arr.sort((a, b) => a-b);
    return arr[0]
}

console.log(newFun([3, 4, 523, 2,3, 21, 1]));