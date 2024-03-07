let elUserDatas = document.getElementById('userDatas');
let elUserKm = document.getElementById('userKm');
let elUserAge = document.getElementById('userAge');
const priceKm = 0.21;
const juniorDiscount = 20 / 100;
const overDiscount = 40 / 100;
let elButton = document.querySelector('.btn.btn-danger');
let elTicket = document.getElementById('ticket');

elButton.addEventListener('click', function(){
    let datas = elUserDatas.value;
    let km = parseFloat(elUserKm.value);
    let age = elUserAge.value;

    if (!(datas==='') && !isNaN(km) && !(age==='')) {
    elTicket.classList.remove('d-none');
    document.getElementById('name').innerHTML = datas;
    document.getElementById('discount').innerHTML = 'Biglietto Standard';

    let price = km * priceKm;
    if (age === 'junior') {
        price -= price * juniorDiscount;
        document.getElementById('discount').innerHTML = 'Biglietto Junior';
    } else if (age === 'over') {
        price -= price * overDiscount;
        document.getElementById('discount').innerHTML = 'Biglietto Senior';
    };
    price = price.toFixed(2);
    
    document.getElementById('carriage').innerHTML = getRndInteger(1,12);
    document.getElementById('code').innerHTML = getRndInteger(10000,99999);
    document.getElementById('price').innerHTML = price + '€';
} else {
    alert('Dati inseriti non corretti!')
}
});