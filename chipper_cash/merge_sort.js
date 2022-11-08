function merge(arr1, arr2) {
    let combine_array = [];
    let i = 0; 
    let j = 0;
    let m = arr1.length + arr2.length;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            combine_array.push(arr1[i])
            i++
        }else {
            combine_array.push(arr2[j])
            j++
        }

    }
    while(i < arr1.length) {
        combine_array.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        combine_array.push(arr2[j])
        j++;
    }
    return combine_array;
}

function mergeSort(arr) {
    if(arr.length === 1) return arr;
    const mid = Math.floor(arr.length/2);
    const [arr1, arr2] =  [arr.slice(0, mid), arr.slice(mid)];
    return merge(mergeSort(arr1), mergeSort(arr2))
}


console.log(mergeSort([4,3,2,1]))