onscroll = function() {
  myFunction();
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

//maybe convert to es5 with babel later
//grab icon to click
const icon = document.getElementById("icon");

//grab menu
const menu = document.getElementById("menu");

//event listener for clicking hamburger menu
icon.addEventListener("click", () => {
  //invoke toggling menu function
  toggleClass("navigation__icon-line-hamburger");
  toggleClass("navigation__icon-line-close");

  //reveal menu
  menu.classList.toggle("navigation__show");
});

//function for toggling menu
const toggleClass = name => {
  //no need to make more dynamic yet - may change
  document
    .querySelectorAll(".line1, .line2, .line3")
    .forEach(el => el.classList.toggle(name));
};

document.querySelectorAll(".home, .projects, .skills, .contact").forEach(el => {
  el.addEventListener("click", () => {
    menu.classList.toggle("navigation__show");
  });
});
