function main(){
    loadAboutMe();
}

function loadAboutMe(){
    console.log("about me")
    document.getElementById("aboutMe").style.display= "block"
    document.getElementById("myExperience").style.display= "none"
    document.getElementById("lifeAway").style.display= "none"
}

function loadMyExperience(){
    console.log("experience")
    document.getElementById("aboutMe").style.display= "none"
    document.getElementById("myExperience").style.display= "block"
    document.getElementById("lifeAway").style.display= "none"
}

function loadLifeAway(){
    console.log("life away")
    document.getElementById("aboutMe").style.display= "none"
    document.getElementById("myExperience").style.display= "none"
    document.getElementById("lifeAway").style.display= "block"
}