function rotate(arr, k) {
    //k=3
    //[2, 43, 54, 5, 5,3 ,3, 5]
    let result = [];
    let j = 0;
    for(let i = k + 1; i < arr.length; i++) {
        result[j++] = arr[i]
    }
    let m = k
    for(let i = 0; i <= k; i++) {
        result[m++] = arr[i]
    }


   return result;
}

console.log(rotate([3, 4,2,4,2,5, 1], 3));