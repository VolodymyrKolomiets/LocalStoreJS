
// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
// Muestra el usuario que has guardado en el DOM
// Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
// 2. Extra]
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage

const nam = document.getElementById('name')
const mail = document.getElementById('mail')
const txt = document.getElementById('txt')
const btn = document.getElementById('btn')


function sub(x) {
    x.preventDefault()
    let userDate = {Name: nam.value,
                   Email: mail.value,
                   Texto: txt.value}
    localStorage.setItem('newUser', JSON.stringify(userDate))
    const usuario = JSON.parse(localStorage.getItem('newUser'))
    
    let user = document.createElement('h3') //se puede poner fuera de la funcion  y se mostraria solo una linea x click
    
    //   user.textContent = `${userDate.Name} ${userDate.Email} ${userDate.Texto}`
    
    user.innerHTML = `<p>${usuario.Name}</p> <p>${usuario.Email}</p> <p>${usuario.Texto}</p><hr>`
    document.body.appendChild(user)
}
//let user = document.createElement('h3')

btn.addEventListener('click', sub)

//////// Crea un botón para borrar todos los contactos guardados en Local Storage/////////

const res = document.getElementById('reset')

res.addEventListener('click', borrar)

function borrar (x) {
    x.preventDefault()
    localStorage.clear()
    
    const h = document.querySelectorAll('h3')
    for (let i = 0; i < h.length; i++) {
        
        h[i].remove()
    }
}


