function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }

    else if (arr[0] === arr[1]) {
        return 'equal';
    }

    else {
        if (arr[0] > arr[1]) {
            return arr;
        }
        else {
            let temp = arr.pop();
            arr.unshift(temp);

            return arr
        }
    }
}

array = [4,4]
console.log(sortMaker(array))