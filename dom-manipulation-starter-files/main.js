let count=0;
const hot=document.querySelector('.hot-button');
const click=document.querySelector('.click-count');
hot.addEventListener('click',function(event){
  count++;
  let temperature;
  if(count<4){
    temperature="cold";
  }else if(count<7){
    temperature="cool";
  }else if(count<10){
    temperature="tepid";
  }else if(count<13){
    temperature="warm";
  }else if(count<16){
    temperature="hot";
  }else{
    temperature="nuclear"
  }
  hot.className = 'hot-button '+temperature;
  click.textContent = 'Clicks: ' + count;
});
