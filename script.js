const h1 = document.querySelector('h1');
const arg1 = document.querySelector('#arg1');
const arg2 = document.querySelector('#arg2');
const btn = document.querySelector('#calcBttn');
const pTotal = document.querySelector('#total')

btn.addEventListener('click', bttnOnclick);

function bttnOnclick() {
    const addition = parseInt(arg1.value) + parseInt(arg2.value);
    pTotal.innerText = "Your total is " + addition;
}