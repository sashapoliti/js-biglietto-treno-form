// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

let elUserDatas = document.getElementById('userDatas');
let elUserKm = document.getElementById('userKm');
let elUserAge = document.getElementById('userAge');
const priceKm = 0.21;
let elButton = document.querySelector('.btn.btn-primary');

console.log(elUserDatas);
console.log(elUserKm);

elButton.addEventListener('click', function(){
    let datas = elUserDatas.value;
    let km = parseFloat(elUserKm.value);
    let

});



//let price = 0.21 * distance;

// if (age < 18) {
//     price = price - price * 20 / 100;
// } else if (age > 65) {
//     price = price - price * 40 / 100;
// }
// console.log(price);
// price = price.toFixed(2);

// document.getElementById('app').innerHTML = "Il prezzo del tuo biglietto è: " + price + '€';