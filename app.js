// Data Types

// A light switch that can be either on or off -- String in a way of a for loop

// A users's email address -- String in an Array 

// A spaceship with a hull, 
// laser blasters, tractor beam, 
// and warp drive ---- Objects

//  A list of students names from our class--- Arrays

//  A list of students names from our class, 
// each with a location and each with a list of 
// favorite tv shows. --- Objects

// //////////////////////////////////////////////////////


//  2. Take it Easy

const rainbow = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple"
    
]; 

console.log(rainbow[4]);

const me = {
    favFood: "Warm desserts",
    hobbies: ["reading", "singing"],
    location: "Escondido",
    favDatatype: "Array"
} 

console.log(me.hobbies);


// ////////////////////////////////////////////


//  3. Crazy Object!

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
