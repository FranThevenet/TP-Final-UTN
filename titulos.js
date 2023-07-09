const menu = document.getElementById("boton-menu")
const navbar = document.getElementById("navbar")
const menuCerrar = document.getElementById("boton-cierre")


//Menu
menu.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
})

menuCerrar.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})
