  let menuBtn = document.getElementById("menu_button")
  let closeBtn = document.getElementById("close_button")
  let menuItems = document.getElementById("menu_items")

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  if ((window.innerWidth < 1024)) {
    menuItems.addEventListener("click", closeMenu);
  }

  function openMenu(params) {
    menuItems.classList.add("menu-slide-down");
    menuItems.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
  }

  function closeMenu(params) {
    menuItems.classList.remove("menu-slide-down")
    menuItems.classList.add("menu-slide-up")
    setTimeout(() => {
      menuItems.style.display = "none";
      menuItems.classList.remove("menu-slide-up")
    }, 1000);

    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  }

