///// Q.1 Which data Type ///////////

// Light Switch: Boolean
// Email Address: String
// Spaceship: Object
// List of student names: Array
// List of student names with location: Object
// List of student names with list of favorite TV shows
// -- Object with embedded array(s)

///// Q. 2 Take it Easy ////////////

// function findPosition(data, searchParam){
   
//     return data.indexOf(searchParam)
// }

// let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// let lookingFor = "blue"

// let arrayPos = findPosition(rainbow, lookingFor);
// console.log(arrayPos)

// const crazyObject = {
//     taco: [
//       {
//         meat: 'steak',
//         cheese: ['panela', 'queso', 'chihuahua']
//       },
//       {
//         meat: 'chicken',
//         salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//       },
//     ],  //end taco

//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],

//       quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],

//       characters: [
//             {
//             name: "Jeff",
//             occupation: "manager"
//             },
//             {
//             name: "funkhauser",
//             occupation: "tv dude"
//             },
//             {
//             name: "susie",
//             occupation: "jeffs wife",
//             favouriteHobby: "Swearing at Larry and Jeff"
//             //changed "favortie" to "favourite"
//             },
//       ] //end characters

//     } //end Larry
//   }

// //So, how do you build code to find 
// //"omg, my mouth is burning" 
// //crazyObject.taco[meat[1]].salsa[6]

// //"Pretty..."
// //crazyObject.larry.quotes[0]

// //"Swearing..."
// //crazyObj.larry.characters.name["susie"](favoriteHobby)

// //"Chicken..."
// //crazyObj.larry.nicknames["Chicken...""]

// //Return the object that contains "funkhauser" @ larry.chars.[name: "funkhauser"]

// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0])
// console.log(crazyObject.larry.characters[2].favouriteHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);


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

let result = inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(result);











