function keydownAction(event) {
  // TODO: Complete keydown function
  var monkeyGuts = document.getElementById("key");
  monkeyGuts.textContent = event.key;
  console.log(event);
}

function keyupAction() {
	
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

