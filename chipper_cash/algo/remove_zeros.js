/**
 * Create a function which takes number as a string and return it as string 
 * without trainling and leading zeros.
 * Eg 004.340000 => 4.34
 * EG 00543000 => 543000
 */

function remove_trainling_or_leading_zeros(str) {
    if(isNaN(str)) return undefined
    //first option
    //return parseFloat(str)
    let result1= ""
    let result2 = "";
    // for(let i = 0; i < str.length; i++) {
    //     if(str[i] != "0") result1 += str[i]
    // }
    //optimization
    let i = 0;
    let j = str.length - 1;
    if(str.includes(".")) {
        while(i < j) {
            if(str[i] != "0"){
                result1 += str[i];
            }
            if(str[j] != "0"){
                result2 += str[j]; 
            } 
            i++;
            j--;
           
        }
    }else {
        let leading_zeros = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i]==="0") leading_zeros++;
            if(parseInt(str[i]) >= 1) break;
        }
        return str.slice(leading_zeros)
    }

    return result1 + result2 

}

remove_zeros = str => ''+(+str);
remove_zeros2 = str => parseFloat(str)

console.log(remove_zeros("00033.4440000"))
console.log(remove_zeros2("00033.4440000"))

console.log(+"004345")


