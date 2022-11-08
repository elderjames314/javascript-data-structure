function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i; j < arr.length; j++) {
            if(arr[min] > arr[j]) {
               min = j
            }
        }
        if(i !== min) {
            const temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([6,6,31,2,6,3,4]));