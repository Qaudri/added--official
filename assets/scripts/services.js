let showServices = document.getElementById("services_down")
let hideServices = document.getElementById("services_up")
let Services = document.getElementById("services_list")

showServices.addEventListener("click", revealServices)
hideServices.addEventListener("click", hideServiceslist)

function revealServices (){
  showServices.style.display = "none"
  hideServices.style.display = "block"
  Services.style.display = "grid"
}

function hideServiceslist (){
  showServices.style.display = "block"
  hideServices.style.display = "none"
  Services.style.display = "none"
}