const { boatHome } = require("./fishingBoat.js")
//grabs what function fishingboat.js Exported

const mongerInventory = () => {
const fishAvail = []
for (const fish of boatHome) {
    if (fish.amount > 9 && fish.price < 7.50 ) {
        fishAvail.push(fish)  
    }
}
return fishAvail;
}
// function that adds chefs budget and makes a inventory of available fish

const chefsInventory = () => {
const chefsAvail = []
const chefBudget = 5.00
for (const fish of boatHome) {
    if (fish.price < chefBudget)
    chefsAvail.push(fish)   
    }
    return chefsAvail
}

//----invoke function
mongerReady = mongerInventory()
//----checks to make sure i feed fishAvail Array is fed correct data from boatHome array
//console.log(mongerReady)


chefOptions = chefsInventory()
//console.log(chefOptions)

    
    
 //exports from MongerReady function, which holds fishAvail array
 //exports from chefOptions function, which holds chefAvail array
 module.exports = {mongerReady}
 module.exports = {chefOptions}

