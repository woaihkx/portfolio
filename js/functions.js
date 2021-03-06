/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav sticky") {
    x.className += " responsive";
  } else {
    x.className = "topnav sticky";
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  // Get the navbar
  var navbar = document.getElementById("myTopnav");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    //x.className += " responsive";
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
