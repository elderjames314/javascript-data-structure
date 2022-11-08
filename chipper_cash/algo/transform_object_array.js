/**
 * Create a function which take an object as input and convert to array of key and value
 * 
 * {
 *  "names": "james",
 *  "age": 56
 * }
 * 
 * [["name", "james"], ["age", 56]]
 * @param {*} obj 
 */
function convertObjectToArray(obj) {
    if(!obj) return undefined;
    let result = []
    //console.log(Object.entries(obj)[0])
    Object.entries(obj).forEach((k,v)=>{
        result.push(k)
    })
    return result;
}

convertObjectToArray2 = obj => Object.keys(obj).map(key=>[key, obj[key]]);
convertObjectToArray3 = obj => Object.entries(obj);

let employee = {
    "name": "James Oladimeji",
    "age": 45
}

console.log(convertObjectToArray3(employee))