function findOddsum(numberArray){
    let result = 0
    for (var i = 0; i < numberArray.length; i++){
        result += numberArray[i]
    }
    // console.log(result)
    if (result % 2 != 0){
        return 'This is odd sum'
    }
    else{
        return 'This is Even sum'
    }
}

var array = [10, 10, 20, 40]
console.log(findOddsum(array))
