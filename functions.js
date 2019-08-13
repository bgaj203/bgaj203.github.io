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
  console.log("in here")
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky")
  }
}