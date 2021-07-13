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

