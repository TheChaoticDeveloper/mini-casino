let money = 1000;

function spin(){

let bet = parseInt(document.getElementById("bet").value);

let r1=document.getElementById("r1");
let r2=document.getElementById("r2");
let r3=document.getElementById("r3");

let spins=0;

let animation=setInterval(function(){

r1.innerHTML=Math.floor(Math.random()*9)+1;
r2.innerHTML=Math.floor(Math.random()*9)+1;
r3.innerHTML=Math.floor(Math.random()*9)+1;

spins++;

if(spins>15){

clearInterval(animation);

let n1=parseInt(r1.innerHTML);
let n2=parseInt(r2.innerHTML);
let n3=parseInt(r3.innerHTML);

let result="";

if(n1===n2 && n2===n3){

money+=bet*5;
result="🎉 JACKPOT!";

}
else if(n1===n2 || n2===n3){

money+=bet*2;
result="Small Win";

}
else{

money-=bet;
result="Try Again";

}

document.getElementById("money").innerHTML=money;
document.getElementById("result").innerHTML=result;

}

},100);

}
