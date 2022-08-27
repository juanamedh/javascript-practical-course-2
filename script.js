const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const arg1 = document.querySelector('#arg1');
const arg2 = document.querySelector('#arg2');
const btn = document.querySelector('#calcBttn');
const pTotal = document.querySelector('#total');

form.addEventListener('submit', bttnOnclick);

function bttnOnclick(event) {
    event.preventDefault()
    const addition = parseInt(arg1.value) + parseInt(arg2.value);
    pTotal.innerText = "Your total is " + addition;
}