//Navigation bar animation starts here
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNaveBar()};

// Get the navbar
var navbar = document.getElementById("navbar");
var mobileNavbar = document.getElementById("mobileNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its 
//scroll position. Remove "sticky" when you leave the scroll position
function stickyNaveBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    mobileNavbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    mobileNavbar.classList.remove("sticky");
  }
} 

//Navigation bar animation stops here