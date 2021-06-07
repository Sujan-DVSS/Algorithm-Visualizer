function swap(h1, h2){
  let temp=h1.style.height;
  h1.style.height=h2.style.height;
  h2.style.height=temp;
}

function disableSearching(){
  document.querySelector(".linearSearch").disabled=true;
  document.querySelector(".binarySearch").disabled=true;
}

function enableSearching(){
  document.querySelector(".linearSearch").disabled=false;
  document.querySelector(".binarySearch").disabled=false;
}

function disableInput(){
  document.querySelector('.num').value='';
  num.disabled=true;
}

function enableInput(){
  document.querySelector('.num').value='';
  num.disabled=false;
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

let num=document.querySelector(".num");
let array_size=document.querySelector("#size_input");
let array_speed=document.querySelector("#speed_input");
let new_array=document.querySelector(".newArray");
let home=document.querySelector(".home_");
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
  enableSearching();
  enableSizeBar();
})

function createNewArray(no_of_bars=30){

  deleteElements();

  array = [];

  for(let i=0;i<no_of_bars;i++){
    array.push(Math.floor( Math.random() * 250 ) +1);
  }

  const bars=document.querySelector("#bars");
  let array_ele=document.querySelector(".array_ele");

  for(let i=0;i<no_of_bars;i++){
    const bar=document.createElement("div");
    bar.style.height=`${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    // document.querySelector(".flex-item").style.borderRadius = "10px";
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
    array_ele.innerHTML+=`${array[i]}  `;
  }


}

createNewArray();

function deleteElements(){
  let array_ele=document.querySelector(".array_ele");
  let bars=document.querySelector("#bars");
  bars.innerHTML=''
  array_ele.innerHTML='The Array is: '
}
