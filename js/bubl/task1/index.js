"use strick";
// option 1
/*
const items = document.querySelectorAll('.list-item');
items.forEach(item=> {
item.addEventListener('click', handleClick);
})


function handleClick (){
console.log('clicked');
}
*/
//option 2
const item =  document.querySelector('.list');
item.addEventListener('click', handleClick2);


function handleClick2 (event){
if(event.target.className !== 'list-item'){
return;
};
  console.log(event.target.textContent);
}

//WEB FLOW !!!!!
// 1.get data from server ===> [{}, {}, {}];
// 2.render()!!
// 3.handle event
// 4.


// algo
//1. find task
//2. update find fill
//3. render
function handleClick3(){

}