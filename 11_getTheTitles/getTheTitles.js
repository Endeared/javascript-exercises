const getTheTitles = function(books) {

    let titleArr = [];

    books.forEach(function(obj) {
    	titleArr.push(obj.title);
    })

    return titleArr;

};

// Do not edit below this line
module.exports = getTheTitles;
