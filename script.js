///// Q.1 Which data Type ///////////

// Light Switch: Boolean
// Email Address: String
// Spaceship: Object
// List of student names: Array
// List of student names with location: Object
// List of student names with list of favorite TV shows
// -- Object with embedded array(s)

///// Take it Easy ////////////

function findPosition(data, searchParam){
   
    return data.indexOf(searchParam)
}

let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let lookingFor = "blue"

let arrayPos = findPosition(rainbow, lookingFor);
console.log(arrayPos)





