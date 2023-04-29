function numChecker(arr){
    return function(num){
        return arr.includes(num)
    }
}

const checkNum = new numChecker([1,2,3,4,5,6]);
console.log(checkNum(3));
console.log(checkNum(8));