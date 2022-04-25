// empty array to store data
const movieArr = [];


// create Movie class for title and actor object
// 'this' keyword refers to the object it belongs to
class Movie {
    constructor(title, actor = "Not specified"){
        this.title = title;
        this.actor = actor;
    }
    // small function to add cli input to movieArr
    add() {
        movieArr.push(this)
    }
};

// export objects to use elsewhere in app
module.exports = {Movie, movieArr};