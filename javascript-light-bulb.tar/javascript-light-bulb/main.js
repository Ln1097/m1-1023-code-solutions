let isOn=false;
const ceiling=document.querySelector('.ceiling');
const lightbulb=document.querySelector('.lightbulb')
lightbulb.addEventListener('click',function (event){
  isOn=!isOn;
  if(isOn){
    ceiling.className='ceiling is-on';
    lightbulb.className='lightbulb is-on'
  }else{
    ceiling.className='ceiling';
    lightbulb.className='lightbulb'
  }
})
