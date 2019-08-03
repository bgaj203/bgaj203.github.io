function readFile (){
    fetch("journey.json")
    .then(Response => Response.json())
    .then(jsonResponse => console.log(jsonResponse));
}