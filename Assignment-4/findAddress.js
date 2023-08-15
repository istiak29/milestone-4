function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";

    return street + "," + house + "," + society;
}


let address = {street:10,society:'Earth Perfect'};
console.log(findAddress(address)); 