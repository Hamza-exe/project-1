'use strict';

const celsius = document.getElementById('celsius-output');
const farenheit = document.getElementById('farenheit-output');
const buttonf = document.getElementById('buttonf');
const buttonc = document.getElementById('buttonc');
const cels = document.getElementById('cels');
const farh = document.getElementById('farh');
const darkmode = document.getElementById('toggler');

buttonc.addEventListener('click', function() {
    const message = cels.value.trim();
    const result = (message - 32) * 5 / 9;
    const rounded = result.toFixed(2);
    if(message === ""){
        celsius.innerText = 'Please input the values';
    }else if(isNaN(message)){
        celsius.innerText = 'Input must be a valid number';
    }else{
        celsius.innerText = `${message}°F is ${rounded}°C`;
    }
});

buttonf.addEventListener('click', function() {
    const message = farh.value.trim();
    const result = message * 1.8 + 32;
    const rounded = result.toFixed(2);
    if(message === ""){
        farenheit.innerText = 'Please input the values';
    }else if(isNaN(message)){
        farenheit.innerText = 'Input must be a valid number';
    }else{
        farenheit.innerText = `${message}°C is ${rounded}°F`;
    }
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
}

darkmode.addEventListener('click', function() {
    this.classList.toggle('dark');
    document.getElementById('toggler').style.backgroundColor = '#238327';
    if (this.classList.contains('dark'))
        this.innerText = 'Light Mode';
    else
        this.innerText = 'Dark Mode';
});