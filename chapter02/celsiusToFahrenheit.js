let celsius = Number(prompt('what is your number in celsius?'));
let fahrenheit = celsius * (9/5) + 32;
document.getElementById('insert').innerText = `your number in fahrenheit is ${fahrenheit}`