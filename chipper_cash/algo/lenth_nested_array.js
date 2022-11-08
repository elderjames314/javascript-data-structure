/**
 * Calculate the length of nested array
 */

function lengthOfNestedArray(arr) {
    return arr.flat(Infinity).length;
}

const arr = [1, 3, 4, [3, 4, 5, [3, 4, 5]], 5];
//console.log(lengthOfNestedArray(arr))

let [arr1, arr2] = [[2,4,5], [7,18,9]];

arr1.push(arr2)
let newarr = arr1.flat(Infinity)
newarr.sort((a,b) => a-b)
console.log(newarr)