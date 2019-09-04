let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.onscroll = function() {
  stickyNavBar()
};

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky")
  }
}

// function main() {
//   home()
// }

// function home(){
//   let home = document.getElementById("home")
//   document.getElementById("home").style.display="flex"
//   document.getElementById("aboutMe").style.display="none"
//   document.getElementById("interests").style.display="none"
//   home.classList.add("padding")
// }

// function aboutMe(){
//   let me = document.getElementById("aboutMe")
//   document.getElementById("home").style.display="none"
//   document.getElementById("aboutMe").style.display="flex"
//   document.getElementById("interests").style.display="none" 
//   me.classList.add("padding") 
// }

// function interests(){
//   document.getElementById("home").style.display="none"
//   document.getElementById("aboutMe").style.display="none"
//   document.getElementById("interests").style.display="flex"
// }

