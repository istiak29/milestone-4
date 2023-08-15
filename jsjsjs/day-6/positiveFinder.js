function positiveFinder(numberOfArray){
    positiveArray = []
    for(var i=0; i < numberOfArray.length; i++){
        if (numberOfArray[i] < 0){
            break;
        }
        else if (numberOfArray[i] >= 0){
            positiveArray.push(numberOfArray[i])
        }
    }
    return positiveArray
}


array = [10, 12, 45, 29, 8, 14, -8, 13, 21]

console.log(positiveFinder(array))