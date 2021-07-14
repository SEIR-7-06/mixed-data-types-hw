// 1. Data types

// * A boolean where true means is on and false means off.  I would use a function tha would return true if it was on and false if it was off.
// * I would use a string for the email.  The data structure I would use would be an object where one of the key-value pairs is email address and their email.
// * I would make an array of strings for the spaceship with the hull, laser blasters, tractor beams and warp drive as indices.
// * The names would be strings, and they would be in array.
// * The names and locations would be strings and they would be in an object of the student.
// * The names, locations, and shows would be strings in an object of the student.  The shows would be in an array in the obect.

// 2. Take it easy

// 1.
const rainbow = ["red", "orange", "yellow,", "green", "blue", "indigo", "violet"];

// 2. 

console.log(rainbow[4]);

// 3.

const marshall = {
    favoriteFood: "pizza",
    hobby: "walking",
    hometown: "Seattle",
    favoriteDatatype: "boolean"
};

// 4.

console.log(marshall.hobby);

// 3. Crazy Object

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
          favoriteHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

console.log(crazyObject.taco[1].salsa[5]);

console.log(crazyObject.larry.quotes[0]);

console.log(crazyObject.larry.characters[2].favoriteHobby);

console.log(crazyObject.larry.nicknames[1]);

console.log(crazyObject.larry.characters[1]);