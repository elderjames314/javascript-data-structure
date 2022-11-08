/**
 * Create a function which remove last vowel from every words in the sentence
 * @param {String} str 
 */
function removeLastVowel(str) {
    const vowel = "aeiou"
    let word_arry = str.split(" ")
    let m = 0;
    let second_array = [];
    for(word of word_arry) {
        m++;
        let isfound = false;
        let newWord = "";
       for(let j = 0; j < vowel.length; j++) {
         if(word[word.length-1] == vowel[j]) {
            newWord = word.slice(0, word.length-1)
            isfound = true;
         }
       }
       if(isfound) {
        second_array.push(newWord);
       }else {
        second_array.push(word)
       }

       isfound = false;
       newWord = "";

    }
    
    return second_array.join(' ')

}

function replaceLastWordIfVowel(word) {
    const last_letter = word[word.length-1];
    const vowel = 'aeiouAEIOU';
    if(vowel.includes(last_letter)) {
        newWord = word.slice(0,word.length-1);
        word = newWord
    }
    return word;
}

function removeLastVowel2(str) {
    return str.split(" ").map(word => replaceLastWordIfVowel(word)).join(" ")
}

console.log(removeLastVowel2("this is cooli yes come in my house"))
//console.log(replaceLastWordIfVowel("jamese"))