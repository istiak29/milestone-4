function centimeterToMeter (centimeter){
    const meter = centimeter / 100
    return parseFloat(meter.toFixed(2))
}


centimeterValue = 78
console.log('The approximate meter value is', centimeterToMeter(centimeterValue), 'meter')
