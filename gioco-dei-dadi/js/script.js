//Creato un numero da 1 a 6 per il giocatore 
let numeroGiocatore = Number.parseInt(Math.floor(Math.random() * 6) + 1)

//Creato un numero da 1 a 6 per il computer
let numeroComputer = Number.parseInt(Math.floor(Math.random() * 6) + 1)
console.log(numeroGiocatore, "VS", numeroComputer)

// Presi e creati in numeri nell html 
const numeroGiocatoreAppend = document.querySelector("#numero-giocatore")
const numeroComputerAppend = document.querySelector("#numero-computer")
const numeroGiocatoreEl = document.createElement("h1");
const numeroComputerEl = document.createElement("h1");
numeroGiocatoreEl.append(numeroGiocatore)
numeroComputerEl.append(numeroComputer)
numeroGiocatoreAppend.appendChild(numeroGiocatoreEl)
numeroComputerAppend.appendChild(numeroComputerEl)

//Presi e creati il risultato della partita!
//Determina il vincitore o o il pareggio
const risultatoAppend = document.querySelector("section > div.risultato")
const risultatoEl = document.createElement("h1")

if (numeroGiocatore == numeroComputer){
    risultatoEl.innerHTML = "Mi dispiace, hai pareggiato. Come si dice, meglio una giornata di pioggia che un pareggio."
    console.log("Better the rain, same number !")
} else if(numeroComputer > numeroGiocatore){
    risultatoEl.innerHTML = "Mi dispiace hai perso. Non ti abbatere, prova di nuovo."
    console.log("I'm sorry. The pc bet you.")
} else {
    risultatoEl.innerHTML = "HAI VINTO. Grandi premi per te ti aspettano. Continua a giocare !!"
    console.log("Congratulation,there is the sun today !")
}
risultatoAppend.appendChild(risultatoEl)



//Selezione bottone e creazione nuovi numeri random al click del bottone
const bottoneGenera = document.querySelector(".bottone-genera");
bottoneGenera.addEventListener("click",function(){
    bottoneGenera.classList.toggle("active")
    numeroGiocatore = Number.parseInt(Math.floor(Math.random() * 6) + 1)
    numeroComputer = Number.parseInt(Math.floor(Math.random() * 6) + 1)
    numeroGiocatoreEl.innerHTML = numeroGiocatore
    numeroComputerEl.innerHTML = numeroComputer
    if (numeroGiocatore == numeroComputer){
        risultatoEl.innerHTML = "Mi dispiace, hai pareggiato. Come si dice, meglio una giornata di pioggia che un pareggio."
        console.log(numeroGiocatore, "VS", numeroComputer)
        console.log("Better the rain, same number !")
    } else if(numeroComputer > numeroGiocatore){
        risultatoEl.innerHTML = "Mi dispiace hai perso. Non ti abbatere, prova di nuovo."
        console.log(numeroGiocatore, "VS", numeroComputer)
        console.log("I'm sorry. The pc bet you.")
    } else {
        risultatoEl.innerHTML = "HAI VINTO. Grandi premi per te ti aspettano. Continua a giocare !!"
        console.log(numeroGiocatore, "VS", numeroComputer)
        console.log("Congratulation,there is the sun today !")
    }
    risultatoAppend.appendChild(risultatoEl)
});






