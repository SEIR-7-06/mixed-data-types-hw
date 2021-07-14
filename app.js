// A light switch that can be either on or off.
// BOOLEAN
let light = true

// A user's email address.
// STRING
    let email = 'satyasette1@gmail.com'

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// ARRAY
    const spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']

// A list of student names from our class.
// ARRAY
    const students = ['Stephany', 'Megan', 'Jack']

// A list of student names from our class, each with a location.
// OBJECT
    const students2 = [
        {name : 'Stephany', "location" : 'location' },
        {name : 'Megan', "location" : 'location' },
        {name : 'Jack', "location" : 'Santa Cruz' }
        ]

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// OBJECT
const students3 = [
    {name : 'Stephany', 
    location : 'location1',
    favoriteShows : ['show 1', 'show 2', 'show 3']
},

    {name : 'Megan',
     location : 'location2', 
     favoriteShows : ['show 1', 'show 2', 'show 3']
    },

    {'name' : 'Jack',
     "location" : 'location3',
     favoriteShows : ['show 1', 'show 2', 'show 3']
    }
    ]

// 🔴 Commit: "data types"

// Make an array that holds all of the colors of the rainbow.

const rainbows = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue'
]

// Write code that will access "blue" from the rainbow array.

console.log(rainbows[4])

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const satya = {
    name: 'Satya',
    town: 'San Francisco',
    food: 'Steak',
    hobby: 'Gaming',
    favoriteDatatype: 'Objects'
}

// Write code that will access your hobby from the object that you just created.

console.log(satya.hobby)

// 🔴 Commit: "data structures"

// 3. Crazy Object!

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

console.log(crazyObject.taco[1].salsa[5])
console.log(crazyObject.larry.quotes[0])
console.log(crazyObject.larry.characters[2].favourtieHobby)
console.log(crazyObject.larry.nicknames[1])
console.log(crazyObject.larry.characters[1].name)

// 🔴 Commit: "crazyObject"
