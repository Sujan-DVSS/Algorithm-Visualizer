function swap(h1, h2){
  let temp=h1.style.height;
  h1.style.height=h2.style.height;
  h2.style.height=temp;
}

function disableSorting(){
  document.querySelector(".bubbleSort").disabled=true;
  document.querySelector(".selectionSort").disabled=true;
  document.querySelector(".insertionSort").disabled=true;
  document.querySelector(".quickSort").disabled=true;
  document.querySelector(".mergeSort").disabled=true;
}

function enableSorting(){
  document.querySelector(".bubbleSort").disabled=false;
  document.querySelector(".selectionSort").disabled=false;
  document.querySelector(".insertionSort").disabled=false;
  document.querySelector(".quickSort").disabled=false;
  document.querySelector(".mergeSort").disabled=false;
}

function disableSizeBar(){
  document.querySelector("#size_input").disabled=true;
}

function enableSizeBar(){
  document.querySelector("#size_input").disabled=false;
}

function disableNewArray(){
  document.querySelector(".newArray").disabled=true;
}

function enableNewArray(){
  document.querySelector(".newArray").disabled=false;
}

function speed_anime(delay){
  return new Promise(resolve=> {
    setTimeout(()=>{resolve('')},delay);
  })
}

let array_size=document.querySelector("#size_input");
let array_speed=document.querySelector("#speed_input");
let new_array=document.querySelector(".newArray");
let array=[],delay=270;

document.querySelector(".array_size").innerHTML=array_size.value;
document.querySelector(".array_speed").innerHTML=array_speed.value;

array_size.addEventListener('input',()=>{
  document.querySelector(".array_size").innerHTML=array_size.value;
  createNewArray(parseInt(array_size.value));
})

array_speed.addEventListener('input',()=>{
  document.querySelector(".array_speed").innerHTML=array_speed.value;
  delay=320 - parseInt(array_speed.value);
})

new_array.addEventListener('click',()=>{
  createNewArray(array_size.value);
  enableSorting();
  enableSizeBar();
})

function createNewArray(no_of_bars=60){

  deleteElements();

  array = [];

  for(let i=0;i<no_of_bars;i++){
    array.push(Math.floor( Math.random() * 250 ) +1);
  }

  const bars=document.querySelector("#bars");

  for(let i=0;i<no_of_bars;i++){
    const bar=document.createElement("div");
    bar.style.height=`${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }


}

createNewArray();

function deleteElements(){
  let bars=document.querySelector("#bars");
  bars.innerHTML=''
}
