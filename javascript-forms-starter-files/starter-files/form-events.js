function handleFocus(event){
  console.log('focus event was fired')
  console.log('event.target.name')
}

function handleBlur(event){
  console.log('blur event was fired')
  console.log('event.target.name')
}

function handleInput(event){
  console.log('event.target.name')
  console.log('event.target.value')
}
const $nameInput=document.querySelector('#user-name');
const $emailInput=document.querySelector('#user-email');
const $messageInput=document.querySelector('#user-message');

$nameInput.addEventListener('focus',handleFocus);
$emailInput.addEventListener('focus',handleFocus);
$messageInput.addEventListener('focus',handleFocus);

$nameInput.addEventListener('blur',handleBlur);
$emailInput.addEventListener('blur',handleBlur);
$messageInput.addEventListener('blur',handleBlur);

$nameInput.addEventListener('input',handleInput);
$emailInput.addEventListener('input',handleInput);
$messageInput.addEventListener('input',handleInput);
