// NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//   COLOR CHNAGE
var myNav = document.getElementById("myTopnav");
window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 150 ||
    document.documentElement.scrollTop >= 150
  ) {
    myNav.classList.add("nav-colored", "navfont");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored", "navfont");
  }
};

// COLOR CHANGE

// NAVBAR
