function paperRequirements (b1, b2, b3){
    let totalPage = b1 + b2 + b3
    return totalPage
}


book1 = 100
book2 = 200
book3 = 300

console.log('You need total', paperRequirements(book1, book2, book3), 'pages')