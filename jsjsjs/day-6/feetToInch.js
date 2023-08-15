function feetToInch(feet){
    const inch = feet / 12
    return parseFloat(inch.toFixed(2))
}


feetValue = 46
console.log('The approximate Inch value is', feetToInch(feetValue), 'inches')