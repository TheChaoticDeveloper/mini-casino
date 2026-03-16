let player=[];
let dealer=[];
let money=1000;

function drawCard(){
return Math.floor(Math.random()*10)+1;
}

function startGame(){

player=[drawCard(),drawCard()];
dealer=[drawCard(),drawCard()];

document.getElementById("startButtons").style.display="none";
document.getElementById("gameButtons").style.display="block";
document.getElementById("endButtons").style.display="none";

document.getElementById("result").innerHTML="";

updateDisplay();
}

function hit(){

player.push(drawCard());

if(total(player)>21){
lose("Bust! Dealer Wins");
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
win("You Win!");
}
else if(d>p){
lose("Dealer Wins");
}
else{
draw();
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

function win(message){

let bet=parseInt(document.getElementById("bet").value);

money+=bet;

document.getElementById("result").innerHTML=message;

endRound();
}

function lose(message){

let bet=parseInt(document.getElementById("bet").value);

money-=bet;

document.getElementById("result").innerHTML=message;

endRound();
}

function draw(){

document.getElementById("result").innerHTML="Draw";

endRound();
}

function endRound(){

updateMoney();

document.getElementById("gameButtons").style.display="none";
document.getElementById("endButtons").style.display="block";

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

document.getElementById("player").innerHTML="";
document.getElementById("dealer").innerHTML="";
document.getElementById("playerTotal").innerHTML="";
document.getElementById("dealerTotal").innerHTML="";
document.getElementById("result").innerHTML="";

document.getElementById("startButtons").style.display="block";
document.getElementById("gameButtons").style.display="none";
document.getElementById("endButtons").style.display="none";

}
