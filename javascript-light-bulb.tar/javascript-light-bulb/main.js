const container=document.getElementById('container');
const circle=document.getElementById('circle');

container.addEventListener('mouseover', function handleMouseOver(){
  container.style.backgroundColor="beige";
});
circle.addEventListener('mouseover', function handleMouseOver(){
  circle.style.backgroundColor="yellow";
});
container.addEventListener('mouseout', function handleMouseOut(){
  container.style.backgroundColor="black";
});
container.addEvenetListner('mouseout', function handleMouseOut(){
  circle.style.backgroundColor="gray";
});
