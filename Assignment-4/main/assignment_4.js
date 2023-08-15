function cubeNumber(number) {
  if (typeof number != "number") {
    return "Invalid Input! This function takes only NUMBER as input!";
  } else if (number < 0 || number === 0) {
    return;
  }
  let cube = Math.pow(number, 3);

  return cube;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Error! Invalid Input. Both input must be string!";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else {
    if (arr[0] > arr[1]) {
      return arr;
    } else {
      let temp = arr.pop();
      arr.unshift(temp);

      return arr;
    }
  }
}

function findAddress(obj) {
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";

  return street + "," + house + "," + society;
}

function canPay(changeArray, totalDue) {
  let sumArray = 0;
  if (changeArray.length != 0) {
    for (let i = 0; i < changeArray.length; i++) {
      sumArray += changeArray[i];
    }
    if (totalDue == sumArray || sumArray > totalDue) {
      return true;
    } else {
      return false;
    }
  } else {
    return "You have 0 taka. Try to bring some money.";
  }
}
