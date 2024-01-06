const tab=document.querySelector(".tab-container")
const tabList=document.querySelectorAll(".tab")
const viewList=document.querySelectorAll(".view")
tab.addEventListener("click",handleViewSwap);
function handleViewSwap(event){
  if (!event.target.matches('.tab')){
    return;
  }
  for (let tabIndex=0; tabIndex<tabList.length; tabIndex++){
    if(tabList[tabIndex]===event.target){
      tabList[tabIndex].className='tab active';
    }else{
      tabList[tabIndex].className='tab';
    }
  }


const viewName=event.target.getAttribute('data-view');
for(let viewIndex=0; viewIndex<viewList.length; viewIndex++){
  if(viewList[viewIndex].getAttribute('data-view')!==viewName){
    viewList[viewIndex].className='view hidden';
  }else{
    viewList[viewIndex].className='view';
  }
}
}
