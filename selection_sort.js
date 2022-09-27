function selection_sort(arr1) {
    let min;
    for(let i = 0; i < arr1.length-1; i++) {
        min = i 
        for(let j = i + 1; j < arr1.length; j++) {
            if(arr1[j] < arr1[min]) min = j
        }

        if(i !== min) {
            let temp = arr1[i]
            arr1[i] = arr1[min]
            arr1[min] = temp
        }
    }

    return arr1
}

console.log(selection_sort([4,78, 43, 23, 5, 2, 3, 2, 3, 1, 4,3]))
