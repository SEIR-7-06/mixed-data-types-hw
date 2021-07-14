////////////QUESTION 1//////////////////////
// A light switch that can be either on or off.
//I would use Boolean t/f stetement to see if the light is either on or off
// let lightSwitchOn = true

// A user's email address.
//That would be a string
//const emailAddress = "mikeymkie10@gmail.com"

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//That would be an object with a bunch of strings describing it
//const spaceShip = {"hull", "laser blasters", "tractor beam", "and warp drive"}

// A list of student names from our class.
// A string
//const students = "Amy" , "Nicole" , "Ben" , "Jon";

// A list of student names from our class, each with a location.
//Object 
// const students = { Amy: Texas, Nicole: Indiana, Ben: Yorkshire, Jon: Florida,}

//Object with arrays
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// const students = { "Name" : "Amy", "Location" : "Texas", "Favorite TV Shows" : [Breaking Bad, The Simpsons, Futurama]}, 
//{ "Name" : "Nicole" , "Location" : "Indiana", "Favorite TV Shows" : [Family Guy, BackYardigans, Yoga Network] }

////////////QUESTION 2//////////////////////
const colors = ["red", "orange", "yellow", "green", "blue", "indogo", "violet"]
let accessBlue = colors[4];
console.log(accessBlue);

const Jack = {
   FaveFood: 'Spicey Chicken Sandwiches',
   Hobby: 'Juggling',
   Town: 'San Jose',
   Datatype: 'Object'
   }
   console.log(Jack.Hobby);


//////////QUESTION 3//////////////////////
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
// Use crazyObject to log the following.
// "omg my mouth is burning"
// console.log(crazyObject.taco[1].salsa[5]);
// // "Pretty pretty prettayyyyy good"
// console.log(crazyObject.larry.quotes[0]);
// // "Swearing at Larry and Jeff"
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// // "Chicken Teriyaki Boyyyyyy"
// console.log(crazyObject.larry.nicknames[1]);
// // The object the contains the name funkhauser
// console.log(crazyObject.larry.characters[1].name);

////////////QUESTION 4//////////////////////
//Change the value of limbo to null.
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
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = 'null';
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

/////////////QUESTION 5/////////////////////


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


//   let exampleObj = {
//       "title : "Skyfall",
//       "year" : 2012,
//       "actor": "Daniel Craig",
//       "gross": "1,108,561,008"
//   }

//if the page asks you to do something 'for every something', then they 
//want a for loop or while loop
  ///create a new array called bondTitles


  const bondTitles = [];
  ///Pseudocode for the problem!
  ///Step 1 loop over bond films and grab the title value pair
  //Step 2 grab the title value pair
  //Step 2a: make a temporary "holding" variable to store the title
  //Step 2b store the .title into that holding variable
  //Step 3: .push the title into bondTitles (add info to array)
  
  for (let i = 0; i<bondFilms.length; i++){
        let title = bondFilms[i]["title"]
        //grabs the title only
        console.log(title)
        bondTitles.push(title)
  }


///////////QUESTION 6 - oddbonds
const oddBonds = [];
for (let i=0; i<bondFilms.length; i++){
    if (bondFilms[i].year %2 != 0) {
        oddBonds.push(bondFilms[i].year);
    };
};
    console.log(oddBonds)


// ///////////QUESTION 7/////////////
// let grossSum = 0;
// for (let i=0; i<bondFilms.length; i++){
//     let amounts = bondFilms[i].gross;
//     // console.log(amounts)
//     ///we got dem numbers, not we replace all $
//     //replace commas
//     //return sum 
//    const amounts1 = amounts.replace('$', '').replaceAll(',','');
// // grossSum.push(parseInt(amounts1))
// grossSum += (parseInt(amounts1))
// }
// console.log(grossSum);
