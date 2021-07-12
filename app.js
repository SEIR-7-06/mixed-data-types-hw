////////////////////////////////////////////////////
// MIXED DATA TYPES HOMEWORK - ERIN OGDEN

// QUESTION 1 DATA TYPES

// A light switch that can be either on or off.
// BOOLEAN
let lightSwitch = true;

// A user's email address
// STRING
let userEmail = 'erininabox@gmail.com';

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// ARRAY
const spaceship = ['hull', 'laswer blasters', 'tractor beam', 'warp drive'];

// A list of student names from our class.
// ARRAY
const studentNames = ['Erin', 'Brooke', 'Megan', 'Nicole', 'Stephany', 'Gonzalo', 'George', 'Blake', 'Cody', 'DK', 'Greg', 'Jack', 'Marshall', 'Marshawn', 'Neeraj', 'Satya', ];

// A list of student names from our class, each with a location.
// OBJECT
const student1 = {
    studentFirstName: 'Erin',
    studentLocation: 'San Bruno, CA',
};
// repeat this for additional students

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// OBJECT
const student2 = {
    studentFirstName: 'Erin',
    studentLocation: 'San Bruno, CA',
    faveTVShows: ['Nancy Drew', 'Handmaids Tale', 'Star Trek'],
}


// QUESTION 2 - TAKE IT EASY

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(rainbow[4]);

const erin = {
    faveFood: 'coffee',
    hobbies: ['cross-stitch', 'playing with my cats', 'coding with my brother', 'peloton', 'reading', 'playing games'],
    townName: 'San Bruno',
    faveDataType: 'boolean',
}
console.log(erin.hobbies);
