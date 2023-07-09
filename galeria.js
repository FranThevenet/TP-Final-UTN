const menu = document.getElementById("boton-menu")
const navbar = document.getElementById("navbar")
const menuCerrar = document.getElementById("boton-cierre")
const filtrarElementos = document.querySelector(".categorias")
const fotosGaleria = document.querySelectorAll(".fotos-galeria")

//Menu
menu.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
})


menuCerrar.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})



//Galeria de imagenes
filtrarElementos.addEventListener("click", (evento) => {

    if(evento.target.classList.contains("item-filtrado")) {

      filtrarElementos.querySelector(".active").classList.remove("active")

      evento.target.classList.add("active")



      const valorFiltrado = evento.target.getAttribute("data-filter")

      fotosGaleria.forEach(foto => {

        if(foto.classList.contains(valorFiltrado) || valorFiltrado == "Todos") {

            foto.classList.remove("esconder")

            foto.classList.add("mostrar")
        }else {

            foto.classList.add("esconder")
            
            foto.classList.remove("mostrar")
        }
        
      })
    }
})

