let player = [];
let dealer = [];

function drawCard(){
return Math.floor(Math.random()*10)+1;
}

function startGame(){

player = [drawCard(),drawCard()];
dealer = [drawCard(),drawCard()];

updateDisplay();

}

function hit(){

player.push(drawCard());

if(total(player) > 21){
document.getElementById("result").innerHTML =
"Bust! Dealer Wins";
}

updateDisplay();

}

function stand(){

while(total(dealer) < 17){
dealer.push(drawCard());
}

let p = total(player);
let d = total(dealer);

let result="";

if(d>21 || p>d){
result="You Win!";
}
else if(d>p){
result="Dealer Wins";
}
else{
result="Draw";
}

document.getElementById("result").innerHTML=result;

updateDisplay();

}

function total(hand){

let sum = 0;

for(let i=0;i<hand.length;i++){
sum += hand[i];
}

return sum;

}

function updateDisplay(){

document.getElementById("player").innerHTML =
"Player: "+player.join(" ");

document.getElementById("dealer").innerHTML =
"Dealer: "+dealer.join(" ");

}

