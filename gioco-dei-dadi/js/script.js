const numeroGiocatore = Number.parseInt(Math.floor(Math.random() * 6) + 1)
const numeroComputer = Number.parseInt(Math.floor(Math.random() * 6) + 1)
console.log(numeroGiocatore, "VS", numeroComputer)

if (numeroGiocatore == numeroComputer){
    console.log("Better the rain, same number !")
} else if(numeroComputer > numeroGiocatore){
    console.log("I'm sorry. The pc bet you.")
} else {
    console.log("Congratulation,there is the sun today !")
}
