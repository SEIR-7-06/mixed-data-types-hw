// 1. DATA TYPES

// A light switch that can be either on or off.
// Boolean
lightSwitchOn: true 

// A user's email address.
// String
email: 'johndoe123@gmail.com' 

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Array
const spaceshipParts = [
    hull,
    laserBlasters,
    tractorBeam, 
    warpDrive
]

// A list of student names from our class.
// Array
const sei706 = [
    Brooke,
    Cody,
    DK, 
    Erin, 
    George, 
    Gonzalo, 
    Greg, 
    Jack, 
    Marshall,
    Marshawn, 
    Megan, 
    Neeraj, 
    Nicole, 
    Satya, 
    Stephany 
] 
// A list of student names from our class, each with a location.
// Array, Objects 
const sei706Location = [
    {firstName: 'Brooke',
     city: 'Mesa'
    },
    {firstName: 'DK',
    city: 'Rockland'
    },
    {firstName: 'Erin',
    city: 'San Bruno'
    }
] 

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Array, Objects
const sei706Shows = [
    {firstName: 'Stephany',
    city: 'Escondido',
    favoriteTVShows: ['show1', 'show2', 'show3']
    },
    {firstName: 'Satya',
    city: 'San Francisco',
    favoriteTVShows: ['show1', 'show2', 'show3']
    },
    {firstName: 'Nicole',
    city: 'South Bend',
    favoriteTVShows: ['show1', 'show2', 'show3']
    }
]


//////////////////////////////////////
// 2. TAKE IT EASY
const rainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]
console.log(rainbow[4])

const megan = {
    favoriteFood: 'Massaman Curry',
    hobby: 'reading',
    location: 'Portland',
    favoriteDataType: Boolean 
}
console.log(megan.hobby)