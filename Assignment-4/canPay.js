function canPay(changeArray, totalDue) {
    let sumArray = 0;
    if (changeArray.length != 0){
        for (let i=0; i < changeArray.length; i++) {
            sumArray += changeArray[i];
        }
        if (totalDue == sumArray || sumArray > totalDue) {
            return true;
        }
        else {
            return false
        }
    }
    else {
        return "You have 0 taka. Try to bring some money."
    }
}

array = []
console.log(canPay(array, 10))