var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var person = {
    "firstName" : firstNameInput.value,
    "lastName": lastNameInput.value,
    "email" : emailInput.value,
    "password" : passwordInput.value
  }
  console.log(person);
  localStorage.setItem("Name", JSON.stringify(person));

  console.log(typeof localStorage.getItem("ObjectPerson"));
  console.log( JSON.parse(localStorage.getItem("Name")));
  // TODO: Set new submission to local storage 
  
});
