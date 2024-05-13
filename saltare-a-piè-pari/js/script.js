const listaPari = [];

for(let i = 0; i < 6; i++){
    const numeroUtente = Number.parseInt(prompt("Dimmi un numero!"))

    if(numeroUtente % 2 === 0){
        listaPari.push(numeroUtente)
    }
}
console.log(listaPari)