function InchesTofeetConvert(inchesValue){
    if (inchesValue == null || inchesValue == 0 || inchesValue == String()){
        return 'Enter a valid value for conversion'
    }
    else{
        let result = inchesValue / 12
        return result
    }
}

let feetValue =  InchesTofeetConvert('')
console.log('Your converted inches value to feet is: ', parseFloat(feetValue.toFixed(2)))