const yargs = require("yargs");


const { Movie, movieArr } = require("./utils")


//Processes argument vector
console.log(process.argv);

console.log(yargs.argv);

//Using new keyword to reference the Movie class
const app = (yargsObj) => {
    if(yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movieArr)
    } else {
        console.log("Incorrect Command")
    }
};

app(yargs.argv);