function bubbleSort(arr) {
    for(let i =  arr.length-1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}


console.log(bubbleSort([3,6,8, 2, 3, 2]));