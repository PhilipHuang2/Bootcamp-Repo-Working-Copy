var container = document.querySelector(".container");

container.addEventListener("click", 
function(event)  {
  var element = event.target;
  var state = element.getAttribute("data-state");
  var number = element.getAttribute("data-number");
  if(state == "hidden")
  {
    element.textContent = number;
    element.setAttribute("data-state", "show");
  }
  else {
    element.textContent = "";
    element.setAttribute("data-state", "hidden");
  }

  // TODO: Complete function
}
);
