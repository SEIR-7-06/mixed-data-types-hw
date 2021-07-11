/* Cody Tsao
SEI 7.06
Mixed Data Types */

// 1. Data Types

/* 
A light switch that can be either on or off.
Boolean, lightswitch = true or false
A user's email address.
String, string just contains email address
A spaceship with a hull, laser blasters, tractor beam, and warp drive.
Object, variables for each spaceship component
A list of student names from our class.
Array, each index contains a name
A list of student names from our class, each with a location.
Array of Objects, each index contains the object that contains a string w/ the location
A list of student names from our class, each with a location and each with a list of favorite tv shows.
Array of Objects, each index contains an object with each of the required information
 */

//2. Take it Easy
/* 1 */
const arr = ["red", "yellow", "orange", "green", "blue", "purple"]
/* 2 */
console.log(arr[4])
/* 3 */
const cody = {
    favoriteFood: "Ice Cream",
    hobby: "Gaming",
    currentLocation: "Santa Cruz",
    favoriteDataType: "Array"
}
/* 4 */
console.log(cody.hobby)

//3. Crazy Object!
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
 
  console.log(crazyObject.taco[1].salsa[crazyObject.taco[1].salsa.length -1])
  console.log(crazyObject.larry.quotes[0])
  console.log(crazyObject.larry.characters[2].favourtieHobby)
  console.log(crazyObject.larry.nicknames[1])
  console.log(crazyObject.larry.characters[1])
  

