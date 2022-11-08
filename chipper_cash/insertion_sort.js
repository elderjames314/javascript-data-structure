function insertionSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                const temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;

}

console.log(insertionSort([3, 5, 6, 2, 1]))