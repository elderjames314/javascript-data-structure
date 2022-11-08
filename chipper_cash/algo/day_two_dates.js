/**
 * Calculate how many day between two days
 * @param {Date} date1 
 * @param {Date} date2 
 */

function getNumOfDayBtwTwoDates(date1, date2) {
    let d1 = new Date(date1)
    let d2 = new Date(date2)
    return (d2 - d1)/(1000 * 60 * 60 * 24)
}

getNumOfDayBtwTwoDates2 = (date1, date2) => (new Date(date2) - new Date(date1))/(1000*60*60*24)

console.log(getNumOfDayBtwTwoDates2("11-01-2022", "12-01-2022"))



