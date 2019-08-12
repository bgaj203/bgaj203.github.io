function readFile (){
    fetch("journey.json")
    .then(Response => Response.json())
    .then(jsonResponse => console.log(jsonResponse));
}

function mobileNavigation() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }