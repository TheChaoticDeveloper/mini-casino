let player=[];
let dealer=[];
let money=1000;

function drawCard(){
return Math.floor(Math.random()*10)+1;
}

function startGame(){

player=[drawCard(),drawCard()];
dealer=[drawCard(),drawCard()];

updateDisplay();
}

function hit(){

player.push(drawCard());

if(total(player)>21){
lose();
}

updateDisplay();
}

function stand(){

while(total(dealer)<17){
dealer.push(drawCard());
}

let p=total(player);
let d=total(dealer);

if(d>21 || p>d){
win();
}
else if(d>p){
lose();
}
else{
document.getElementById("result").innerHTML="Draw";
}

updateDisplay();
}

function total(hand){

let sum=0;

for(let i=0;i<hand.length;i++){
sum+=hand[i];
}

return sum;
}

function win(){

let bet=parseInt(document.getElementById("bet").value);

money+=bet;

document.getElementById("result").innerHTML="You Win!";
updateMoney();
}

function lose(){

let bet=parseInt(document.getElementById("bet").value);

money-=bet;

document.getElementById("result").innerHTML="You Lose!";
updateMoney();
}

function updateDisplay(){

document.getElementById("player").innerHTML="Player: "+player.join(" ");
document.getElementById("dealer").innerHTML="Dealer: "+dealer.join(" ");

document.getElementById("playerTotal").innerHTML="Total: "+total(player);
document.getElementById("dealerTotal").innerHTML="Total: "+total(dealer);

}

function updateMoney(){

document.getElementById("money").innerHTML=money;

}

function resetGame(){

player=[];
dealer=[];

document.getElementById("result").innerHTML="";
updateDisplay();

}
