"use strick";
// option 1
const items = document.querySelectorAll('.list-item');
items.forEach(item=> {
item.addEventListener('click', handleClick);
})


function handleClick (){
console.log('clicked');
}

//option 2
const item =  document.querySelector('.list');
item.addEventListener('click', handleClick2);


function handleClick2 (event){
console.log(event);
  console.log('list clicked');
}

