const menu = document.getElementById("boton-menu")
const navbar = document.getElementById("navbar")
const menuCerrar = document.getElementById("boton-cierre")


const formularioDeRegistro = document.getElementById("form-register")
const usernameInput = document.getElementById("username-input")
const passwordInput = document.getElementById("password-input")
const fullnameInput = document.getElementById("fullname-input")
const emailInput = document.getElementById("email-input")


const formularioDeLogin = document.getElementById("form-login")
const loginIdentifierInput = document.getElementById("login-identifier-input")
const loginPasswordInput = document.getElementById("login-password-input")



//Menu
menu.addEventListener("click", () => {
    navbar.style.transform = "translateX(0%)"
})

menuCerrar.addEventListener("click", () => {
    navbar.style.transform = "translateX(-100%)"
})



//Formularios
async function subirDatosABD(usuario) {
    
    const res = await fetch("http://localhost:3000/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })

    const datos = await res.json()

    return datos
}



async function iniciarSesion(identifier, password) {
    const res = await fetch("http://localhost:3000/iniciar-sesion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ identifier, password })
    })

    const datos = await res.json()

    return datos
}



formularioDeRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault()

    const usuario = {
        username: usernameInput.value,
        password: passwordInput.value,
        fullname: fullnameInput.value,
        email: emailInput.value
    }

    const usuarioSubido = await subirDatosABD(usuario)

    if(usuarioSubido) {
        console.log(usuarioSubido)
    }
})



formularioDeLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault()

    const usuarioEsValido = await iniciarSesion(loginIdentifierInput.value, loginPasswordInput.value)

    if(usuarioEsValido.message){
        alert(usuarioEsValido.message)
    }


    if(usuarioEsValido.username) {
        alert("Sesion iniciada!")
        localStorage.setItem("datos-de-usuario", JSON.stringify(usuarioEsValido))
    }
})

