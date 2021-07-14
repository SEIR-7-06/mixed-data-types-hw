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


// const inception = {
//   reality: {
//       dreamLayer1: {
//           dreamLayer2: {
//               dreamLayer3: {
//                   dreamLayer4: {
//                       dreamLayer5: {
//                           dreamLayer6: {
//                               limbo: "Joseph Gordon Levitt"
//                          }
//                       }
//                   }
//               }
//           }
//       }
//   }
// }

// let result = inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// console.log(result);

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// let bondTitles = [];

// for(let i  = 0; i < bondFilms.length; i++){
//   bondTitles.push(bondFilms[i].title);
// }

// console.log(bondTitles);

// let oddBonds = [];
// for(let i = 0; i < bondFilms.length; i++){
//   if(bondFilms[i].year % 2 === 1){
//     oddBonds.push(bondFilms[i].year)
//   }
// }

// console.log(oddBonds);

let gross = 0;
let result = "";
  for(let i = 0; i < bondFilms.length; i++){
    let number = (bondFilms[i].gross);
    number = Number(number.replace(/[\,\$]/g,""));
    gross += number;
    result = gross.toLocaleString("us-EN");
     
  } 

  console.log("World-wide gross for all James Bond films $"+ result);

  
  









