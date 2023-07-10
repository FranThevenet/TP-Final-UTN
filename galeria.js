const menu = document.getElementById("boton-menu");
const navbar = document.getElementById("navbar");
const menuCerrar = document.getElementById("boton-cierre");
const filtrarElementos = document.querySelector(".categorias");


const galeriaItems = document.querySelectorAll('.fotos-galeria');


// Menu
menu.addEventListener("click", () => {
  navbar.style.transform = "translateX(0%)";
});

menuCerrar.addEventListener("click", () => {
  navbar.style.transform = "translateX(-100%)";
});


//Galeria de imagenes

filtrarElementos.addEventListener("click", (evento) => {
  if(evento.target.classList.contains("item-filtrado")) {
    filtrarElementos.querySelector(".active").classList.remove("active")
    evento.target.classList.add("active")
  }
})


// Crear un array vacío para almacenar las imágenes favoritas
let favoritos = [];

// Recorrer cada elemento de la galería y agregar un evento de clic
galeriaItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Verificar si el elemento ya está en favoritos
    const estaEnFavoritos = item.classList.contains('favorito');

    if (estaEnFavoritos) {
      // Si el elemento ya está en favoritos, removerlo de la lista
      item.classList.remove('favorito');
      // Remover la imagen de favoritos
      eliminarDeFavoritos(item);
    } else {
      // Si el elemento no está en favoritos, agregarlo a la lista
      item.classList.add('favorito');
      // Agregar la imagen a favoritos
      agregarAFavoritos(item);
    }
  });
});

// Función para agregar una imagen a la sección de Favoritos
function agregarAFavoritos(item) {
  const titulo = item.querySelector('.info-fotos p').textContent;
  const rutaImagen = item.querySelector('img').src;

  // Verificar si la imagen ya está en favoritos
  const existe = favoritos.some((favorito) => favorito.titulo === titulo);

  if (!existe) {
    // Agregar la imagen favorita al array de favoritos
    favoritos.push({
      titulo: titulo,
      ruta: rutaImagen
    });
  }
}

// Función para eliminar una imagen de la sección de Favoritos
function eliminarDeFavoritos(item) {
  const titulo = item.querySelector('.info-fotos p').textContent;

  // Remover la imagen favorita del array de favoritos
  favoritos = favoritos.filter((favorito) => favorito.titulo !== titulo);
}

// Función para filtrar las imágenes según la categoría
function filtrarImagenes(categoria) {
  galeriaItems.forEach((item) => {
    const itemCategoria = item.classList;

    if (categoria === 'Favoritos') {
      // Mostrar solo las imágenes favoritas
      if (itemCategoria.contains('favorito')) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    } else if (categoria === 'Todos') {
      // Mostrar todas las imágenes
      item.style.display = 'block';
    } else {
      // Mostrar las imágenes de la categoría seleccionada
      if (itemCategoria.contains(categoria)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}

// Obtener todos los elementos de filtro
const filtros = document.querySelectorAll('.item-filtrado');

// Agregar evento de clic a cada filtro
filtros.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    // Obtener la categoría del filtro seleccionado
    const categoria = filtro.dataset.filter;

    // Filtrar las imágenes según la categoría
    filtrarImagenes(categoria);
  });
});

// Mostrar todas las imágenes al cargar la página
filtrarImagenes('Todos');


