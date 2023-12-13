function handleClick(event){
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
const element = document.querySelector('.click-button');
  if (!$clickButton) throw new Error('The $clickBtn query failed');
  element.addEventListener('click', handleClick);


function handleMouseOver(event){
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
 const element2 =document.querySelector('.hover-button');
  if (!$hoverButton) throw new Error('The $hoverButton query failed');
  element2.addEventListener('mouseover',event)

function handleDoubleClick(event){
  console.log('button doubled-clicked');
  console.log(event);
  console.log(event.target);
}
 const element3=document.querySelector(.'double-click-button');
  if (!$dblClickButton) throw new Error('The $dblClickButton query failed');
  element3.addEventListener('dblclick', handleDoubleClick);
