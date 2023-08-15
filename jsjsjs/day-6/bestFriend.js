//  This will return a name with highest length

// function bestFriend (friendsArray){
//     let bigLenghtName = friendsArray[0];
//     for (var i = 1; i < friendsArray.length; i++) {
//         if (bigLenghtName.length < friendsArray[i].length){
//             bigLenghtName = friendsArray[i];
//         }
//     }
//     return bigLenghtName
// }

// arrayOfFriends = ['Istiak', 'Habibullah', 'Irfanl', 'Haider', 'Tara', 'Tabassum']
// console.log("The Friend's name of big length is", bestFriend(arrayOfFriends), 'which is approximately', bestFriend(arrayOfFriends).length)


//  This will return a name with lowest length
function bestFriend (friendsArray){
    let smallLenghtName = friendsArray[0];
    for (var i = 1; i < friendsArray.length; i++) {
        if (smallLenghtName.length > friendsArray[i].length){
            smallLenghtName = friendsArray[i];
        }
    }
    return smallLenghtName
}

arrayOfFriends = ['Istiak', 'Habibullah', 'Irfanl', 'Haider', 'Tara', 'Tabassum']
console.log("The Friend's name of big length is", bestFriend(arrayOfFriends), 'which is approximately', bestFriend(arrayOfFriends).length)

