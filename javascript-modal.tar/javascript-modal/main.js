const open=document.getElementById('open');
const modalC=document.getElementById('modalC');
const close=document.getElementById('close');

open.addEventListener('click',()=>{
  modalC.classList.add('show');
});

close.addEventListener('click',()=>{
  modalC.classList.remove('show');
});
