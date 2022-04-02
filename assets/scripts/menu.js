let toggleMenu = document.getElementById("menu_button")
let menuItems = document.getElementById("menu_items")
let menuCTA = document.getElementById("menu_cta");
let menuState = false


toggleMenu.addEventListener("click", toggleState);

function toggleState() {
  this.menuState != this.menuState;

  if (this.menuState = false) {
    menuItems.style.display = "none";
    menuCTA.style.display = "none";
  } else if (this.menuState = true) {
    menuItems.style.display = "block";
    menuCTA.style.display = "block";
  } 
}
