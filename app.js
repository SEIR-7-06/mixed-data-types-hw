//1. 
let lightSwitch = true

const userEmailAddress = "email@address.com"

const spaceShip = ['hull', 'lasers blasters', 'tractor beam', 'warp drive']

const students = ['Tim', 'Jim', 'Pam']

const studentsWLocations = {
    Larry: {
        firstName: "Larry",
        lastName: "Smith",
        location: "San Antonio",
        tvShows: ["The Sopranos", "Boardwalk Empire", "Succession"]
    },
    Barry: {
        firstName: "Barack",
        lastName:"Obama",
        location: "Washington, D.C.",
        tvShows: ["South Park", "Mr. Show", "Arrested Development"]
    },
    Gary: {
        firstName: "Gary",
        lastName: "The Snail",
        location: "Bikini Bottom",
        tvShows: ["NBA Live", "SportsCenter", "I think you should leave" ]
    }
}

//2. Take it Easy
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet']
blueAccess = null
function getBlue(){
    for (let i = 0; i < rainbow.length; i++){
        if (rainbow[i] === 'blue') {
            blueAccess = rainbow[i]
        }
    }
}
getBlue()
console.log(blueAccess)

const gregDanko = {
    firstName: "Greg",
    lastName: "Danko",
    favFood: "kofte",
    hobby: "writing",
    ciudad: "San Francisco",
    favDType: "Objects"

}
let theHobby = gregDanko.hobby
console.log(theHobby)

//3. Crazy Object

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

let omgMyMouth = crazyObject.taco[1].salsa[5]
console.log(omgMyMouth)
let pppgood = crazyObject.larry.quotes[0]
console.log(pppgood)
let swearing = crazyObject.larry.characters[2].favourtieHobby
console.log(swearing)
let chickenterryboy = crazyObject.larry.nicknames[1]
console.log(chickenterryboy)
let funkman = crazyObject.larry.characters[1]
console.log(funkman)

//Object-ception
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
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null
 console.log(inception)