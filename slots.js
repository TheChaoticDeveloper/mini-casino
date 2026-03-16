let money=1000;

function spin(){

let bet=parseInt(document.getElementById("bet").value);

let r1=Math.floor(Math.random()*9)+1;
let r2=Math.floor(Math.random()*9)+1;
let r3=Math.floor(Math.random()*9)+1;

document.getElementById("reels").innerHTML=r1+" "+r2+" "+r3;

let result="";

if(r1===r2 && r2===r3){

money+=bet*5;
result="🎉 JACKPOT!";

}
else if(r1===r2 || r2===r3){

money+=bet*2;
result="Small Win";

}
else{

money-=bet;
result="Try Again";

}

document.getElementById("result").innerHTML=result;
document.getElementById("money").innerHTML=money;

}

function resetSlots(){

document.getElementById("reels").innerHTML="🎲 🎲 🎲";
document.getElementById("result").innerHTML="";

}
