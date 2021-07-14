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