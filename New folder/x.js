function display(){
var vechile = document.getElementByID("vechilename").value;
var payment = document.getElementByID("paymenttype").value;
var res = document.getElementByID("result");
var price = 0;
if(vechile === "Bajaj Pulsar 160 Ns"){
  price = 111000;
}else if(vechile === "Bajaj Pulsar 200 Ns"){
  price = 135000;
}else if(vechile === "Bajaj Dominar 400"){
  price = 207000;
}



var totAmount = price*(130/100);
totAmount = Math.round(totAmount);

res.innerHTML = "An amount of Rs. "+totAmount+", inclusive of tax has been received by "+payment;
return false;
}

function today(){
  var x = new Date();
 x.getFullYear()+'-'+("0"+(x.getMonth()+1)).slice(-2)+'-'+("0"+x.getDate()).slice(-2)
}
