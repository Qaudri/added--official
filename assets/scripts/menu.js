let toggleMenu = document.getElementById("menu_button")
let menuItems = document.getElementById("menu_items")
let menuCTA = document.getElementById("menu_cta");

let menuState = false

toggleMenu.addEventListener("click", toggleState);

function toggleState(params) {
  this.menuState != this.menuState;

  if (this.menuState = false) {
    menuItems.style.display = "none";
    menuCTA.style.display = "none";
  } else if (this.menuState = true) {
    menuItems.classList.add = "slide-in";
    menuCTA.classList.add = "slide-in";
  } 
}
