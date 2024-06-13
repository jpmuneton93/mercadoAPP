/* consumiendo el API para acceder a los datos de la base de datos */

let url="http://localhost:8080/storeapi/v1/usuario" 

let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render

    let fila=document.getElementById("fila")
    respuesta.forEach(function(usuario){
        let columna=document.createElement("div")
        columna.classList.add("col")
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card", "shadow", "h-100")
       

        let nombreUsuario=document.createElement("h3")
        nombreUsuario.classList.add("text-center")
        nombreUsuario.textContent=usuario.nombre

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreUsuario)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})
.catch(function(respuesta){
    console.log(respuesta)
})