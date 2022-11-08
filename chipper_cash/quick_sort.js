function swap(array, first_index, second_index) {
    const temp = array[first_index];
    array[first_index] = arr[second_index];
    array[second_index] = temp;
}


function pivot(array, pivot_index = 0, length = array.length - 1) {
    let swap_index = pivot_index;
    for(let i =  pivot_index + 1; i < length; i++) {
        if(array[i] < array[pivot_index]) {
            swap_index++;
            swap(array, array[pivot_index], array[i]);
        }
    }
}

