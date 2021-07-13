// 1. Data types

// Boolean
const lightOn = true;

// String
const emailAddress = "off2mxrs@gmail.com";

// Object
const spaceship = {
    build: 'hull', 
    weapon: 'laser blasters',
    weapon2: 'tractor beam',
    speed: 'warp drive',

}

// Array
const students = [
    'Marshawn',
    'Neeraj',
    'Stephany',
    'Satya',
]

// Objects nested
const studentLocation = {
    marshawn: {
        location: 'Sacramento'
    },
    greg: {
        location: 'San Fran'
    }, 
}

// Objects and Arrays
const studentInfo = {
    marshawn: {
        location: 'Sacramento',
        tvShow: ['GOT', 'Vikings', 'Snowfall'],
    },
    greg: {
        location: 'San Fran',
        tvShow: ['SNL', 'Saved by the bell', 'the Office'],
    }, 
}

//////////////////////////////////////////
// 2. Take it easy

const rainbow = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Indigo',
    'Violet',
]

console.log(rainbow[4]);

const me = {
    name: 'Marshawn',
    favFood: 'Mac & Cheese',
    hobby: 'Dance',
    town: 'Natomas',
    favDataType: 'Array',
}

console.log(me.hobby);

/////////////////////////////////
// 3. Cray Object

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


  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.nicknames[1]);
  console.log(crazyObject.larry.characters[1]);