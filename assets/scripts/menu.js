let menuBtn = document.getElementById("menu_button")
let closeBtn = document.getElementById("close_button")
let menuItems = document.getElementById("menu_items")

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuItems.addEventListener("click", closeMenu);


function openMenu(params) {
  menuItems.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeMenu(params) {
  menuItems.style.display = "none";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
}
