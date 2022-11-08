/**
 * 
 * @param {string[]} logs 
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {

    let letterLog = [];
    let digitLog = [];
    for (let log of logs){ 
        if(isFinite(log[log.length-1])){
          digitLog.push(log)  
        }else{
          letterLog.push(log); 
        }
    }
    
    letterLog.sort((a,b)=>{
        let indexOfFirstBlankA = a.indexOf(' ');
        let indexOfFirstBlankB = b.indexOf(' ');
        let subStrA = a.substring(indexOfFirstBlankA+1);
        let subStrB = b.substring(indexOfFirstBlankB+1);
        
        let iA = a.substring(0,indexOfFirstBlankA);
        let iB = b.substring(0,indexOfFirstBlankB);
        let ans  = subStrA.localeCompare(subStrB);
        if (ans == 0 ) {
          return iA.localeCompare(iB);
        }    
        return ans;
        
    })
 
    return letterLog.concat(digitLog);


}

const logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]

console.log(reorderLogFiles(logs))