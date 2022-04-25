// save yargs to variable using require keyword
const yargs = require("yargs");


// require objects we need from utils folder
// by default node looks for index.js, so we don't need to specify
const { Movie, movieArr } = require("./utils")

// example of yargs structure
//Processes argument vector
console.log(process.argv);

console.log(yargs.argv);

// functinality to check user input and save data
// pass in YargsObj as permameter 
//Using new keyword to reference the Movie class
const app = (yargsObj) => {
    if(yargsObj.add) {
        // use new Movie class to collect data
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        // use add function to save data to array
        movie.add();
        console.log(movieArr)
    } else {
        console.log("Incorrect Command")
    }
};


// call app function and pass in terminal input as arguements
app(yargs.argv);