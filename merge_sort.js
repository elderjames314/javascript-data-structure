function merge(arr1, arr2) {
    //combine two sorted array
    let combine = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            combine.push(arr1[i])
            i++
        }else {
            combine.push(arr2[j])
            j++
        }
        
    }
   
    while(i < arr1.length) {
        combine.push(arr1[i++])
    }

    while(j < arr2.length) {
        combine.push(arr2[j++])
    }

    return combine
}

function merge_sort(array) {
    if(array.length === 1) return array
    let mid = Math.floor(array.length/2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)
    return merge(merge_sort(left), merge_sort(right))
}

console.log(merge_sort([4,1,5,9]))

