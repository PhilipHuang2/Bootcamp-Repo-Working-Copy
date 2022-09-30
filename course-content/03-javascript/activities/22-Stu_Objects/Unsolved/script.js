//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Mocha Latte",
    numOfSugars: 1,
    orderReady: true
}

var sugars = "numOfSugars"

console.log("You have ordered a " +customerOrder.drinkName + ".");
console.log("It has " + customerOrder[sugars] + " sugar cubes.");


if(customerOrder["orderReady"])
    console.log("Ready for pick up.");
else
    console.log("Still in order queue.");