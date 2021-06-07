function disableButtons(){
  linear.disabled=true;
  binary.disabled=true;
}

function disableNewArray(){
  new_array.disabled=true;
}

function disableInput(){
  document.querySelector('input').value='';
  num.disabled=true;
}

function disableBar(){
  array_size.disabled=true;
}

function enableButtons(){
  linear.disabled=false;
  binary.disabled=false;
}

function enableNewArray(){
  new_array.disabled=false;
}

function enableInput(){
  document.querySelector('input').value='';
  num.disabled=false;
}

function enableBar(){
  array_size.disabled=false;
}

function speed_anime(delay){
  return new Promise(resolve => {
    setTimeout(()=>{resolve('')},delay);
  });
}

let search_display=document.querySelector('.search_display');
let searching_text=document.querySelector('.searching_text');
let result_text=document.querySelector('.result_text');
let searching_for=document.querySelector('.searching_for');
let result_for=document.querySelector('.result_for');
let searching_display=document.querySelector('.searching_display');
let result_display=document.querySelector('.result_display');
let num=document.querySelector('.num');
let linear=document.querySelector('.linear');
let binary=document.querySelector('.binary');
let index=document.querySelector('.index');
let index_text=document.querySelector('.index_text');
let array_size=document.querySelector('#size_input');
let array_speed=document.querySelector('#speed_input');
let new_array=document.querySelector('.newArray');
let array=[],delay=550;

document.querySelector('.array_size').innerHTML=array_size.value;
document.querySelector('.array_speed').innerHTML=array_speed.value;

array_size.addEventListener('input', function(){
  document.querySelector('.array_size').innerHTML=array_size.value;
  createNewArray(parseInt(array_size.value));
})
array_speed.addEventListener('input', function(){
  document.querySelector('.array_speed').innerHTML=array_speed.value;
  delay=600-parseInt(array_speed.value);
})

new_array.addEventListener('click', function(){
  createNewArray(parseInt(array_size.value));
})

function createNewArray(no_of_bars=32){

  deleteElements();

  array=[];

  for(let i=0;i<no_of_bars;i++){
    array.push(Math.floor(Math.random() * 250) + 1);
  }

  for(let i=0;i<no_of_bars/2;i++){
    const bar=document.createElement("div");
    bar.style.height="60px";
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bar.innerHTML=array[i];
    bars.appendChild(bar);
  }
  for(let i=Math.ceil(no_of_bars/2);i<no_of_bars;i++){
    const bar=document.createElement("div");
    bar.style.height="60px";
    bar.classList.add('bar_');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bar.innerHTML=array[i];
    bars_.appendChild(bar);
  }
}

createNewArray(parseInt(array_size.value));

function deleteElements(){
  let bars=document.querySelector("#bars");
  let bars_=document.querySelector("#bars_");
  bars_.innerHTML='';
  bars.innerHTML='';
}
