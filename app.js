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

//////ObjectCeption
// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: "Joseph Gordon Levitt"
//                            }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//  }

//  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
//  console.log(inception);

/////Bond-Films
// const bondFilms = [
//     { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
//     { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
//     { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
//     { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
//     { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
//     { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
//     { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
//     { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
//     { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
//     { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
//     { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
//     { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
//     { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
//     { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
//     { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
//     { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
//     { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
//     { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
//     { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
//     { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
//     { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
//     { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
//     { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
//   ];
  
  ////question 5
// let i;
// let y = []
// for (i = 0; i < bondFilms.length; i++) {
//     y.push(bondFilms[i].title);
// }
// console.log(y);

///question 6
// let i;
// let y = []
// for (i = 0; i < bondFilms.length; i++) {
//     if (bondFilms[i].year % 2 != 0) {
//         y.push(bondFilms[i]);
//     }
// }
// console.log(y);

///question 7 Come Back to
// let i;
// let grossList =0;
// let grossTotal = 0;

// let stringGross = ""
// for (i = 0; i < bondFilms.length; i++) {
//    let stringGross = bondFilms[i].gross.replaceAll("$", "").replaceAll(",", "")
//    grossList = parseInt(stringGross);
//   grossTotal+=grossList
// }
// console.log(grossTotal)



