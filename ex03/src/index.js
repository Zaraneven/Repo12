function rangeOfNumbers(startN, endN){
    var results = [];
    if(startN === endN){
        return results;
    }
    results.push(startN);
return  results.concat(rangeOfNumbers(startN + 1,endN));
    
}
console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(1, 6));
module.exports = rangeOfNumbers;