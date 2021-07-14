//   * A light switch that can be either on or off.
//  boolean
//  light = true;
//   * A user's email address.
//  string
//  let emailAddress = Dataplant@outlook.com
//   * A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//  object
//  spaceship ={
//     hull: 100
//     tractor-beam: 100
//     warp-drive: 100
//  }
//   * A list of student names from our class.
//  Array
//  let listNames = []
//   * A list of student names from our class, each with a location.
//  Array in Array
//  let studentNameLoc = [[Max, New York],[Jane, Los Angeles]]
//   * A list of student names from our class, each with a location and each with a list of favorite tv shows.
//  objects in array
//  let arrayObj = [student1={}, student2={}]

const rainbowColor = ['red','green','blue','purple','yellow','orange']
// Not quite sure what the exact colors of the rainbow are, pls dont judge me
let getBlue = ''
for(let i=0; i<rainbowColor.length; i++){
    if(rainbowColor[i] === 'blue'){
        getBlue = rainbowColor[i]
    }
}
console.log(getBlue)
let dkNam = {
    favFood: 'South American',
    hobby: 'HackeySack',
    town: 'DC',
    favData: 'Arrays',
}
console.log(dkNam.hobby)
///////////////////Crazy Objects
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
  ////////////Crazy Objects (contd.)
  console.log(crazyObject['taco'][1].salsa[5])
  console.log(crazyObject.larry['quotes'][0])
  console.log(crazyObject.larry.characters[2]['favourtieHobby'])