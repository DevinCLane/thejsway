let userRawPrice = Number(prompt('what is the price of this item?'));
let VATRate = 20.6;

let userVATRate = userRawPrice * (VATRate * .01);
let finalPrice = userVATRate + userRawPrice;

document.getElementById('insert').innerText = `Your tax is ${userVATRate} and the final price after VAT is ${finalPrice}`

// console.log(userVATRate);