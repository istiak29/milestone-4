function cubeNumber(number) {
    if (typeof(number) != 'number') {
        return 'Invalid Input! This function takes only NUMBER as input!';
    }
    else if (number < 0 || number === 0) {
        return
    }
    let cube = Math.pow(number, 3);

    return cube;
}

console.log(cubeNumber(3))