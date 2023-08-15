function findOddNum(array){
    var oddNum = []
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 != 0){
            oddNum.push(array[i])
            // console.log(i, array[i])
        }
    }
    console.log(oddNum)
}


a = [3, 4, 9, 6, 5, 13, 29]
findOddNum(a)