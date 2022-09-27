function bubbleSort(arr1) {
    for(let i = arr1.length - 1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr1[j] > arr1[j+1]) {
                //swap
                let temp = arr1[j]
                arr1[j] = arr1[j+1]
                arr1[j+1] = temp
            }
        }
    }
    return arr1
}
console.log(bubbleSort([3,6,2,9,1,7,8]))