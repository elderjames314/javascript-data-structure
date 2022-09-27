function insertion_sort(arr1) {
    let temp
    for(let i = 0; i < arr1.length; i++) {
        temp = arr1[i]
        for(var j = i - 1; arr1[j] > temp && j > -1; j--) {
            arr1[j+1] = arr1[j]
        }
        arr1[j+1] = temp
    }

    return arr1
}

console.log(insertion_sort([3, 5, 53,2, 5,1,23,4]))