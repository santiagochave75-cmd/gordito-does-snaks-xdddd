/*function saludo() {
   let nombreDelUsuario = document.getElementById("XxsantisxX").value
alert("welcome c:" +nombreDelUsuario)
 
}
function sumar(numbersixhundred,numbersevenhundred)
{
   return numbersix+numberseven


}

alert("suma entre 6 y 7: "+sumar(8,5))
/*
uno.function generar numero
dos.adivinar 1 numero                     
tres.ganaste
4.perdiste
*/

function generarNumero() {
return Math.floor(Math.random()*10) +1
}

let generacionDelNumero = generarNumero()

function adivinarElNumero(numero){
   if(numero == generacionDelNumero){
    generacionDelNumero = generarNumero()
puntajeDelJugador = puntajeDelJugador +1

if(puntajeDelJugador == 1){
   puntos.textContent = puntajeDelJugador + " punto"
}
else{ puntos.textContent = puntajeDelJugador + " puntos"
}

  return "GANASTE!!"
} else{ 
 vidasDelJugador = vidasDelJugador -1
 vidasDelJugadorTest.textContent = vidasDelJugador
 if(vidasDelJugador == 0){
   alert("GAME OVER")
 }
 if(vidasDelJugador == 2){
   vida3.style.display = "none"
 }
 if(vidasDelJugador == 1){


   vida2.style.display = "none"

 }
if(vidasDelJugador == 0){

vida1.style.display = "none"

}


   return "PERDISTE ;C" 
   

}
}


let boton = document.getElementById("botoncito")
boton.addEventListener("click",function(){
   let numeroDelUsuario = document.getElementById("santipro").value
   alert(adivinarElNumero(numeroDelUsuario))
})
 
let cajaDeNombre =  document.getElementById("XxsantisxX")
let botonGuardarNombre = document.getElementById("arrozConHuevo")
let mensaje = document.getElementById("saladitas")

botonGuardarNombre.addEventListener("click",function(){
mensaje.textContent = "tu user: "+cajaDeNombre.value

})

let puntajeDelJugador = 0

let puntos = document.getElementById("papaDeJamaica")
puntos.textContent = puntajeDelJugador + " puntos"
let vidasDelJugador = 3

let vidasDelJugadorTest = document.getElementById("vidasDelJugador")
vidasDelJugadorTest.textContent = vidasDelJugador

// 1.crear la funcion reiniciar juego
// 2.cuando el usuario perdio debemos utilizar la funcion para reiniciar el juego (del paso 1)
//crear la logica para actualizar las imagenes de las vidas

let vida1 = document.getElementById("vida1")
let vida2 = document.getElementById("vida2")
let vida3 = document.getElementById("vida3")


// 1.crear boton en html para reiniciar el juego y que se muestrte unicamente cuando ya no tenemos vidas
// 2.si no tenemos vidas bloqueamos o escondemos el boton de adivinar

let reiniciar = document.getElementById("reiniciar")
reiniciar.addEventListener("click",function(){
   puntajeDelJugador = 0
   vidasDelJugador = 3
   vida1.style.display = "flex"
   vida2.style.display = "flex"
   vida3.style.display = "flex"
   puntos.textContent = puntajeDelJugador + " puntos"

   
   console.log("puntaje del jugador:"+ puntajeDelJugador)
   console.log("vidasDelJugador:"+ vidasDelJugador)
}
)


// 1.cuando el juego se reinicie con el boton necesitamos actualizar el texto de las vidas 
// y hacer que los corazones se queden en horizontal 

// 2. cuando se llegue a 0 vidas desahilitar el boton de adivinar el numero 
