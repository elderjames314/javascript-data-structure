/**
 * Create a function that takes string and return true if the string contain number
 * EG "JAMES" => false
 * EG "JAMES34" => true
 */

isContainNumber = str => {
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i])){
            return true;
        }
    }
    return false;
}

isContainNumber2 = str => /\d/.test(str)

console.log(isContainNumber2("jam67es"))
