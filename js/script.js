let elUserDatas = document.getElementById('userDatas');
let elUserKm = document.getElementById('userKm');
let elUserAge = document.getElementById('userAge');
const priceKm = 0.21;
const juniorDiscount = 20 / 100;
const overDiscount = 40 / 100;
let elButton = document.querySelector('.btn.btn-danger');

elButton.addEventListener('click', function(){
    let datas = elUserDatas.value;
    let km = parseFloat(elUserKm.value);
    let age = elUserAge.value;

    let price = km * priceKm;
    if (age === 'junior') {
        price -= price * juniorDiscount;
    } else if (age === 'over') {
        price -= price * overDiscount;
    } 
    price = price.toFixed(2);
    document.getElementById('price').innerHTML = price;
});