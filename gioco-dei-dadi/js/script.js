const numeroGiocatore = Number.parseInt(Math.floor(Math.random() * 6) + 1)
const numeroComputer = Number.parseInt(Math.floor(Math.random() * 6) + 1)
console.log(numeroGiocatore, numeroComputer)

if (numeroGiocatore > numeroComputer){
    console.log("Congratulations, you have win !")
} else {
    console.log("I'm sorry. The pc bet you.")
}
