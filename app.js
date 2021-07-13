////Data Types

//a light switch that's on or off --> i would use a boolean value 
// and a conditional that can check if lightOn is true or false and then act on it
//so that if it isn't on/off it can be changed
//code snippet: 
// let lightOn = false;
// if (lightOn) {
//     console.log("Your lights are already on.");
// } else if (!lightOn) {
//     console.log("Let's turn the lights on. One moment");
//     lightOn = true;
//     console.log(lightOn);
//     console.log("See, we've turned the lights on.")
// };

//user's email address --> i would save that as a string
//that way when there is no email address it can stay empty
//and also take numbers and letters with ease
//code snippet:
//let email = "123@yahoo.com";

//spaceship --> object because it has so many properties
//code snippet:
// const spaceship = {
//     warpDrive: true,
//     beamType: "tractor blasters",

// };

//student names list --> array
//let studentList = ["John", "Luke", "David","Marcus"];

//student name w/location --> object within array
//code snippet:
// const students = [
//     {name: "Edith",
//      location: "Georgia"},
//     {name:"Lorelei",
//     location: "Estonia"}
// ];

//student names w/location/tv shows --> an array w/nested objects
//code snippet:
// const students = [
//     {name: "Danity",
//     location: "South Central",
//     favoriteTv: ["Law and Order:SVU", "Hoarders",]
//     },
//     {name: "Monica",
//     location: "NYC",
//     favoriteTv: ["Rick and Morty", "Bob's Burgers", "Archer"]
//     },
//     {name: "Corey",
//     location: "Atlanta",
//     favoriteTv: ["The Wonderful World of Gumball", "Regular Show", "Adventure Time"]
//     },
//     {name: "Danity",
//     location: "South Central",
//     favoriteTv: ["MasterChef", "House Hunters", "Love it or List It"]
//     }
// ];

///////Take it Easy
//q1
// let rainbowColors = [
//     "Red", 
//     "Orange", 
//     "Yellow", 
//     "Green", 
//     "Blue", 
//     "Indigo", 
//     "Violet"];

//     //q2
//     console.log(rainbowColors[4]);

//     //q3
//     const aboutMe = {
//         favoriteFood: "rice",
//         hobby: "writing",
//         currentTown: "South Bend",
//         favDataType: "object"
//     };

//     //q4
//     console.log(aboutMe.hobby);

///////Crazy Object
// const crazyObject = {
//     taco: [
//       {
//         meat: 'steak',
//         cheese: ['panela', 'queso', 'chihuahua']
//       },
//       {
//         meat: 'chicken',
//         salsa: ["pico", "hot", "hotter", "really hot", 
//         "really really hot", "omg my mouth is burning"]
//       },
//     ],
//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//       quotes: ["Pretty pretty prettayyyyy good", 
//       "Is that a parkinson's thing?", 
//       "women love a self confident bald man", 
//       "I'm a walking talking enigma"],
//       characters: [
//         {
//           name: "Jeff",
//           occupation: "manager"
//         },
//         {
//           name: "funkhauser",
//           occupation: "tv dude"
//         },
//         {
//           name: "susie",
//           occupation: "jeffs wife",
//           favourtieHobby: "Swearing at Larry and Jeff"
//         },
//       ]
//     }
//   }

//   console.log(crazyObject.taco[1].salsa[5]);
//   console.log(crazyObject.larry.quotes[0]);
//   console.log(crazyObject.larry.characters[2].favourtieHobby);
//   console.log(crazyObject.larry.nicknames[1]);
//   console.log(crazyObject.larry.characters[1]);