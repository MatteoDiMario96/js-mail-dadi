const listaEmail = [
    "pincopallino@gmail.com",
    "mariaantonietta@gmail.com",
    "gisellaantoni@gmail.com",
    "carlopalmieri@gmail.com",
    "francoanselmi@gmail.com",
    "ginoginetti@gmail.com",
    "dinodinetti@gmail.com",
    "simonesimonetti@gmail.com",
    "paolopaoletti@gmail.com",
    "marcomarchetti@gmail.com",
    "zorrozorretti@gmail.com",
    "adelmosuozzo@gmail.com"
]

let utenteEmail = prompt("Dicci la tua E-mail, Perfavore!")
utenteEmail = utenteEmail.substring(0, utenteEmail.length).toLowerCase();
// console.log(utenteEmail)

if(listaEmail.includes(utenteEmail)){
    console.log("Accesso: CONSENTITO")
} else{
    console.log("Accesso: NEGATO")
}