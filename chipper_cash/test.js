[2, 3, 4, 5, 5].forEach((item, index, array) => {
   // console.log(item);
   // console.log(index);
    //console.log(array[index])
})

var ht = {
    234:  23, 
    34: 343
}

Object.keys(ht).forEach((key) => {
    console.log(key, ht[key])
})

Object.values(ht).forEach((val) => {
    console.log(val)
})

Object.entries(ht).forEach((entry)=> {
    const [k, v] = entry
    console.log(k, v)
})