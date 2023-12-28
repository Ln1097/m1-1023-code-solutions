const taskList = document.querySelector('.task-list'); // select the button element

taskList.addEventListener('click', function(event){
  console.log('event.target:',event.target);
  console.log('event.target.tagName:',event.target.tagName);
  console.log(event.target.closest('.task-list-item'));
  console.log(event.target.remove(event.target.closest('.task-list-item')));
});
