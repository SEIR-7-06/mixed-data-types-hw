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


// QUESTION 3 - CRAZY OBJECT!

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
  
  // "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
  // "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
  // "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);  
  // "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);  
  //  The object the contains the name `funkhauser`
console.log(crazyObject.larry.characters[1]);


// QUESTION 4 - OBJECT-CEPTION

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
 
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
