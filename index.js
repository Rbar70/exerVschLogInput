const input = document.querySelector('input');
input.addEventListener('change', updateValue);

function updateValue(e) 
{
log.textContent = e.target.value +" had a great hoilday weekend, but his sister cooked the turkey upside down!!!!";
console.log((e.target.value)+" had a great hoilday weekend, but his sister cooked the turkey upside down!!!!" );
}