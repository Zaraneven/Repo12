function myCounter(n) {

    if(n <= 0) {
        return [];
    } else {
        const countArray = myCounter(n - 1).reverse();
        countArray.push(n);
        return countArray.reverse();
    }
}
console.log(myCounter(-10));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;